package model

import (
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/tools"
)

func ConvertStudentLaboratory(studentLaboratory *db.Student_Laboratory) *StudentLaboratory {
	return &StudentLaboratory{
		ID:         tools.ParseUintToString(studentLaboratory.ID),
		Student:    &Student{ID: tools.ParseUintToString(studentLaboratory.StudentID)},
		Laboratory: &Laboratory{ID: tools.ParseUintToString(studentLaboratory.LaboratoryID)},
		Status:     LikeStatusName[studentLaboratory.Status],
	}
}

func (sl StudentLaboratory) CanExchangeMessages() bool {
	return sl.Status == LikeStatusLikeFromBoth
}
