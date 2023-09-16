package model

import "time"

type University struct {
	ID            uint      `json:"id" gorm:"primaryKey"`
	Prefecture_id uint      `json:"prefecture_id" gorm:"foreignKey"`
	Name          string    `json:"name"`
	Address       string    `json:"address"`
	Max_gpa       float64   `json:"max_gpa"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
}
