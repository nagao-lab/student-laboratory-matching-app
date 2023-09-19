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
	Login(string, string) (*model.Student, error)
	GetMatchableStudents(string) ([]*model.Student, error)
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

func (ss *studentService) Login(email, password string) (*model.Student, error) {
	var record db.Student
	err := ss.db.Where("Email LIKE ?", email).Find(&record).Error
	if err != nil {
		return nil, fmt.Errorf("Login failed: the email or password is incorrect")
	}

	if ok := tools.CheckPassword(record.Password, password); !ok {
		return nil, fmt.Errorf("Login failed: the email or password is incorrect")
	}

	fmt.Println("Login success")
	return model.ConvertStudent(&record), nil
}

func (ss *studentService) GetMatchableStudents(laboratoryId string) ([]*model.Student, error) {
	// すでにいいねのアクションがある(非NULLかつBLANKでない)学生は除く
	var excludedStudentIds []int
	err := ss.db.Table("student_laboratories").
		Select("DISTINCT student_id").
		Where("laboratory_id = ?", laboratoryId).
		Where("status IS NOT NULL AND status <> ?", model.LikeStatusBlank).
		Pluck("student_id", &excludedStudentIds).Error
	if err != nil {
		fmt.Println("GetMatchableStudents failed: cannot get studentIds", err)
	}

	// 学生の一覧を新しい順に取得する
	var records []db.Student
	err = ss.db.Table("students").
		Where("id NOT IN (?)", excludedStudentIds).
		Order("created_at DESC").
		Find(&records).Error
	if err != nil {
		return nil, fmt.Errorf("GetMatchableStudents failed: cannot get students")
	}

	students := []*model.Student{}
	for _, record := range records {
		student := model.ConvertStudent(&record)
		if student.IsNotActive() {
			// students.status はsignup時 NULL であることを考慮して上のSQLクエリで絞らず、
			// ここで INACTIVE でないかを判定する
			// TODO: signup時に ACTIVE で挿入するか要検討
			continue
		}
		students = append(students, student)
	}
	return students, nil
}
