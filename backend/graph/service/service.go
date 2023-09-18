package service

import "gorm.io/gorm"

type IService interface {
	IStudentService
	// 他のサービスインターフェースができたらそれらを追加していく
}

type services struct {
	*studentService
	// 他のサービス構造体ができたらフィールドを追加していく
}

func NewService(db *gorm.DB) IService {
	return &services{
		studentService: &studentService{db: db},
	}
}
