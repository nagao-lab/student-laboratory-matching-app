package service

import (
	"strconv"
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph/model"

	"gorm.io/gorm"
)

type IUniversityService interface {
	CreateUniversity(model.NewUniversity) (*model.University, error)
	GetUniversityById(id string) (*model.University, error)
}

type univeristyService struct {
	db *gorm.DB
}

func (us *univeristyService) CreateUniversity(newUniversity model.NewUniversity) (*model.University, error) {
	prefectureIdUint64, _ := strconv.ParseUint(newUniversity.PrefectureID, 10, 64)
	university := db.University{
		PrefectureID: uint(prefectureIdUint64),
		Name:         newUniversity.Name,
		Address:      newUniversity.Address,
		MaxGpa:       newUniversity.MaxGpa,
	}
	err := us.db.Create(&university).Error
	if err != nil {
		return nil, err
	}
	return model.ConvertUniversity(&university), nil
}

func (us *univeristyService) GetUniversityById(id string) (*model.University, error) {
	var university db.University
	err := us.db.First(&university, id).Error
	if err != nil {
		return nil, err
	}
	return model.ConvertUniversity(&university), nil
}
