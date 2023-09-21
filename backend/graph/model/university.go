package model

import (
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/tools"
)

func ConvertUniversity(university *db.University) *University {
	return &University{
		ID:         tools.ParseUintToString(university.ID),
		Name:       university.Name,
		Address:    university.Address,
		MaxGpa:     university.MaxGpa,
		Prefecture: &Prefecture{ID: tools.ParseUintToString(university.PrefectureID)},
	}
}
