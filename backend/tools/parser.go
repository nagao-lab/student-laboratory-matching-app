package tools

import "strconv"

func ParseStringToUint(s string) uint {
	numUint64, _ := strconv.ParseUint(s, 10, 64)
	return uint(numUint64)
}
