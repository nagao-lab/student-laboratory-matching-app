package db

import (
	"fmt"
	"student-laboratory-matching-app/model"
	"time"

	"gorm.io/gorm"
)

func SignupLaboratory(db *gorm.DB, account_laboratory model.Laboratory, university_name string, major_name string) error {
	var laboratory model.Laboratory

	exist_check := db.Where("Email = ?", account_laboratory.Email).Find(&laboratory)
	if exist_check.RowsAffected != 0 {
		return fmt.Errorf("error[signup]:account already exist")
	}

	err := CreateAccountLaboratory(db, account_laboratory, university_name)
	if err != nil {
		return err
	}

	err = CreateLaboratoryMajor(db, account_laboratory, major_name)
	if err != nil {
		return err
	}
	fmt.Println("signup:Success!")
	return nil
}

func SignupStudent(db *gorm.DB, account_student model.Student, university_name string, prefecture_name string, major_name string) error {
	var student model.Student

	exist_check := db.Where("Email = ?", account_student.Email).Find(&student)
	if exist_check.RowsAffected != 0 {
		return fmt.Errorf("error[signup]:account already exist")
	}
	err := CreateAccountStudent(db, account_student, university_name, prefecture_name)
	if err != nil {
		return err
	}
	err = CreateStudentMajor(db, account_student, major_name)
	if err != nil {
		return err
	}

	fmt.Println("signup:Success!")
	return nil
}

func LoginLaboratory(db *gorm.DB, email_in string, pass_in string) (model.Laboratory, error) {
	var laboratory model.Laboratory

	err := db.Where("Email = ?", email_in).First(&laboratory).Error
	if err != nil {
		return laboratory, fmt.Errorf("error[login]:account does not exist")
	}
	if laboratory.Password != pass_in {
		return laboratory, fmt.Errorf("error[login]:password does not match")
	}
	fmt.Println("login:Success!")
	return laboratory, nil
}

func LoginStudent(db *gorm.DB, email_in string, pass_in string) (model.Student, error) {
	var student model.Student

	err := db.Where("Email = ?", email_in).First(&student).Error
	if err != nil {
		return student, fmt.Errorf("error[login]:account does not exist")
	}
	if student.Password != pass_in {
		return student, fmt.Errorf("error[login]:password does not match")
	}
	fmt.Println("login:Success!!")
	return student, nil
}

// studentとmajorの紐づけ
func CreateStudentMajor(db *gorm.DB, student model.Student, major_name string) error {
	var major model.Major
	err := db.Where("Name = ?", major_name).First(&major).Error
	if err != nil {
		return fmt.Errorf("error[student_major]:major does not exist")
	}
	new_major := model.Student_Major{
		StudentID: student.ID,
		MajorID:   major.ID,
	}
	db.Create(&new_major)
	return nil
}

// labolatoryとmajorの紐づけ
func CreateLaboratoryMajor(db *gorm.DB, laboratory model.Laboratory, major_name string) error {
	var major model.Major
	err := db.Where("Name = ?", major_name).First(&major).Error
	if err != nil {
		return fmt.Errorf("error[student_major]:major does not exist")
	}
	new_major := model.Laboratory_Major{
		LaboratoryID: laboratory.ID,
		MajorID:      major.ID,
	}
	db.Create(&new_major)
	return nil

}

// studentにprefecture_idを代入
func InsertPrefectureIDToStudent(db *gorm.DB, student *model.Student, prefecture_name string) error {
	var prefecture model.Prefecture
	err := db.Where("Name = ?", prefecture_name).First(&prefecture).Error
	if err != nil {
		return fmt.Errorf("error[insert prefectureID to student]:prefecture does not exist")
	}
	student.PrefectureID = prefecture.ID
	return nil
}

// studentにunivesity_idを代入
func InsertUniversityIDToStudent(db *gorm.DB, student *model.Student, university_name string) error {
	var university model.University
	err := db.Where("Name = ?", university_name).First(&university).Error
	if err != nil {
		return fmt.Errorf("error[insert universityID to student]:university does not exist")
	}
	student.UniversityID = university.ID
	return nil
}

