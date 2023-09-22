package model

import (
	"fmt"
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/tools"
)

const (
	STUDNET    int = iota // 0
	LABORATORY            // 1
)

var userTypeName = map[int]UserType{
	STUDNET:    UserTypeStudnet,
	LABORATORY: UserTypeLaboratory,
}

func GetUserTypeIndex(ut UserType) (int, error) {
	switch ut {
	case UserTypeStudnet:
		return STUDNET, nil
	case UserTypeLaboratory:
		return LABORATORY, nil
	default:
		return -1, fmt.Errorf("unsupported UserType")
	}

}

func ConvertMessage(message *db.Message) *Message {
	return &Message{
		MessageID:     tools.ParseUintToString(message.ID),
		MessageRoomID: tools.ParseUintToString(message.StudentLaboratoryID),
		From:          userTypeName[message.From],
		Content:       message.Content,
		CreatedAt:     message.CreatedAt,
		UpdatedAt:     message.UpdatedAt,
	}
}
