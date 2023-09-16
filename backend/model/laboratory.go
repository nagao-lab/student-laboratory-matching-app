package model

import "time"

type Laboratory struct {
	ID            uint      `json:"id" gorm:"primaryKey"`
	UniversityID  uint      `json:"university_id" gorm:"foreignKey"`
	Name          string    `json:"name"`
	Professor     string    `json:"professor"`
	NumStudents   int       `json:"num_students"`
	Comment       string    `json:"comment"`
	Status        int       `json:"status"`
	ImageUrl      string    `json:"image_url"`
	LaboratoryUrl string    `json:"laboratory_url"`
	Email         string    `json:"email"`
	Password      string    `json:"password"`
	Uid           uint      `json:"uid"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
}
