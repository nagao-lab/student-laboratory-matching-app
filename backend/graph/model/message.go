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

var messageFromToName = map[int]MessageFrom{
	STUDNET:    MessageFromStudnet,
	LABORATORY: MessageFromLaboratory,
}

func ConvertMessageFromToInt(mf MessageFrom) (int, error) {
	switch mf {
	case MessageFromStudnet:
		return STUDNET, nil
	case MessageFromLaboratory:
		return LABORATORY, nil
	default:
		return -1, fmt.Errorf("unsupported MessageFrom")
	}

}

func ConvertMessage(message *db.Message) *Message {
	return &Message{
		MessageID:     tools.ParseUintToString(message.ID),
		MessageRoomID: tools.ParseUintToString(message.StudentLaboratoryID),
		From:          messageFromToName[message.From],
		Content:       message.Content,
		CreatedAt:     message.CreatedAt,
		UpdatedAt:     message.UpdatedAt,
	}
}
