package model

import (
	"strconv"
	"student-laboratory-matching-app/db"
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

func ConvertStudent(student *db.Student) *Student {
	return &Student{
		ID:         strconv.FormatUint(uint64(student.ID), 10),
		UID:        strconv.FormatUint(uint64(student.UID), 10),
		Name:       student.Name,
		Email:      student.Email,
		Password:   student.Password,
		ImageURL:   student.ImageUrl,
		Gender:     genderName[student.Gender],
		Birthday:   student.Birthday,
		University: &University{ID: strconv.FormatUint(uint64(student.UniversityID), 10)},
		Grade:      student.Grade,
		Gpa:        float64(student.Gpa),
		Prefecture: &Prefecture{ID: strconv.FormatUint(uint64(student.PrefectureID), 10)},
		Comment:    student.Comment,
		Interest:   student.Interest,
		Status:     MatchStatusName[student.Status],
	}
}
