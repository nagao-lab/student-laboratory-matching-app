package service

import (
	"fmt"
	"log"
	"student-laboratory-matching-app/db"
	"student-laboratory-matching-app/graph/model"
	"student-laboratory-matching-app/tools"

	"gorm.io/gorm"
)

type IMessageService interface {
	CreateMessage(model.NewMessage) (*model.Message, error)
	GetMessages(string) ([]*model.Message, error)
	GetMessagesByIds(model.NewLike) ([]*model.Message, error)
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

	log.Println("Success: Creat message")
	return model.ConvertMessage(&message), nil
}

func (ms messageService) GetMessages(messageRoomId string) ([]*model.Message, error) {
	var records []db.Message
	err := ms.db.Where("student_laboratory_id = ?", messageRoomId).
		Order("created_at").
		Find(&records).Error
	if err != nil {
		return nil, err
	}

	var messages []*model.Message
	for _, record := range records {
		messages = append(messages, model.ConvertMessage(&record))
	}

	log.Println("Success: Get massage by messageRoom ID")
	return messages, nil
}

func (ms messageService) GetMessagesByIds(matchingIds model.NewLike) ([]*model.Message, error) {
	record := db.StudentLaboratory{
		StudentID:    tools.ParseStringToUint(matchingIds.StudentID),
		LaboratoryID: tools.ParseStringToUint(matchingIds.LaboratoryID),
	}
	err := ms.db.Where(&record).
		Find(&record).Error
	if err != nil {
		return nil, err
	}

	studentLaboratory := model.ConvertStudentLaboratory(&record)
	if !studentLaboratory.CanExchangeMessages() {
		return nil, fmt.Errorf("GetMessageByIds failed: they can't exchange messages (either studentId or laboratoryId may be wrong)")
	}

	log.Println("Success: Get massages by matchingID")
	return ms.GetMessages(studentLaboratory.ID)
}
