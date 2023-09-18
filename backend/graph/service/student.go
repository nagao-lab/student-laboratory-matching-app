package service

import (
	"fmt"
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph/model"
	"student-laboratory-matching-app/tools"

	"gorm.io/gorm"
)

type IStudentService interface {
	GetStudentById(id string) (*model.Student, error)
	Signup(model.NewStudent) (*model.Student, error)
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

func (ss *studentService) Signup(newStudent model.NewStudent) (*model.Student, error) {
	student := db.Student{
		Email:    newStudent.Email,
		Password: tools.HashPassword(newStudent.Password),
		// UID: uuid.New().String(), // TODO: Change the UID column to TEXT and create UID
	}

	// Check whether the email is already used.
	var record db.Student
	result := ss.db.Where("Email = ?", student.Email).Find(&record)
	if result.RowsAffected != 0 {
		return nil, fmt.Errorf("signup: the account already exist")
	}

	err := ss.db.Select("Email", "Password").Create(&student).Error
	if err != nil {
		return nil, err
	}

	fmt.Println("signup: Success!")
	return model.ConvertStudent(&student), nil
}
