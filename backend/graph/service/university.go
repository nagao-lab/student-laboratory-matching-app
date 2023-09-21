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
	GetAllUniversities() ([]*model.University, error)
}

type universityService struct {
	db *gorm.DB
}

func (us *universityService) CreateUniversity(newUniversity model.NewUniversity) (*model.University, error) {
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

func (us *universityService) GetUniversityById(id string) (*model.University, error) {
	var university db.University
	err := us.db.First(&university, id).Error
	if err != nil {
		return nil, err
	}
	return model.ConvertUniversity(&university), nil
}

func (us *universityService) GetAllUniversities() ([]*model.University, error) {
	var records []db.University
	err := us.db.Table("universities").
		Order("id ASC").
		Find(&records).Error
	if err != nil {
		return nil, err
	}

	universities := []*model.University{}
	for _, record := range records {
		university := model.ConvertUniversity(&record)
		universities = append(universities, university)
	}
	return universities, nil
}
