package main

import "student-laboratory-matching-app/db"

func BulkInsertPrefectures() {
	sqlDb := db.NewDB()
	defer db.CloseDB(sqlDb)

	prefectures := []*db.Prefecture{
		{ID: 1, Name: "北海道"},
		{ID: 2, Name: "青森県"},
		{ID: 3, Name: "岩手県"},
		{ID: 4, Name: "宮城県"},
		{ID: 5, Name: "秋田県"},
		{ID: 6, Name: "山形県"},
		{ID: 7, Name: "福島県"},
		{ID: 8, Name: "茨城県"},
		{ID: 9, Name: "栃木県"},
		{ID: 10, Name: "群馬県"},
		{ID: 11, Name: "埼玉県"},
		{ID: 12, Name: "千葉県"},
		{ID: 13, Name: "東京都"},
		{ID: 14, Name: "神奈川県"},
		{ID: 15, Name: "新潟県"},
		{ID: 16, Name: "富山県"},
		{ID: 17, Name: "石川県"},
		{ID: 18, Name: "福井県"},
		{ID: 19, Name: "山梨県"},
		{ID: 20, Name: "長野県"},
		{ID: 21, Name: "岐阜県"},
		{ID: 22, Name: "静岡県"},
		{ID: 23, Name: "愛知県"},
		{ID: 24, Name: "三重県"},
		{ID: 25, Name: "滋賀県"},
		{ID: 26, Name: "京都府"},
		{ID: 27, Name: "大阪府"},
		{ID: 28, Name: "兵庫県"},
		{ID: 29, Name: "奈良県"},
		{ID: 30, Name: "和歌山県"},
		{ID: 31, Name: "鳥取県"},
		{ID: 32, Name: "島根県"},
		{ID: 33, Name: "岡山県"},
		{ID: 34, Name: "広島県"},
		{ID: 35, Name: "山口県"},
		{ID: 36, Name: "徳島県"},
		{ID: 37, Name: "香川県"},
		{ID: 38, Name: "愛媛県"},
		{ID: 39, Name: "高知県"},
		{ID: 40, Name: "福岡県"},
		{ID: 41, Name: "佐賀県"},
		{ID: 42, Name: "長崎県"},
		{ID: 43, Name: "熊本県"},
		{ID: 44, Name: "大分県"},
		{ID: 45, Name: "宮崎県"},
		{ID: 46, Name: "鹿児島県"},
		{ID: 47, Name: "沖縄県"},
	}

	sqlDb.Save(prefectures)
}
