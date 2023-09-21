package model

import (
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/tools"
)

func ConvertMajor(major *db.Major) *Major {
	return &Major{
		ID:   tools.ParseUintToString(major.ID),
		Name: major.Name,
	}
}
