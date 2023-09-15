package main

import (
	"fmt"
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/model"
	"time"
)

func CreateDummy(num int) {
	dummy := model.Student{
		University_id: uint(num),
		Major_id:      uint(num),
		Prefecture_id: uint(num),
		Name:          fmt.Sprint(num),
		Email:         fmt.Sprint(num),
		Gender:        num,
		Grade:         num,
		Comment:       fmt.Sprint(num),
		Interest:      fmt.Sprint(num),
		Birthday:      time.Now(),
		Gpa:           float64(num),
		Image_url:     fmt.Sprint(num),
		Status:        true,
		Password:      fmt.Sprint(num),
		Uid:           uint(num),
	}
	result := db.NewDB().Create(&dummy)
	if result.Error != nil {
		panic("failed to insert record")
	}
}

func main() {
	dbConn := db.NewDB()
	defer fmt.Println("Successfully Migrated")
	defer db.CloseDB(dbConn)
	dbConn.AutoMigrate(&model.Prefecture{})
	dbConn.AutoMigrate(&model.Student{})

	var dummy model.Student
	CreateDummy(1)
	CreateDummy(3)

	num := 2
	dm := model.Student{
		University_id: uint(num),
		Major_id:      uint(num),
		Prefecture_id: uint(num),
		Name:          fmt.Sprint(num),
		Email:         fmt.Sprint(num),
		Gender:        num,
		Grade:         num,
		Comment:       fmt.Sprint(num),
		Interest:      fmt.Sprint(num),
		Birthday:      time.Now(),
		Gpa:           float64(num),
		Image_url:     fmt.Sprint(num),
		Status:        true,
		Password:      fmt.Sprint(num),
		Uid:           uint(num),
	}
	db.NewDB().Create(&dm)

	st := db.NewDB().First(&dummy)
	fmt.Printf("%[1]v, %[1]T\n%[2]v\n", st, *st)
}
