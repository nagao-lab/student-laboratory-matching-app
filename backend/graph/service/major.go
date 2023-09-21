package service

import (
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph/model"

	"gorm.io/gorm"
)

type IMajorService interface {
	CreateMajor(string) (*model.Major, error)
	GetMajorByStudent(studentId string) ([]*model.Major, error)
	GetMajorByLaboratory(string) ([]*model.Major, error)
	GetAllMajors() ([]*model.Major, error)
}

type majorService struct {
	db *gorm.DB
}

func (ms *majorService) CreateMajor(name string) (*model.Major, error) {
	major := db.Major{
		Name: name,
	}
	err := ms.db.Create(&major).Error
	if err != nil {
		return nil, err
	}
	return model.ConvertMajor(&major), nil
}

func (ms *majorService) GetMajorByStudent(studentId string) ([]*model.Major, error) {
	var records []db.Major
	err := ms.db.Table("majors").
		Joins("JOIN student_majors ON majors.id = student_majors.major_id").
		Where("student_majors.student_id = ?", studentId).
		Find(&records).
		Error
	if err != nil {
		return nil, err
	}

	majors := []*model.Major{}
	for _, record := range records {
		majors = append(majors, model.ConvertMajor(&record))
	}
	return majors, nil
}

func (ms *majorService) GetMajorByLaboratory(laboratoryId string) ([]*model.Major, error) {
	var records []db.Major
	err := ms.db.Table("majors").
		Joins("JOIN laboratory_majors ON majors.id = laboratory_majors.major_id").
		Where("laboratory_majors.laboratory_id = ?", laboratoryId).
		Find(&records).
		Error
	if err != nil {
		return nil, err
	}

	majors := []*model.Major{}
	for _, record := range records {
		majors = append(majors, model.ConvertMajor(&record))
	}
	return majors, nil
}

func (ms *majorService) GetAllMajors() ([]*model.Major, error) {
	var records []db.Major
	err := ms.db.Table("majors").
		Order("id ASC").
		Find(&records).Error
	if err != nil {
		return nil, err
	}

	majors := []*model.Major{}
	for _, record := range records {
		major := model.ConvertMajor(&record)
		majors = append(majors, major)
	}
	return majors, nil
}
