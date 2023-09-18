package db

import "time"

type Student_Laboratory struct {
	ID           uint `gorm:"primaryKey"`
	StudentID    uint
	LaboratoryID uint
	Status       int
	CreatedAt    time.Time
	UpdatedAt    time.Time
}
