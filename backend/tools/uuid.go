package tools

import (
	"strings"

	"github.com/google/uuid"
)

func generateUUID() string {
	return uuid.New().String()
}

func GeneratePrefixedUUID(prefix string) string {
	// prefix must be 3 lower characters; "stu"  or "lab"
	return strings.ToLower(prefix[:3]) + "-" + generateUUID()
}
