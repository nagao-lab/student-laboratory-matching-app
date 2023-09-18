package service

import "gorm.io/gorm"

type IService interface {
	IStudentService
	ILaboratoryService
	IUniversityService
	IPrefectureService
	IMajorService
}

type services struct {
	*studentService
	*laboratoryService
	*univeristyService
	*prefectureService
	*majorService
}

func NewService(db *gorm.DB) IService {
	return &services{
		studentService:    &studentService{db: db},
		laboratoryService: &laboratoryService{db: db},
		univeristyService: &univeristyService{db: db},
		prefectureService: &prefectureService{db: db},
		majorService:      &majorService{db: db},
	}
}
