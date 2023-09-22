package service

import (
	"context"
	"fmt"
	"log"
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph/model"
	"student-laboratory-matching-app/middleware/auth"
	"student-laboratory-matching-app/tools"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type IStudentService interface {
	GetStudentById(id string) (*model.Student, error)
	SignupStudent(context.Context, model.NewStudent) (*model.Student, error)
	LoginStudent(context.Context, string, string) (*model.Student, error)
	LogoutStudent(context.Context) (bool, error)
	GetMatchableStudents(string) ([]*model.Student, error)
	UpdateStudent(model.NewStudentFields) (*model.Student, error)
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

	log.Println("Success: Get student by studentID")
	return student, nil
}

func (ss *studentService) SignupStudent(ctx context.Context, newStudent model.NewStudent) (*model.Student, error) {
	record := db.Student{
		Email:    newStudent.Email,
		Password: tools.HashPassword(newStudent.Password),
		// UID: uuid.New().String(), // TODO: Change the UID column to TEXT and create UID
	}

	// Check whether the email is already used.
	result := ss.db.Where("Email = ?", record.Email).Find(&record)
	if result.RowsAffected != 0 {
		return nil, fmt.Errorf("signup: the account already exist")
	}

	err := ss.db.Select("Email", "Password").Create(&record).Error
	if err != nil {
		return nil, err
	}

	student := model.ConvertStudent(&record)

	CA := auth.GetCookieAccess(ctx)
	CA.Login(student.ID)

	log.Println("Success: Signup new student account")
	return student, nil
}

func (ss *studentService) LoginStudent(ctx context.Context, email, password string) (*model.Student, error) {
	var record db.Student
	err := ss.db.Where("Email LIKE ?", email).Find(&record).Error
	if err != nil {
		return nil, fmt.Errorf("Login failed: the email or password is incorrect")
	}

	if ok := tools.CheckPassword(record.Password, password); !ok {
		return nil, fmt.Errorf("Login failed: the email or password is incorrect")
	}

	student := model.ConvertStudent(&record)

	CA := auth.GetCookieAccess(ctx)
	CA.Login(student.ID)

	log.Println("Success: Login student account")
	return student, nil
}

func (ss *studentService) LogoutStudent(ctx context.Context) (bool, error) {
	CA := auth.GetCookieAccess(ctx)
	CA.Logout()

	log.Println("Success: Logout student account")
	return true, nil
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
	log.Println("Success: Get matchable Students")
	return students, nil
}

func (ss *studentService) UpdateStudent(newStudent model.NewStudentFields) (*model.Student, error) {
	var student db.Student
	err := ss.db.First(&student, newStudent.ID).Error
	if err != nil {
		return nil, err
	}

	// 変更のあるカラムは上書きする (冗長だからどうにかしたい)
	if newStudent.Name != nil {
		student.Name = *newStudent.Name
	}
	if newStudent.Email != nil {
		student.Email = *newStudent.Email
	}
	if newStudent.Password != nil {
		student.Password = tools.HashPassword(*newStudent.Password)
	}
	if newStudent.ImageURL != nil {
		student.ImageUrl = *newStudent.ImageURL
	}
	if newStudent.Gender != nil {
		student.Gender = model.GenderIndex[*newStudent.Gender]
	}
	if newStudent.Birthday != nil {
		// Specify RFC3339 or RFC3339Nano format string
		// e.g. 1999/02/26 → "1999-02-26T00:00:00Z"
		// ref. https://pkg.go.dev/time#pkg-constants
		student.Birthday = newStudent.Birthday
	}
	if newStudent.UniversityID != nil {
		student.UniversityID = tools.ParseStringToUint(*newStudent.UniversityID)
	}
	if newStudent.Grade != nil {
		student.Grade = *newStudent.Grade
	}
	if newStudent.Gpa != nil {
		student.Gpa = *newStudent.Gpa
	}
	if newStudent.Comment != nil {
		student.Comment = *newStudent.Comment
	}
	if newStudent.Interest != nil {
		student.Interest = *newStudent.Interest
	}
	if newStudent.Status != nil {
		student.Status = model.MatchStatusIndex[*newStudent.Status]
	}
	if newStudent.PrefectureID != nil {
		student.PrefectureID = tools.ParseStringToUint(*newStudent.PrefectureID)
	}

	err = ss.db.Save(&student).Error
	if err != nil {
		return nil, err
	}

	if newStudent.MajorIds != nil {
		// 現設計では初回設定のみ(つまりinsertのみ)をサポート
		// TODO: updateするように変更
		var studentMajors []*db.StudentMajor
		for _, majorId := range newStudent.MajorIds {
			studentMajors = append(studentMajors, &db.StudentMajor{
				StudentID: student.ID,
				MajorID:   tools.ParseStringToUint(*majorId),
			})
		}
		err = ss.db.Clauses(clause.OnConflict{DoNothing: true}).
			// 主キー(studentId, majorId)の衝突時は既にレコードが存在するため無視する
			Create(studentMajors).
			Error
		if err != nil {
			fmt.Println("UpdateStudent failed: cannot create student_majors")
		}
	}

	log.Println("Success: Update profile of student account")
	return model.ConvertStudent(&student), nil
}
