package model

import (
	"strconv"
	"student-laboratory-matching-app/db"
)

func ConvertPrefecture(prefecture *db.Prefecture) *Prefecture {
	return &Prefecture{
		ID:   strconv.FormatUint(uint64(prefecture.ID), 10),
		Name: prefecture.Name,
	}
}
