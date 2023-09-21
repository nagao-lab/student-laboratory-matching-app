package model

import (
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/tools"
)

const (
	MALE   int = iota // 0
	FEMALE            // 1
	OTHER             // 2
)

var genderName = map[int]Gender{
	MALE:   GenderMale,
	FEMALE: GenderFemale,
	OTHER:  GenderOther,
}

var GenderIndex = map[Gender]int{
	GenderMale:   MALE,
	GenderFemale: FEMALE,
	GenderOther:  OTHER,
}

func ConvertStudent(student *db.Student) *Student {
	return &Student{
		ID:         tools.ParseUintToString(student.ID),
		UID:        student.UID,
		Name:       student.Name,
		Email:      student.Email,
		Password:   student.Password,
		ImageURL:   student.ImageUrl,
		Gender:     genderName[student.Gender],
		Birthday:   student.Birthday,
		Grade:      student.Grade,
		Gpa:        float64(student.Gpa),
		Comment:    student.Comment,
		Interest:   student.Interest,
		Status:     MatchStatusName[student.Status],
		University: &University{ID: tools.ParseUintToString(student.UniversityID)},
		Prefecture: &Prefecture{ID: tools.ParseUintToString(student.PrefectureID)},
	}
}

func (student Student) IsNotActive() bool {
	return student.Status == MatchStatusInactive
}
