// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

import (
	"fmt"
	"io"
	"strconv"
	"time"
)

type Laboratory struct {
	ID            string      `json:"id"`
	UID           string      `json:"uid"`
	University    *University `json:"university"`
	Name          string      `json:"name"`
	Professor     string      `json:"professor"`
	NumStudents   int         `json:"numStudents"`
	Comment       string      `json:"comment"`
	Status        MatchStatus `json:"status"`
	ImageURL      string      `json:"imageUrl"`
	LaboratoryURL string      `json:"laboratoryUrl"`
	Email         string      `json:"email"`
	Password      string      `json:"password"`
	Majors        []*Major    `json:"majors"`
	NumLikes      int         `json:"numLikes"`
}

type Major struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type NewLike struct {
	StudentID    string `json:"studentId"`
	LaboratoryID string `json:"laboratoryId"`
}

type NewStudent struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type NewStudentFields struct {
	ID           string       `json:"id"`
	Name         *string      `json:"name,omitempty"`
	Email        *string      `json:"email,omitempty"`
	Password     *string      `json:"password,omitempty"`
	ImageURL     *string      `json:"imageUrl,omitempty"`
	Gender       *Gender      `json:"gender,omitempty"`
	Birthday     *time.Time   `json:"birthday,omitempty"`
	UniversityID *string      `json:"universityId,omitempty"`
	Grade        *int         `json:"grade,omitempty"`
	Gpa          *float64     `json:"gpa,omitempty"`
	PrefectureID *string      `json:"prefectureId,omitempty"`
	Comment      *string      `json:"comment,omitempty"`
	Interest     *string      `json:"interest,omitempty"`
	Status       *MatchStatus `json:"status,omitempty"`
	MajorIds     []*string    `json:"majorIds,omitempty"`
}

type NewUniversity struct {
	PrefectureID string  `json:"prefectureId"`
	Name         string  `json:"name"`
	Address      string  `json:"address"`
	MaxGpa       float64 `json:"maxGpa"`
}

type Prefecture struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type Student struct {
	ID         string      `json:"id"`
	UID        string      `json:"uid"`
	Name       string      `json:"name"`
	Email      string      `json:"email"`
	Password   string      `json:"password"`
	ImageURL   string      `json:"imageUrl"`
	Gender     Gender      `json:"gender"`
	Birthday   time.Time   `json:"birthday"`
	University *University `json:"university"`
	Grade      int         `json:"grade"`
	Gpa        float64     `json:"gpa"`
	Prefecture *Prefecture `json:"prefecture"`
	Comment    string      `json:"comment"`
	Interest   string      `json:"interest"`
	Status     MatchStatus `json:"status"`
	Majors     []*Major    `json:"majors"`
	NumLikes   int         `json:"numLikes"`
}

type University struct {
	ID         string      `json:"id"`
	Prefecture *Prefecture `json:"prefecture"`
	Name       string      `json:"name"`
	Address    string      `json:"address"`
	MaxGpa     float64     `json:"maxGpa"`
}

type Gender string

const (
	GenderMale   Gender = "MALE"
	GenderFemale Gender = "FEMALE"
	GenderOther  Gender = "OTHER"
)

var AllGender = []Gender{
	GenderMale,
	GenderFemale,
	GenderOther,
}

func (e Gender) IsValid() bool {
	switch e {
	case GenderMale, GenderFemale, GenderOther:
		return true
	}
	return false
}

func (e Gender) String() string {
	return string(e)
}

func (e *Gender) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = Gender(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid Gender", str)
	}
	return nil
}

func (e Gender) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type LikeStatus string

const (
	LikeStatusBlank              LikeStatus = "BLANK"
	LikeStatusLikeFromStudent    LikeStatus = "LIKE_FROM_STUDENT"
	LikeStatusLikeFromLaboratory LikeStatus = "LIKE_FROM_LABORATORY"
	LikeStatusLikeFromBoth       LikeStatus = "LIKE_FROM_BOTH"
)

var AllLikeStatus = []LikeStatus{
	LikeStatusBlank,
	LikeStatusLikeFromStudent,
	LikeStatusLikeFromLaboratory,
	LikeStatusLikeFromBoth,
}

func (e LikeStatus) IsValid() bool {
	switch e {
	case LikeStatusBlank, LikeStatusLikeFromStudent, LikeStatusLikeFromLaboratory, LikeStatusLikeFromBoth:
		return true
	}
	return false
}

func (e LikeStatus) String() string {
	return string(e)
}

func (e *LikeStatus) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = LikeStatus(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid LikeStatus", str)
	}
	return nil
}

func (e LikeStatus) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type MatchStatus string

const (
	MatchStatusActive   MatchStatus = "ACTIVE"
	MatchStatusInactive MatchStatus = "INACTIVE"
)

var AllMatchStatus = []MatchStatus{
	MatchStatusActive,
	MatchStatusInactive,
}

func (e MatchStatus) IsValid() bool {
	switch e {
	case MatchStatusActive, MatchStatusInactive:
		return true
	}
	return false
}

func (e MatchStatus) String() string {
	return string(e)
}

func (e *MatchStatus) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = MatchStatus(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid MatchStatus", str)
	}
	return nil
}

func (e MatchStatus) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}
