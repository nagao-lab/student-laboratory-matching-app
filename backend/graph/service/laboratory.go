package service

import (
	"context"
	"fmt"
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph/model"
	"student-laboratory-matching-app/middleware/auth"
	"student-laboratory-matching-app/tools"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type ILaboratoryService interface {
	GetLaboratoryById(id string) (*model.Laboratory, error)
	GetMatchableLaboratories(string) ([]*model.Laboratory, error)
	LoginLaboratory(context.Context, string, string) (*model.Laboratory, error)
	LogoutLaboratory(context.Context) (bool, error)
	SignupLaboratory(context.Context, model.NewLaboratory) (*model.Laboratory, error)
	UpdateLaboratory(model.NewLaboratoryFields) (*model.Laboratory, error)
	DeleteLaboratory(string) (bool, error)
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

func (ls *laboratoryService) GetMatchableLaboratories(studentId string) ([]*model.Laboratory, error) {
	// すでにいいねのアクションがある(非NULLかつBLANKでない)研究室は除く
	var excludedLaboratoryIds []int
	err := ls.db.Table("student_laboratories").
		Select("DISTINCT laboratory_id").
		Where("student_id = ?", studentId).
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
			// laboratories.status はsignup時 NULL であることを考慮して上のSQLクエリで絞らず、
			// ここで INACTIVE でないかを判定する
			// TODO: signup時に ACTIVE で挿入するか要検討
			continue
		}
		laboratories = append(laboratories, laboratory)
	}
	return laboratories, nil
}

func (ls *laboratoryService) UpdateLaboratory(newLaboratory model.NewLaboratoryFields) (*model.Laboratory, error) {
	var laboratory db.Laboratory
	err := ls.db.First(&laboratory, newLaboratory.ID).Error
	if err != nil {
		return nil, err
	}

	// 変更のあるカラムは上書きする (冗長だからどうにかしたい)
	if newLaboratory.Name != nil {
		laboratory.Name = *newLaboratory.Name
	}
	if newLaboratory.Professor != nil {
		laboratory.Professor = *newLaboratory.Professor
	}
	if newLaboratory.NumStudents != nil {
		laboratory.NumStudents = *newLaboratory.NumStudents
	}
	if newLaboratory.Email != nil {
		laboratory.Email = *newLaboratory.Email
	}
	if newLaboratory.Password != nil {
		laboratory.Password = tools.HashPassword(*newLaboratory.Password)
	}
	if newLaboratory.ImageURL != nil {
		laboratory.ImageUrl = *newLaboratory.ImageURL
	}
	if newLaboratory.LaboratoryURL != nil {
		laboratory.LaboratoryUrl = *newLaboratory.LaboratoryURL
	}
	if newLaboratory.UniversityID != nil {
		laboratory.UniversityID = tools.ParseStringToUint(*newLaboratory.UniversityID)
	}
	if newLaboratory.Comment != nil {
		laboratory.Comment = *newLaboratory.Comment
	}
	if newLaboratory.Status != nil {
		laboratory.Status = model.MatchStatusIndex[*newLaboratory.Status]
	}

	err = ls.db.Save(&laboratory).Error
	if err != nil {
		return nil, err
	}

	if newLaboratory.MajorIds != nil {
		// 現設計では初回設定のみ(つまりinsertのみ)をサポート
		// TODO: updateするように変更
		var laboratoryMajors []*db.LaboratoryMajor
		for _, majorId := range newLaboratory.MajorIds {
			laboratoryMajors = append(laboratoryMajors, &db.LaboratoryMajor{
				LaboratoryID: laboratory.ID,
				MajorID:      tools.ParseStringToUint(*majorId),
			})
		}
		err = ls.db.Clauses(clause.OnConflict{DoNothing: true}).
			// 主キー(studentId, majorId)の衝突時は既にレコードが存在するため無視する
			Create(laboratoryMajors).
			Error
		if err != nil {
			fmt.Println("UpdateLaboratory failed: cannot create laboratory_majors")
		}
	}

	return model.ConvertLaboratory(&laboratory), nil
}

func (ls *laboratoryService) DeleteLaboratory(id string) (bool, error) {
	var laboratory db.Laboratory
	if err := ls.db.First(&laboratory, id).Error; err != nil {
		return false, err
	}
	if err := ls.db.Delete(&laboratory, id).Error; err != nil {
		return false, err
	}
	return true, nil
}
