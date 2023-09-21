package main

import (
	"fmt"
	"student-laboratory-matching-app/db"
)

func main() {
	dbConn := db.NewDB()
	defer db.CloseDB(dbConn)

	defer fmt.Println("Successfully Migrated")
	dbConn.AutoMigrate(
		&db.Student{},
		&db.Laboratory{},
		&db.StudentLaboratory{},
		&db.Major{},
		&db.Prefecture{},
		&db.University{},
		&db.Message{},
		&db.StudentMajor{},
		&db.LaboratoryMajor{},
	)
}
