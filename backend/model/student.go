package model

import (
	"time"
)

type Student struct {
	ID           uint      `json:"id" gorm:"primaryKey"`
	UniversityID uint      `json:"university_id" gorm:"foreignKey"`
	PrefectureID uint      `json:"prefecture_id" gorm:"foreignKey"`
	Name         string    `json:"name" gorm:"type:TEXT"`
	Email        string    `json:"email" gorm:"type:TEXT"`
	Gender       int       `json:"gender"` //0:男, 1:女, 2:その他
	Grade        int       `json:"grade"`
	Comment      string    `json:"coment"`
	Interest     string    `json:"interest"`
	Birthday     time.Time `json:"birthday"`
	Gpa          float64   `json:"gpa"`
	ImageUrl     string    `json:"image_url"`
	Status       int       `json:"status"`
	Password     string    `json:"password"`
	Uid          uint      `json:"uid"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
}
