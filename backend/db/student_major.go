package db

import "time"

type StudentMajor struct {
	StudentID uint `gorm:"primaryKey"`
	MajorID   uint `gorm:"primaryKey"`
	CreatedAt time.Time
	UpdatedAt time.Time
}
