package model

import (
	"fmt"
	"strconv"
	"student-laboratory-matching-app/db"
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
		MessageID:     strconv.FormatUint(uint64(message.ID), 10),
		MessageRoomID: strconv.FormatUint(uint64(message.StudentLaboratoryID), 10),
		From:          messageFromToName[message.From],
		Content:       message.Content,
		CreatedAt:     message.CreatedAt,
		UpdatedAt:     message.UpdatedAt,
	}
}
