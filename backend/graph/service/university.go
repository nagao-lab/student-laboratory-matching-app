package service

import (
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph/model"

	"gorm.io/gorm"
)

type IUniversityService interface {
	GetUniversityById(id string) (*model.University, error)
}

type univeristyService struct {
	db *gorm.DB
}

func (us *univeristyService) GetUniversityById(id string) (*model.University, error) {
	var university db.University
	err := us.db.First(&university, id).Error
	if err != nil {
		return nil, err
	}
	return model.ConvertUniversity(&university), nil
}
