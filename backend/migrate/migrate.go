package main

import (
	"fmt"
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/model"
	"time"
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

	new_ac_st := db.CreateModelStudent(*dbConn, "suzuki", "suzuki@i.com", 0, 3, "fire", "water", time.Now(), 3.4, "i/url", 1, "passN", 2)
	err := db.SignupStudent(dbConn, new_ac_st, "Tokyo Daigaku", "Tokyo", "info")
	if err != nil {
		fmt.Printf("%v\n", err)
	} else {
		fmt.Println("Success:signin")
	}

	_, err = db.LoginStudent(dbConn, "suzuki@i.com", "passN")
	if err != nil {
		fmt.Printf("%v\n", err)
	}
}
