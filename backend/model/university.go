package model

import "time"

type University struct {
	ID           uint      `json:"id" gorm:"primaryKey"`
	PrefectureID uint      `json:"prefecture_id" gorm:"foreignKey"`
	Name         string    `json:"name"`
	Address      string    `json:"address"`
	MaxGpa       float64   `json:"max_gpa"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
}
