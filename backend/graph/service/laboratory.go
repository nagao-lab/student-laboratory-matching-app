package service

import (
	"context"
	"fmt"
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph/model"
	"student-laboratory-matching-app/middleware/auth"
	"student-laboratory-matching-app/tools"

	"gorm.io/gorm"
)

type ILaboratoryService interface {
	GetLaboratoryById(id string) (*model.Laboratory, error)
	GetMatchableLaboratories(string) ([]*model.Laboratory, error)
	LoginLaboratory(context.Context, string, string) (*model.Laboratory, error)
	LogoutLaboratory(context.Context) (bool, error)
	SignupLaboratory(context.Context, model.NewLaboratory) (*model.Laboratory, error)
}

type laboratoryService struct {
	db *gorm.DB
}

func (ls *laboratoryService) GetLaboratoryById(id string) (*model.Laboratory, error) {
	var record db.Laboratory
	err := ls.db.First(&record, id).Error
	if err != nil {
		return nil, err
	}
	laboratory := model.ConvertLaboratory(&record)

	var numLikes int64
	err = ls.db.Table("student_laboratories").
		Where("laboratory_id = ? AND status IN (?, ?)", record.ID, model.LikeStatusIndexFromStudent, model.LikeStatusIndexFromBoth).
		Count(&numLikes).
		Error
	if err != nil {
		return nil, err
	}
	laboratory.NumLikes = int(numLikes)

	return laboratory, nil
}

func (ls *laboratoryService) SignupLaboratory(ctx context.Context, newLaboratory model.NewLaboratory) (*model.Laboratory, error) {
	record := db.Laboratory{
		Email:    newLaboratory.Email,
		Password: tools.HashPassword(newLaboratory.Password),
		// UID: uuid.New().String(), // TODO: Change the UID column to TEXT and create UID
	}

	// Check whether the email is already used.
	result := ls.db.Where("Email = ?", record.Email).Find(&record)
	if result.RowsAffected != 0 {
		return nil, fmt.Errorf("signup: the account already exist")
	}

	err := ls.db.Select("Email", "Password").Create(&record).Error
	if err != nil {
		return nil, err
	}

	Laboratory := model.ConvertLaboratory(&record)

	CA := auth.GetCookieAccess(ctx)
	CA.Login(Laboratory.ID)

	fmt.Println("signup: Success!")
	return Laboratory, nil
}

func (ls *laboratoryService) LoginLaboratory(ctx context.Context, email, password string) (*model.Laboratory, error) {
	var record db.Laboratory
	err := ls.db.Where("Email LIKE ?", email).Find(&record).Error
	if err != nil {
		return nil, fmt.Errorf("Login failed: the email or password is incorrect")
	}

	if ok := tools.CheckPassword(record.Password, password); !ok {
		return nil, fmt.Errorf("Login failed: the email or password is incorrect")
	}

	laboratory := model.ConvertLaboratory(&record)

	CA := auth.GetCookieAccess(ctx)
	CA.Login(laboratory.ID)

	fmt.Println("Login success")
	return laboratory, nil
}

func (ls *laboratoryService) LogoutLaboratory(ctx context.Context) (bool, error) {
	CA := auth.GetCookieAccess(ctx)
	CA.Logout()

	fmt.Println("Logout success")
	return true, nil
}

func (ls *laboratoryService) GetMatchableLaboratories(laboratoryId string) ([]*model.Laboratory, error) {
	// すでにいいねのアクションがある(非NULLかつBLANKでない)研究室は除く
	var excludedLaboratoryIds []int
	err := ls.db.Table("laboratory_laboratories").
		Select("DISTINCT laboratory_id").
		Where("laboratory_id = ?", laboratoryId).
		Where("status IS NOT NULL AND status <> ?", model.LikeStatusBlank).
		Pluck("laboratory_id", &excludedLaboratoryIds).Error
	if err != nil {
		fmt.Println("GetMatchableLaboratories failed: cannot get laboratoryIds", err)
	}

	// 研究室の一覧を新しい順に取得する
	var records []db.Laboratory
	err = ls.db.Table("laboratories").
		Where("id NOT IN (?)", excludedLaboratoryIds).
		Order("created_at DESC").
		Find(&records).Error
	if err != nil {
		return nil, fmt.Errorf("GetMatchableLaboratories failed: cannot get laboratories")
	}

	laboratories := []*model.Laboratory{}
	for _, record := range records {
		laboratory := model.ConvertLaboratory(&record)
		if laboratory.IsNotActive() {
			// laboratorys.status はsignup時 NULL であることを考慮して上のSQLクエリで絞らず、
			// ここで INACTIVE でないかを判定する
			// TODO: signup時に ACTIVE で挿入するか要検討
			continue
		}
		laboratories = append(laboratories, laboratory)
	}
	return laboratories, nil
}
