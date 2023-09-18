package model

const (
	INACTIVE int = iota // 0
	ACTIVE              // 1
)

var MatchStatusName = map[int]MatchStatus{
	INACTIVE: MatchStatusInactive,
	ACTIVE:   MatchStatusActive,
}
