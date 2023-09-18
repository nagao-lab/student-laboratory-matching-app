package db

import "time"

type Student_Major struct {
	StudentID uint `gorm:"primaryKey"`
	MajorID   uint `gorm:"primaryKey"`
	CreatedAt time.Time
	UpdatedAt time.Time
}
