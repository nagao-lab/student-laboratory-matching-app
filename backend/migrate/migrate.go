package main

import (
	"fmt"
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/model"
	"time"

	"gorm.io/gorm"
)

func main() {
	dbConn := db.NewDB()
	defer fmt.Println("Successfully Migrated")
	defer db.CloseDB(dbConn)

	dbConn.AutoMigrate(&model.Prefecture{})
	dbConn.AutoMigrate(&model.Laboratory_Major{})
	dbConn.AutoMigrate(&model.Laboratory{})
	dbConn.AutoMigrate(&model.Major{})
	dbConn.AutoMigrate(&model.Message{})
	dbConn.AutoMigrate(&model.Student{})
	dbConn.AutoMigrate(&model.Student_Laboratory{})
	dbConn.AutoMigrate(&model.Student_Major{})
	dbConn.AutoMigrate(&model.University{})

	new_ac_st := Create_model_student(*dbConn, "suzuki", "suzuki@i.com", 0, 3, "fire", "water", time.Now(), 3.4, "i/url", 1, "passN", 2)
	error_check := Signup_Student(dbConn, new_ac_st, "Tokyo Daigaku", "Tokyo", "info")
	if error_check != nil {
		fmt.Printf("%v\n", error_check)
	} else {
		fmt.Println("Success:signin")
	}

	_, error_check = Login_Student(dbConn, "suzuki@i.com", "passN")
	if error_check != nil {
		fmt.Printf("%v\n", error_check)
	}

}

func Signup_laboratory(db *gorm.DB, account model.Laboratory, university_name string, major_name string) error {
	var check model.Laboratory

	result := db.Where("Email = ?", account.Email).First(&check)
	if result.Error == nil {
		return fmt.Errorf("error[signup]: already exist")
	}

	error_check := Create_account_laboratory(db, account, university_name)
	if error_check != nil {
		return error_check
	}

	error_check = Create_laboratory_major(db, account, major_name)
	if error_check != nil {
		return error_check
	}
	fmt.Println("signup: Success!!")
	return nil

}

func Signup_Student(db *gorm.DB, account model.Student, university_name string, prefecture_name string, major_name string) error {
	var check model.Student

	result := db.Where("Email = ?", account.Email).First(&check)
	if result.Error == nil {
		return fmt.Errorf("error[signup]:account already exist")
	}
	error_check := Create_account_student(db, account, university_name, prefecture_name)
	if error_check != nil {
		return error_check
	}
	error_check = Create_student_major(db, account, major_name)
	if error_check != nil {
		return error_check
	}
	fmt.Println("Success signup!!")
	return nil
}

func Login_Laboratory(db *gorm.DB, email_in string, pass_in string) (model.Laboratory, error) {
	var check model.Laboratory

	result := db.Where("Email = ?", email_in).First(&check)
	if result.Error != nil {
		return check, fmt.Errorf("error[login]:account does not exist")
	} else if check.Password != pass_in {
		return check, fmt.Errorf("error[login]:password does not match")
	} else {
		fmt.Println("login:Success!!")
		return check, nil
	}
}

func Login_Student(db *gorm.DB, email_in string, pass_in string) (model.Student, error) {
	var check model.Student

	result := db.Where("Email = ?", email_in).First(&check)
	if result.Error != nil {
		return check, fmt.Errorf("error[login]:account does not exist")
	} else if check.Password != pass_in {
		return check, fmt.Errorf("error[login]:password does not match")
	} else {
		fmt.Println("login:Success!!")
		return check, nil
	}
}

// studentとmajorの紐づけ
func Create_student_major(db *gorm.DB, st model.Student, major_name string) error {
	var check model.Major
	result := db.Where("Name = ?", major_name).First(&check)
	if result.Error != nil {
		return fmt.Errorf("error[student_major]:major does not exist")
	} else {
		new_ac := model.Student_Major{
			Student_id: st.ID,
			Major_id:   check.ID,
		}
		db.Create(&new_ac)
		return nil
	}
}

// labolatoryとmajorの紐づけ
func Create_laboratory_major(db *gorm.DB, st model.Laboratory, major_name string) error {
	var check model.Major
	result := db.Where("Name = ?", major_name).First(&check)
	if result.Error != nil {
		return fmt.Errorf("error[student_major]:major does not exist")
	} else {
		new_ac := model.Laboratory_Major{
			Laboratory_id: st.ID,
			Major_id:      check.ID,
		}
		db.Create(&new_ac)
		return nil
	}
}

