package model

import (
	"time"
)

type Student struct {
	ID            uint      `json:"id" gorm:"primaryKey"`
	University_id uint      `json:"university_id" gorm:"foreignKey"`
	Major_id      uint      `json:"major_id" gorm:"foreignKey"`
	Prefecture_id uint      `json:"prefecture_id" gorm:"foreignKey"`
	Name          string    `json:"name"`
	Email         string    `json:"email"`
	Gender        int       `json:"gender"` //0:男, 1:女, 2:その他
	Grade         int       `json:"grade"`
	Comment       string    `json:"coment"`
	Interest      string    `json:"interest"`
	Birthday      time.Time `json:"birthday"` //型はstringが適切かどうか
	Gpa           float64   `json:"gpa"`
	Image_url     string    `json:"image_url"`
	Status        bool      `json:"status"`
	Password      string    `json:"password"`
	Uid           uint      `json:"uid"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
}
