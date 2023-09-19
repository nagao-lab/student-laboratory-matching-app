package service

import (
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph/model"

	"gorm.io/gorm"
)

type ILaboratoryService interface {
	GetLaboratoryById(id string) (*model.Laboratory, error)
	GetLaboratoryList(id []string) ([]*model.Laboratory, error)
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

func (ls *laboratoryService) GetLaboratoryList(id []string) ([]*model.Laboratory, error) {
	var records []db.Laboratory
	err := ls.db.Where("id in ?", id).Find(&records).Error
	if err != nil {
		return nil, err
	}

	laboratory := []*model.Laboratory{}
	for _, record := range records {
		laboratory = append(laboratory, model.ConvertLaboratory(&record))
	}

	return laboratory, nil
}
