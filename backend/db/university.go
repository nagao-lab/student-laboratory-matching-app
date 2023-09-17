package db

import "time"

type University struct {
	ID           uint `gorm:"primaryKey"`
	PrefectureID uint `gorm:"foreignKey"`
	Name         string
	Address      string
	MaxGpa       float64
	CreatedAt    time.Time
	UpdatedAt    time.Time
}
