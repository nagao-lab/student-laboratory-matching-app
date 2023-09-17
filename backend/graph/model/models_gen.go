// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

import (
	"fmt"
	"io"
	"strconv"
	"time"
)

type NewStudent struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type Student struct {
	ID           string      `json:"id"`
	UID          string      `json:"uid"`
	Name         string      `json:"name"`
	Email        string      `json:"email"`
	Password     string      `json:"password"`
	ImageURL     string      `json:"imageUrl"`
	Gender       Gender      `json:"gender"`
	Birthday     time.Time   `json:"birthday"`
	UniversityID string      `json:"universityId"`
	Grade        int         `json:"grade"`
	Gpa          float64     `json:"gpa"`
	PrefectureID string      `json:"prefectureId"`
	Comment      string      `json:"comment"`
	Interest     string      `json:"interest"`
	Status       MatchStatus `json:"status"`
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
