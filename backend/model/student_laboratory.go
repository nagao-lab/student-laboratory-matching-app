package model

import "time"

type Student_Laboratory struct {
	ID            uint      `json:"id" gorm:"primaryKey"`
	Student_id    uint      `json:"student_id" gorm:"foreignKey"`
	Laboratory_id uint      `json:"laboratory_id"`
	Status        int       `json:"status"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
}
