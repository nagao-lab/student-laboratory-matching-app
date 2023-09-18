package service

import (
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph/model"

	"gorm.io/gorm"
)

type IStudentService interface {
	GetStudentById(id string) (*model.Student, error)
}

type studentService struct {
	db *gorm.DB
}

func (s *studentService) GetStudentById(id string) (*model.Student, error) {
	var student db.Student
	err := s.db.First(&student, id).Error
	if err != nil {
		return nil, err
	}
	return model.ConvertStudent(&student), nil
}
