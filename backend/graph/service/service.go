package service

import "gorm.io/gorm"

type IService interface {
	IStudentService
	IUniversityService
	IPrefectureService
	IMajorService
}

type services struct {
	*studentService
	*univeristyService
	*prefectureService
	*majorService
}

func NewService(db *gorm.DB) IService {
	return &services{
		studentService:    &studentService{db: db},
		univeristyService: &univeristyService{db: db},
		prefectureService: &prefectureService{db: db},
		majorService:      &majorService{db: db},
	}
}
