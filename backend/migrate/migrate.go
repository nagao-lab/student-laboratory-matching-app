package main

import (
	"fmt"
	"student-laboratory-matching-app/db"
)

func main() {
	dbConn := db.NewDB()
	defer fmt.Println("Successfully Migrated")
	defer db.CloseDB(dbConn)

	dbConn.AutoMigrate()
}
