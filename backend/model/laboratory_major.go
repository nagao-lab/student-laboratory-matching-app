package model

import "time"

type Laboratory_Major struct {
	Laboratory_id uint      `json:"laboratory_id" gorm:"primaryKey"`
	Major_id      uint      `json:"major_id" gorm:"primaryKey"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
}
