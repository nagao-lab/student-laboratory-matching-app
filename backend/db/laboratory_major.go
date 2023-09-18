package db

import "time"

type Laboratory_Major struct {
	LaboratoryID uint `gorm:"primaryKey"`
	MajorID      uint `gorm:"primaryKey"`
	CreatedAt    time.Time
	UpdatedAt    time.Time
}
