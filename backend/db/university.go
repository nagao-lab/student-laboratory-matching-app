package db

import "time"

type University struct {
	ID           uint `gorm:"primaryKey"`
	PrefectureID uint
	Name         string
	Address      string
	MaxGpa       float64
	CreatedAt    time.Time
	UpdatedAt    time.Time
}
