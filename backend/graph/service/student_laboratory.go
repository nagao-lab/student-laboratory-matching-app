package service

import (
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph/model"

	"gorm.io/gorm"
)

type IStudentLaboratoryService interface {
	ThumbsupToLaboratory(id string) (*model.StudentLaboratory, error)
}

type studentLaboratoryService struct {
	db *gorm.DB
}

func (sls *studentLaboratoryService) ThumbsupToLaboratory(id string) (*model.StudentLaboratory, error) {
	var studentLaboratory db.Student_Laboratory
	err := sls.db.Table("student_laboratories").
		Find(&studentLaboratory, id).Error

	if err != nil {
		return nil, err
	}

	// statusがBLANKの場合はLIKE_FROM_LABORATORYに更新する
	if studentLaboratory.Status == model.LikeStatusIndex[model.LikeStatusBlank] {
		err = sls.db.Table("student_laboratories").
			Where("id = ?", id).
			Update("status", model.LikeStatusIndex[model.LikeStatusLikeFromLaboratory]).Error

		if err != nil {
			return nil, err
		}
	}

	// statusがLIKE_FROM_STUDENTの場合はLIKE_FROM_BOTHに更新する
	if studentLaboratory.Status == model.LikeStatusIndex[model.LikeStatusLikeFromStudent] {
		err = sls.db.Table("student_laboratories").
			Where("id = ?", id).
			Update("status", model.LikeStatusIndex[model.LikeStatusLikeFromBoth]).Error

		if err != nil {
			return nil, err
		}
	}

	err = sls.db.Table("student_laboratories").
		Find(&studentLaboratory, id).Error
	if err != nil {
		return nil, err
	}

	return model.ConvertStudentLaboratory(&studentLaboratory), nil
}
