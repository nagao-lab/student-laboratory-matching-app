package db

import "time"

type Message struct {
	ID                  uint `gorm:"primaryKey"`
	StudentLaboratoryID uint
	From                int
	Content             string
	CreatedAt           time.Time
	UpdatedAt           time.Time
}
