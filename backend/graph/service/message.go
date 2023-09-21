package service

import (
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph/model"
	"student-laboratory-matching-app/tools"

	"gorm.io/gorm"
)

type IMessageService interface {
	CreateMessage(model.NewMessage) (*model.Message, error)
}

type messageService struct {
	db *gorm.DB
}

func (ms messageService) CreateMessage(newMessage model.NewMessage) (*model.Message, error) {
	studentLaboratoryId := tools.ParseStringToUint(newMessage.MessageRoomID)
	from, _ := model.ConvertMessageFromToInt(newMessage.From)

	message := db.Message{
		StudentLaboratoryID: studentLaboratoryId,
		From:                from,
		Content:             newMessage.Content,
	}

	// TODO: likeStatusがBOTHかの確認は必要？
	err := ms.db.Create(&message).Error
	if err != nil {
		return nil, err
	}

	return model.ConvertMessage(&message), nil
}
