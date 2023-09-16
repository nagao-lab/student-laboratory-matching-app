package model

import "time"

type Student_Laboratory struct {
	ID           uint      `json:"id" gorm:"primaryKey"`
	StudentID    uint      `json:"student_id" gorm:"foreignKey"`
	LaboratoryID uint      `json:"laboratory_id"`
	Status       int       `json:"status"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
}
