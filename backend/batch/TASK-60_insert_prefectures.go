package main

import "student-laboratory-matching-app/db"

func BulkInsertPrefectures() {
	sqlDb := db.NewDB()
	defer db.CloseDB(sqlDb)

	prefectures := []*db.Prefecture{
		{Name: "北海道"},  // 1
		{Name: "青森県"},  // 2
		{Name: "岩手県"},  // 3
		{Name: "宮城県"},  // 4
		{Name: "秋田県"},  // 5
		{Name: "山形県"},  // 6
		{Name: "福島県"},  // 7
		{Name: "茨城県"},  // 8
		{Name: "栃木県"},  // 9
		{Name: "群馬県"},  // 10
		{Name: "埼玉県"},  // 11
		{Name: "千葉県"},  // 12
		{Name: "東京都"},  // 13
		{Name: "神奈川県"}, // 14
		{Name: "新潟県"},  // 15
		{Name: "富山県"},  // 16
		{Name: "石川県"},  // 17
		{Name: "福井県"},  // 18
		{Name: "山梨県"},  // 19
		{Name: "長野県"},  // 20
		{Name: "岐阜県"},  // 21
		{Name: "静岡県"},  // 22
		{Name: "愛知県"},  // 23
		{Name: "三重県"},  // 24
		{Name: "滋賀県"},  // 25
		{Name: "京都府"},  // 26
		{Name: "大阪府"},  // 27
		{Name: "兵庫県"},  // 28
		{Name: "奈良県"},  // 29
		{Name: "和歌山県"}, // 30
		{Name: "鳥取県"},  // 31
		{Name: "島根県"},  // 32
		{Name: "岡山県"},  // 33
		{Name: "広島県"},  // 34
		{Name: "山口県"},  // 35
		{Name: "徳島県"},  // 36
		{Name: "香川県"},  // 37
		{Name: "愛媛県"},  // 38
		{Name: "高知県"},  // 39
		{Name: "福岡県"},  // 40
		{Name: "佐賀県"},  // 41
		{Name: "長崎県"},  // 42
		{Name: "熊本県"},  // 43
		{Name: "大分県"},  // 44
		{Name: "宮崎県"},  // 45
		{Name: "鹿児島県"}, // 46
		{Name: "沖縄県"},  // 47
	}

	sqlDb.Save(prefectures)
}
