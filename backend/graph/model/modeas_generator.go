package model

import (
	"time"
)

type Students struct {
	ID            uint      `json:"id"`
	Name          string    `json:"name"`
	Email         string    `json:"email"`
	Gender        int       `json:"gender"` //0:男, 1:女, 2:その他
	University_id uint      `json:"university_id"`
	Grade         int       `json:"grade"`
	Major_id      uint      `json:"major_id"`
	Comment       string    `json:"coment"`
	Interest      string    `json:"interest"`
	Birthday      time.Time `json:"birthday"`
	Prefecture_id uint      `json:"prefecture_id"`
	Gpa           float64   `json:"gpa"`
	Image_url     string    `json:"image_url"`
	Status        int       `json:"status"`
	Password      string    `json:"password"`
	Uid           uint      `json:"uid"`
}
