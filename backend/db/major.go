package db

import (
	"gorm.io/gorm"
)

type Major struct {
	gorm.Model
	Name string
}
