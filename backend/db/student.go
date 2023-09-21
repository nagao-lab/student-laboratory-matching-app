package db

import (
	"time"

	"gorm.io/gorm"
)

type Student struct {
	gorm.Model
	UID          string
	Name         string
	Email        string
	Password     string
	ImageUrl     string
	Gender       int
	Birthday     *time.Time
	Grade        int
	Gpa          float64
	Comment      string
	Interest     string
	Status       int
	UniversityID uint
	PrefectureID uint
}
