package model

import "time"

type Message struct {
	ID                    uint      `json:"id" gorm:"primaryKey"`
	Student_Laboratory_id uint      `json:"student_laboratory_id" gorm:"foreignKey"`
	From                  int       `json:"from"`
	Content               string    `json:"content"`
	CreatedAt             time.Time `json:"created_at"`
	UpdatedAt             time.Time `json:"updated_at"`
}
