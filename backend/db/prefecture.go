package db

import (
	"gorm.io/gorm"
)

type Prefecture struct {
	gorm.Model
	Name string
}
