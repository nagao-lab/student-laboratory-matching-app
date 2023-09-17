package service

import "gorm.io/gorm"

type IService interface {
	IStudentService
	IUniversityService
	IPrefectureService
}

type services struct {
	*studentService
	*univeristyService
	*prefectureService
}

func NewService(db *gorm.DB) IService {
	return &services{
		studentService:    &studentService{db: db},
		univeristyService: &univeristyService{db: db},
		prefectureService: &prefectureService{db: db},
	}
}
