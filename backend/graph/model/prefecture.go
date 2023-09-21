package model

import (
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/tools"
)

func ConvertPrefecture(prefecture *db.Prefecture) *Prefecture {
	return &Prefecture{
		ID:   tools.ParseUintToString(prefecture.ID),
		Name: prefecture.Name,
	}
}
