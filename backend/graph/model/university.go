package model

import (
	"strconv"
	"student-laboratory-matching-app/db"
)

func ConvertUniversity(university *db.University) *University {
	return &University{
		ID:         strconv.FormatUint(uint64(university.ID), 10),
		Name:       university.Name,
		Prefecture: &Prefecture{ID: strconv.FormatUint(uint64(university.PrefectureID), 10)},
		Address:    university.Address,
		MaxGpa:     university.MaxGpa,
	}
}
