package service

import (
	"strconv"
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph/model"

	"gorm.io/gorm"
)

type IStudentLaboratoryService interface {
	FavoriteLaboratory(model.NewLike) (model.LikeStatus, error)
	FavoriteStudent(model.NewLike) (model.LikeStatus, error)
	UnfavoriteStudent(model.NewLike) (model.LikeStatus, error)
}

type studentLaboratoryService struct {
	db *gorm.DB
}

func (sls *studentLaboratoryService) FavoriteLaboratory(newLikeIds model.NewLike) (model.LikeStatus, error) {
	studentIdUint64, _ := strconv.ParseUint(newLikeIds.StudentID, 10, 64)
	laboratoryIdUint64, _ := strconv.ParseUint(newLikeIds.LaboratoryID, 10, 64)

	studentLaboratory := db.Student_Laboratory{
		StudentID:    uint(studentIdUint64),
		LaboratoryID: uint(laboratoryIdUint64),
	}

	result := sls.db.Where(&studentLaboratory).Find(&studentLaboratory)
	if err := result.Error; err != nil {
		return "", err
	}

	var likeStatus model.LikeStatus
	if result.RowsAffected == 0 {
		likeStatus = model.LikeStatusLikeFromStudent
	} else {
		switch studentLaboratory.Status {
		case model.LikeStatusIndexBlank:
			likeStatus = model.LikeStatusLikeFromStudent
		case model.LikeStatusIndexFromLaboratory:
			likeStatus = model.LikeStatusLikeFromBoth
		}
	}

	studentLaboratory.Status = model.LikeStatusIndex[likeStatus]
	err := sls.db.Save(&studentLaboratory).Error
	if err != nil {
		return "", err
	}

	return likeStatus, nil
}

func (sls *studentLaboratoryService) FavoriteStudent(newLikeIds model.NewLike) (model.LikeStatus, error) {
	studentIdUint64, _ := strconv.ParseUint(newLikeIds.StudentID, 10, 64)
	laboratoryIdUint64, _ := strconv.ParseUint(newLikeIds.LaboratoryID, 10, 64)

	studentLaboratory := db.Student_Laboratory{
		StudentID:    uint(studentIdUint64),
		LaboratoryID: uint(laboratoryIdUint64),
	}

	result := sls.db.Where(&studentLaboratory).Find(&studentLaboratory)
	if err := result.Error; err != nil {
		return "", err
	}

	var likeStatus model.LikeStatus
	if result.RowsAffected == 0 {
		likeStatus = model.LikeStatusLikeFromLaboratory
	} else {
		switch studentLaboratory.Status {
		case model.LikeStatusIndexBlank:
			likeStatus = model.LikeStatusLikeFromLaboratory
		case model.LikeStatusIndexFromStudent:
			likeStatus = model.LikeStatusLikeFromBoth
		}
	}

	studentLaboratory.Status = model.LikeStatusIndex[likeStatus]
	err := sls.db.Save(&studentLaboratory).Error
	if err != nil {
		return "", err
	}

	return likeStatus, nil
}

func (sls *studentLaboratoryService) UnfavoriteStudent(newLikeIds model.NewLike) (model.LikeStatus, error) {
	studentIdUint64, _ := strconv.ParseUint(newLikeIds.StudentID, 10, 64)
	laboratoryIdUint64, _ := strconv.ParseUint(newLikeIds.LaboratoryID, 10, 64)

	studentLaboratory := db.Student_Laboratory{
		StudentID:    uint(studentIdUint64),
		LaboratoryID: uint(laboratoryIdUint64),
	}

	result := sls.db.Where(&studentLaboratory).Find(&studentLaboratory)
	if err := result.Error; err != nil {
		return "", err
	}

	var likeStatus model.LikeStatus

	switch studentLaboratory.Status {
	case model.LikeStatusIndexFromLaboratory:
		likeStatus = model.LikeStatusBlank
	case model.LikeStatusIndexFromBoth:
		likeStatus = model.LikeStatusLikeFromStudent
	}

	studentLaboratory.Status = model.LikeStatusIndex[likeStatus]
	err := sls.db.Save(&studentLaboratory).Error
	if err != nil {
		return "", err
	}

	return likeStatus, nil
}
