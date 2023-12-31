package service

import "gorm.io/gorm"

type IService interface {
	IStudentService
	ILaboratoryService
	IStudentLaboratoryService
	IUniversityService
	IPrefectureService
	IMajorService
	IMessageService
}

type services struct {
	*studentService
	*laboratoryService
	*studentLaboratoryService
	*universityService
	*prefectureService
	*majorService
	*messageService
}

func NewService(db *gorm.DB) IService {
	return &services{
		studentService:           &studentService{db: db},
		laboratoryService:        &laboratoryService{db: db},
		studentLaboratoryService: &studentLaboratoryService{db: db},
		universityService:        &universityService{db: db},
		prefectureService:        &prefectureService{db: db},
		majorService:             &majorService{db: db},
		messageService:           &messageService{db: db},
	}
}
