package db

import (
	"gorm.io/gorm"
)

type Laboratory struct {
	gorm.Model
	UID           string
	Name          string
	Email         string
	Password      string
	Professor     string
	NumStudents   int
	Comment       string
	Status        int
	ImageUrl      string
	LaboratoryUrl string
	UniversityID  uint
}
