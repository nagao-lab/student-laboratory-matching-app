package model

import (
	"strconv"
	"student-laboratory-matching-app/db"
)

func ConvertLaboratory(laboratory *db.Laboratory) *Laboratory {
	return &Laboratory{
		ID:            strconv.FormatUint(uint64(laboratory.ID), 10),
		UID:           strconv.FormatUint(uint64(laboratory.UID), 10),
		University:    &University{ID: strconv.FormatUint(uint64(laboratory.UniversityID), 10)},
		Name:          laboratory.Name,
		Professor:     laboratory.Professor,
		NumStudents:   laboratory.NumStudents,
		Comment:       laboratory.Comment,
		Status:        MatchStatusName[laboratory.Status],
		ImageURL:      laboratory.ImageUrl,
		LaboratoryURL: laboratory.LaboratoryUrl,
		Email:         laboratory.Email,
		Password:      laboratory.Password,
	}
}
