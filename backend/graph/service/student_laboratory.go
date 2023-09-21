package service

import (
	"context"
	"fmt"
	"strconv"
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph/model"
	"student-laboratory-matching-app/middleware/auth"
	"student-laboratory-matching-app/tools"

	"gorm.io/gorm"
)

type IStudentLaboratoryService interface {
	GetLikeStatusByIds(model.NewLike) (model.LikeStatus, error)
	FavoriteLaboratory(model.NewLike) (model.LikeStatus, error)
	FavoriteStudent(model.NewLike) (model.LikeStatus, error)
	UnfavoriteLaboratory(model.NewLike) (model.LikeStatus, error)
	UnfavoriteStudent(model.NewLike) (model.LikeStatus, error)
	GetStudentLaboratoriesByStudentId(context.Context, *string, *model.LikeStatus) ([]*model.StudentLaboratory, error)
	GetStudentLaboratoriesByLaboratoryId(context.Context, *string, *model.LikeStatus) ([]*model.StudentLaboratory, error)
}

type studentLaboratoryService struct {
	db *gorm.DB
}

func (sls *studentLaboratoryService) GetLikeStatusByIds(newLikeIds model.NewLike) (model.LikeStatus, error) {
	studentLaboratory := db.StudentLaboratory{
		StudentID:    tools.ParseStringToUint(newLikeIds.StudentID),
		LaboratoryID: tools.ParseStringToUint(newLikeIds.LaboratoryID),
	}

	var record db.StudentLaboratory
	err := sls.db.Where(&studentLaboratory).Find(&record).Error
	if err != nil {
		return "", err
	}

	return model.ConvertStudentLaboratory(&record).Status, nil
}

func (sls *studentLaboratoryService) FavoriteLaboratory(newLikeIds model.NewLike) (model.LikeStatus, error) {
	studentIdUint64, _ := strconv.ParseUint(newLikeIds.StudentID, 10, 64)
	laboratoryIdUint64, _ := strconv.ParseUint(newLikeIds.LaboratoryID, 10, 64)

	studentLaboratory := db.StudentLaboratory{
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

	studentLaboratory := db.StudentLaboratory{
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

func (sls *studentLaboratoryService) UnfavoriteLaboratory(newLikeIds model.NewLike) (model.LikeStatus, error) {
	studentIdUint64, _ := strconv.ParseUint(newLikeIds.StudentID, 10, 64)
	laboratoryIdUint64, _ := strconv.ParseUint(newLikeIds.LaboratoryID, 10, 64)

	studentLaboratory := db.StudentLaboratory{
		StudentID:    uint(studentIdUint64),
		LaboratoryID: uint(laboratoryIdUint64),
	}

	result := sls.db.Where(&studentLaboratory).Find(&studentLaboratory)
	if err := result.Error; err != nil {
		return "", err
	}

	var likeStatus model.LikeStatus

	switch studentLaboratory.Status {
	case model.LikeStatusIndexFromStudent:
		likeStatus = model.LikeStatusBlank
	case model.LikeStatusIndexFromBoth:
		likeStatus = model.LikeStatusLikeFromLaboratory
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

	studentLaboratory := db.StudentLaboratory{
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

func (sls *studentLaboratoryService) GetStudentLaboratoriesByStudentId(ctx context.Context, studentId *string, filter *model.LikeStatus) ([]*model.StudentLaboratory, error) {
	if studentId == nil {
		CA := auth.GetCookieAccess(ctx)
		if !CA.IsLoggedIn {
			return nil, fmt.Errorf("GetStudentLaboratories failed: login first or specify studentId")
		}
		studentId = &CA.UserId
	}

	var records []db.StudentLaboratory
	err := sls.db.Select("id", "student_id", "laboratory_id", "status").
		Where("student_id = ?", studentId).
		Order("updated_at desc").
		Find(&records).Error
	if err != nil {
		return nil, err
	}

	var studentLaboratories []*model.StudentLaboratory
	for _, record := range records {
		studentLaboratory := model.ConvertStudentLaboratory(&record)
		if filter != nil {
			if studentLaboratory.Status != *filter {
				continue
			}
		}
		studentLaboratories = append(studentLaboratories, studentLaboratory)
	}

	return studentLaboratories, nil
}

func (sls *studentLaboratoryService) GetStudentLaboratoriesByLaboratoryId(ctx context.Context, laboratoryId *string, filter *model.LikeStatus) ([]*model.StudentLaboratory, error) {
	if laboratoryId == nil {
		CA := auth.GetCookieAccess(ctx)
		if !CA.IsLoggedIn {
			return nil, fmt.Errorf("GetStudentLaboratories failed: login first or specify laboratoryId")
		}
		laboratoryId = &CA.UserId
	}

	var records []db.StudentLaboratory
	err := sls.db.Select("id", "student_id", "laboratory_id", "status").
		Where("laboratory_id = ?", laboratoryId).
		Order("updated_at desc").
		Find(&records).Error
	if err != nil {
		return nil, err
	}

	var studentLaboratories []*model.StudentLaboratory
	for _, record := range records {
		studentLaboratory := model.ConvertStudentLaboratory(&record)
		if filter != nil {
			if studentLaboratory.Status != *filter {
				continue
			}
		}
		studentLaboratories = append(studentLaboratories, studentLaboratory)
	}

	return studentLaboratories, nil
}
