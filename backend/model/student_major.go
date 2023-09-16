package model

import "time"

type Student_Major struct {
	StudentID uint      `json:"student_id" gorm:"primaryKey"`
	MajorID   uint      `json:"major_id" gorm:"primaryKey"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
