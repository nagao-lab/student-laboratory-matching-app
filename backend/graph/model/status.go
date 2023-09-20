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

const (
	LikeStatusIndexBlank          int = iota // 0
	LikeStatusIndexFromStudent               // 1
	LikeStatusIndexFromLaboratory            // 2
	LikeStatusIndexFromBoth                  // 3
)

var LikeStatusName = map[int]LikeStatus{
	LikeStatusIndexBlank:          LikeStatusBlank,
	LikeStatusIndexFromStudent:    LikeStatusLikeFromStudent,
	LikeStatusIndexFromLaboratory: LikeStatusLikeFromLaboratory,
	LikeStatusIndexFromBoth:       LikeStatusLikeFromBoth,
}

var LikeStatusIndex = map[LikeStatus]int{
	LikeStatusBlank:              LikeStatusIndexBlank,
	LikeStatusLikeFromStudent:    LikeStatusIndexFromStudent,
	LikeStatusLikeFromLaboratory: LikeStatusIndexFromLaboratory,
	LikeStatusLikeFromBoth:       LikeStatusIndexFromBoth,
}
