package model

import "time"

type Student_Major struct {
	Student_id uint      `json:"student_id" gorm:"primaryKey"`
	Major_id   uint      `json:"major_id" gorm:"primaryKey"`
	CreatedAt  time.Time `json:"created_at"`
	UpdatedAt  time.Time `json:"updated_at"`
}
