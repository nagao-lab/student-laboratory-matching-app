package db

import (
	"gorm.io/gorm"
)

type StudentLaboratory struct {
	gorm.Model
	StudentID    uint
	LaboratoryID uint
	Status       int
}
