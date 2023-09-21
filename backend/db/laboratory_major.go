package db

import "time"

type LaboratoryMajor struct {
	LaboratoryID uint `gorm:"primaryKey"`
	MajorID      uint `gorm:"primaryKey"`
	CreatedAt    time.Time
	UpdatedAt    time.Time
}
