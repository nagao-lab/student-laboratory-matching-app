package db

import (
	"gorm.io/gorm"
)

type University struct {
	gorm.Model
	Name         string
	Address      string
	MaxGpa       float64
	PrefectureID uint
}
