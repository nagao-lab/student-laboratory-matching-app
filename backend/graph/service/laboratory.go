package service

import (
	"fmt"
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph/model"

	"gorm.io/gorm"
)

type ILaboratoryService interface {
	GetLaboratoryById(id string) (*model.Laboratory, error)
	GetMatchableLaboratories(string) ([]*model.Laboratory, error)
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

func (ls *laboratoryService) GetMatchableLaboratories(studentId string) ([]*model.Laboratory, error) {
	// すでにいいねのアクションがある(非NULLかつBRANKでない)研究室は除く
	var excludedLaboratoryIds []int
	err := ls.db.Table("student_laboratories").
		Select("DISTINCT laboratory_id").
		Where("student_id = ?", studentId).
		Where("status IS NOT NULL AND status <> ?", model.LikeStatusBrank).
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
			// students.status はsignup時 NULL であることを考慮して上のSQLクエリで絞らず、
			// ここで INACTIVE でないかを判定する
			// TODO: signup時に ACTIVE で挿入するか要検討
			continue
		}
		laboratories = append(laboratories, laboratory)
	}
	return laboratories, nil
}