// studentにprefecture_idを代入
func Insert_prefectureID_to_student(db *gorm.DB, st *model.Student, prefecture_name string) error {
	var check model.Prefecture
	result := db.Where("Name = ?", prefecture_name).First(&check)
	if result.Error != nil {
		return fmt.Errorf("error[insert prefectureID to student]:prefecture does not exist")
	} else {
		st.Prefecture_id = check.ID
		return nil
	}
}

// studentにunivesity_idを代入
func Insert_universityID_to_student(db *gorm.DB, st *model.Student, university_name string) error {
	var check model.University
	result := db.Where("Name = ?", university_name).First(&check)
	if result.Error != nil {
		return fmt.Errorf("error[insert universityID to student]:university does not exist")
	} else {
		st.University_id = check.ID
		return nil
	}
}

// laboratoryにunivesity_idを代入
func Insert_universityID_to_laboratory(db *gorm.DB, lb *model.Laboratory, university_name string) error {
	var check model.University
	result := db.Where("Name = ?", university_name).First(&check)
	if result.Error != nil {
		return fmt.Errorf("error[insert universityID to student]:prefecture does not exist")
	} else {
		lb.University_id = check.ID
		return nil
	}
}

// universityをprefecture_idを代入して作成
func Create_university(db *gorm.DB, uv_name, pf_name, address string, max_gpa float64) error {
	var check_uv model.University
	result := db.Where("Name = ?", uv_name).First(&check_uv)
	if result.Error == nil {
		return fmt.Errorf("error[create university]:university already exist")
	}
	var check_pf model.Prefecture
	result = db.Where("Name = ?", pf_name).First(&check_pf)
	if result.Error != nil {
		return fmt.Errorf("error[create university]:prefecture does not exist")
	}
	new_uv := model.University{
		Name:          uv_name,
		Prefecture_id: check_pf.ID,
		Address:       address,
		Max_gpa:       max_gpa,
	}
	db.Create(&new_uv)
	return nil

}

func Create_prefecture(db *gorm.DB, pf_name string) error {
	var check model.Prefecture
	result := db.Where("Name = ?", pf_name).First(&check)
	if result.Error == nil {
		return fmt.Errorf("error[create prefecure]:prefecture already exist")
	}
	new_pf := model.Prefecture{
		Name: pf_name,
	}
	db.Create(&new_pf)
	return nil
}

func Create_major(db *gorm.DB, major_name string) error {
	var check model.Major
	result := db.Where("Name = ?", major_name).First(&check)
	if result.Error == nil {
		return fmt.Errorf("error[create major]:major already exist")
	}
	new_major := model.Major{
		Name: major_name,
	}
	db.Create(&new_major)
	return nil
}

func Create_account_laboratory(db *gorm.DB, account model.Laboratory, university_name string) error {
	error_check := Insert_universityID_to_laboratory(db, &account, university_name)
	if error_check != nil {
		return error_check
	}
	db.Create(&account)
	return nil
}

func Create_account_student(db *gorm.DB, account model.Student, university_name string, prefecture_name string) error {
	error_check := Insert_universityID_to_student(db, &account, university_name)
	if error_check != nil {
		return error_check
	}
	error_check = Insert_prefectureID_to_student(db, &account, prefecture_name)
	if error_check != nil {
		return error_check
	}
	db.Create(&account)
	return nil
}

// test用
func Create_model_student(
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
		Name:      name,
		Email:     email,
		Gender:    gender,
		Grade:     grade,
		Comment:   comment,
		Interest:  interest,
		Birthday:  birthday,
		Gpa:       gpa,
		Image_url: image_url,
		Status:    Status,
		Password:  password,
		Uid:       uid,
	}
}

// test用
func Create_model_laboratory(
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
		Name:           name,
		Professor:      professor,
		Num_students:   num_students,
		Comment:        comment,
		Status:         status,
		Image_url:      image_url,
		Laboratory_url: laboratory_url,
		Email:          email,
		Password:       password,
		Uid:            uid,
	}
}
