package db

import (
	"gorm.io/gorm"
)

type Message struct {
	gorm.Model
	StudentLaboratoryID uint
	From                int
	Content             string
}
