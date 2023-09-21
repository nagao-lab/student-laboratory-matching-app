package service

import (
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph/model"

	"gorm.io/gorm"
)

type IPrefectureService interface {
	GetPrefectureById(id string) (*model.Prefecture, error)
	GetAllPrefectures() ([]*model.Prefecture, error)
}

type prefectureService struct {
	db *gorm.DB
}

func (ps *prefectureService) GetPrefectureById(id string) (*model.Prefecture, error) {
	var prefecture db.Prefecture
	err := ps.db.First(&prefecture, id).Error
	if err != nil {
		return nil, err
	}
	return model.ConvertPrefecture(&prefecture), nil
}

func (ps *prefectureService) GetAllPrefectures() ([]*model.Prefecture, error) {
	var records []db.Prefecture
	err := ps.db.Table("prefectures").
		Order("id ASC").
		Find(&records).Error
	if err != nil {
		return nil, err
	}

	prefectures := []*model.Prefecture{}
	for _, record := range records {
		prefecture := model.ConvertPrefecture(&record)
		prefectures = append(prefectures, prefecture)
	}

	return prefectures, nil
}
