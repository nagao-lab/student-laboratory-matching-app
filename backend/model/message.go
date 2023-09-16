package model

import "time"

type Message struct {
	ID                  uint      `json:"id" gorm:"primaryKey"`
	StudentLaboratoryID uint      `json:"student_laboratoryID" gorm:"foreignKey"`
	From                int       `json:"from"`
	Content             string    `json:"content"`
	CreatedAt           time.Time `json:"created_at"`
	UpdatedAt           time.Time `json:"updated_at"`
}
