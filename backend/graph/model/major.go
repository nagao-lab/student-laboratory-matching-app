package model

import (
	"strconv"
	"student-laboratory-matching-app/db"
)

func ConvertMajor(major *db.Major) *Major {
	return &Major{
		ID:   strconv.FormatUint(uint64(major.ID), 10),
		Name: major.Name,
	}
}
