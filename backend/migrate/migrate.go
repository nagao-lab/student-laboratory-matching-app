package main

import (
	"fmt"
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/model"
)

func main() {
	dbConn := db.NewDB()
	defer fmt.Println("Successfully Migrated")
	defer db.CloseDB(dbConn)

	dbConn.AutoMigrate(&model.Prefecture{})
}
