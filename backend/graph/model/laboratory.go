package model

import (
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/tools"
)

func ConvertLaboratory(laboratory *db.Laboratory) *Laboratory {
	return &Laboratory{
		ID:            tools.ParseUintToString(laboratory.ID),
		UID:           laboratory.UID,
		Name:          laboratory.Name,
		Email:         laboratory.Email,
		Password:      laboratory.Password,
		Professor:     laboratory.Professor,
		NumStudents:   laboratory.NumStudents,
		Comment:       laboratory.Comment,
		Status:        MatchStatusName[laboratory.Status],
		ImageURL:      laboratory.ImageUrl,
		LaboratoryURL: laboratory.LaboratoryUrl,
		University:    &University{ID: tools.ParseUintToString(laboratory.UniversityID)},
	}
}

func (laboratory Laboratory) IsNotActive() bool {
	return laboratory.Status == MatchStatusInactive
}
