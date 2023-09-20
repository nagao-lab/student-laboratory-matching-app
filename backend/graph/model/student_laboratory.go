package model

import (
	"strconv"
	"student-laboratory-matching-app/db"
)

func ConvertStudentLaboratory(studentLaboratory *db.Student_Laboratory) *StudentLaboratory {
	return &StudentLaboratory{
		ID:         strconv.FormatUint(uint64(studentLaboratory.ID), 10),
		Student:    &Student{ID: strconv.FormatUint(uint64(studentLaboratory.StudentID), 10)},
		Laboratory: &Laboratory{ID: strconv.FormatUint(uint64(studentLaboratory.LaboratoryID), 10)},
		Status:     LikeStatusName[studentLaboratory.Status],
	}
}
