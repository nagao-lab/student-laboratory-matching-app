package model

const (
	INACTIVE int = iota // 0
	ACTIVE              // 1
)

var MatchStatusName = map[int]MatchStatus{
	INACTIVE: MatchStatusInactive,
	ACTIVE:   MatchStatusActive,
}

var MatchStatusIndex = map[MatchStatus]int{
	MatchStatusInactive: INACTIVE,
	MatchStatusActive:   ACTIVE,
}

type LikeStatus string

const (
	LikeStatusBrank          LikeStatus = "BRANK"
	LikeStatusFromStudent    LikeStatus = "LIKE_FROM_STUDENT"
	LikeStatusFromLaboratory LikeStatus = "LIKE_FROM_LABORATORY"
	LikeStatusFromBoth       LikeStatus = "LIKE_FROM_BOTH"
)

const (
	LikeStatusIndexBrank          int = iota // 0
	LikeStatusIndexFromStudent               // 1
	LikeStatusIndexFromLaboratory            // 2
	LikeStatusIndexFromBoth                  // 3
)
