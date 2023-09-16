package model

import "time"

type Laboratory_Major struct {
	LaboratoryID uint      `json:"laboratory_id" gorm:"primaryKey"`
	MajorID      uint      `json:"major_id" gorm:"primaryKey"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
}
