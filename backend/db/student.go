package db

import (
	"time"
)

type Student struct {
	ID           uint `gorm:"primaryKey"`
	UID          uint
	Name         string
	Email        string
	Password     string
	ImageUrl     string
	Gender       int
	Birthday     time.Time
	UniversityID uint // fkey
	Grade        int
	Gpa          float64
	PrefectureID uint // fkey
	Comment      string
	Interest     string
	Status       int
	CreatedAt    time.Time
	UpdatedAt    time.Time
}