// laboratoryにunivesity_idを代入
func InsertUniversityIDToLaboratory(db *gorm.DB, lb *model.Laboratory, university_name string) error {
	var university model.University
	err := db.Where("Name = ?", university_name).First(&university).Error
	if err != nil {
		return fmt.Errorf("error[insert universityID to student]:prefecture does not exist")
	}
	lb.UniversityID = university.ID
	return nil
}

// universityをprefecture_idを代入して作成
func CreateUniversity(db *gorm.DB, university_name, prefecture_name, address string, max_gpa float64) error {
	var university model.University
	exist_check := db.Where("Name = ?", university_name).Find(&university)
	if exist_check.RowsAffected != 0 {
		return fmt.Errorf("error[create university]:university already exist")
	}
	var prefecture model.Prefecture
	err := db.Where("Name = ?", prefecture_name).First(&prefecture).Error
	if err != nil {
		return fmt.Errorf("error[create university]:prefecture does not exist")
	}
	new_university := model.University{
		Name:         university_name,
		PrefectureID: prefecture.ID,
		Address:      address,
		MaxGpa:       max_gpa,
	}
	db.Create(&new_university)
	return nil
}

func CreatePrefecture(db *gorm.DB, prefecture_name string) error {
	var prefecture model.Prefecture
	exist_check := db.Where("Name = ?", prefecture_name).Find(&prefecture)
	if exist_check.RowsAffected != 0 {
		return fmt.Errorf("error[create prefecure]:prefecture already exist")
	}
	new_prefecture := model.Prefecture{
		Name: prefecture_name,
	}
	db.Create(&new_prefecture)
	return nil
}

func CreateMajor(db *gorm.DB, major_name string) error {
	var major model.Major
	exist_check := db.Where("Name = ?", major_name).Find(&major)
	if exist_check.RowsAffected != 0 {
		return fmt.Errorf("error[create major]:major already exist")
	}
	new_major := model.Major{
		Name: major_name,
	}
	db.Create(&new_major)
	return nil
}

func CreateAccountLaboratory(db *gorm.DB, account_laboratory model.Laboratory, university_name string) error {
	err := InsertUniversityIDToLaboratory(db, &account_laboratory, university_name)
	if err != nil {
		return err
	}
	db.Create(&account_laboratory)
	return nil
}

func CreateAccountStudent(db *gorm.DB, account_student model.Student, university_name string, prefecture_name string) error {
	err := InsertUniversityIDToStudent(db, &account_student, university_name)
	if err != nil {
		return err
	}
	err = InsertPrefectureIDToStudent(db, &account_student, prefecture_name)
	if err != nil {
		return err
	}
	db.Create(&account_student)
	return nil
}

// test用
func CreateModelStudent(
	db gorm.DB,
	name string,
	email string,
	gender int,
	grade int,
	comment string,
	interest string,
	birthday time.Time,
	gpa float64,
	image_url string,
	Status int,
	password string,
	uid uint,
) model.Student {
	return model.Student{
		Name:     name,
		Email:    email,
		Gender:   gender,
		Grade:    grade,
		Comment:  comment,
		Interest: interest,
		Birthday: birthday,
		Gpa:      gpa,
		ImageUrl: image_url,
		Status:   Status,
		Password: password,
		Uid:      uid,
	}
}

// test用
func CreateModelLaboratory(
	db gorm.DB,
	name string,
	professor string,
	num_students int,
	comment string,
	status int,
	image_url string,
	laboratory_url string,
	email string,
	password string,
	uid uint,
) model.Laboratory {
	return model.Laboratory{
		Name:          name,
		Professor:     professor,
		NumStudents:   num_students,
		Comment:       comment,
		Status:        status,
		ImageUrl:      image_url,
		LaboratoryUrl: laboratory_url,
		Email:         email,
		Password:      password,
		Uid:           uid,
	}
}
