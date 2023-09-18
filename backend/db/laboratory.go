package db

import "time"

type Laboratory struct {
	ID            uint `gorm:"primaryKey"`
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
	Uid           uint
	CreatedAt     time.Time
	UpdatedAt     time.Time
}
