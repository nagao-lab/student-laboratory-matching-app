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

func (ss *studentService) GetStudentById(id string) (*model.Student, error) {
	var record db.Student
	err := ss.db.First(&record, id).Error
	if err != nil {
		return nil, err
	}
	student := model.ConvertStudent(&record)

	var numLikes int64
	err = ss.db.Table("student_laboratories").
		Where("student_id = ? AND status IN (?, ?)", record.ID, model.LikeStatusIndexFromLaboratory, model.LikeStatusIndexFromBoth).
		Count(&numLikes).
		Error
	if err != nil {
		return nil, err
	}
	student.NumLikes = int(numLikes)

	return student, nil
}
