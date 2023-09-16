package main

import (
	"fmt"
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/model"

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

	// out, _ := json.Marshal(majorC)
	// fmt.Println(string(out))

	// var new_ac = model.Student{
	// 	University_id: 1,
	// 	Prefecture_id: 1,
	// 	Name:          "Yosida",
	// 	Email:         "def@i.com",
	// 	Gender:        0,
	// 	Grade:         3,
	// 	Comment:       "nike",
	// 	Interest:      "greate",
	// 	Birthday:      time.Now(),
	// 	Gpa:           3.9,
	// 	Image_url:     "image2/url",
	// 	Status:        1,
	// 	Password:      "pass",
	// 	Uid:           4,
	// }

	//Signup_laboratory(dbConn, new_ac)

	log_st, error_login := Login_Student(dbConn, "abc@i.com", "pass")

	if error_login != nil {
		fmt.Printf("%v\n", error_login)
	} else {
		log_st_major, error_sm := Create_student_major(dbConn, log_st, "info")
		if error_sm != nil {
			fmt.Printf("%v(%v)\n", error_sm, log_st_major)
		} else {
			fmt.Println("st-major conect: Success!")
		}
	}

}

func Signup_laboratory(db *gorm.DB, account model.Laboratory) error {
	var check model.Laboratory

	result := db.Where("Email = ?", account.Email).First(&check)
	if result.Error == nil {
		return fmt.Errorf("error[signup]: already exist")
	} else {
		db.Create(&account)
		fmt.Println("signup: Success!!")
		return nil
	}

}

func Signup_Student(db *gorm.DB, account model.Student) error {
	var check model.Student

	result := db.Where("Email = ?", account.Email).First(&check)
	if result.Error == nil {
		return fmt.Errorf("error[signup]:account already exist")
	} else {
		db.Create(&account)
		fmt.Println("Success signup!!")
		return nil
	}

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
func Create_student_major(db *gorm.DB, st model.Student, major_name string) (model.Student_Major, error) {
	var new_ac model.Student_Major
	var check model.Major
	result := db.Where("Name = ?", major_name).First(&check)
	if result.Error != nil {
		return new_ac, fmt.Errorf("error[student_major]:major does not exist")
	} else {
		new_ac = model.Student_Major{
			Student_id: st.ID,
			Major_id:   check.ID,
		}
		db.Create(&new_ac)
		return new_ac, nil
	}
}

// labolatoryとmajorの紐づけ
func Create_laboratory_major(db *gorm.DB, st model.Laboratory, major_name string) (model.Laboratory_Major, error) {
	var new_ac model.Laboratory_Major
	var check model.Major
	result := db.Where("Name = ?", major_name).First(&check)
	if result.Error != nil {
		return new_ac, fmt.Errorf("error[student_major]:major does not exist")
	} else {
		new_ac = model.Laboratory_Major{
			Laboratory_id: st.ID,
			Major_id:      check.ID,
		}
		db.Create(&new_ac)
		return new_ac, nil
	}
}
