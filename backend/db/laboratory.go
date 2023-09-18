package db

import (
	"time"
)

type Laboratory struct {
	ID            uint `gorm:"primaryKey"`
	UID           uint
	UniversityID  uint
	Name          string
	Professor     string
	NumStudents   int
	Comment       string
	Status        int
	ImageUrl      string
	LaboratoryUrl string
	Email         string
	Password      string
	CreatedAt     time.Time
	UpdatedAt     time.Time
}
