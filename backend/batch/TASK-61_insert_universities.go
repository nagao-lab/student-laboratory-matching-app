package main

import "student-laboratory-matching-app/db"

func BulkInsertUniversities() {
	sqlDb := db.NewDB()
	defer db.CloseDB(sqlDb)

	// ref. http://ad9.org/pegasus/znet/kokudai.html
	universities := []*db.University{
		{ID: 1, PrefectureID: 1, Name: "北海道大学", Address: "札幌市北区北8条西5丁目", MaxGpa: 5},
		{ID: 2, PrefectureID: 1, Name: "北海道教育大学", Address: "札幌市北区あいの里5条3-1-5", MaxGpa: 5},
		{ID: 3, PrefectureID: 1, Name: "室蘭工業大学", Address: "室蘭市水元町27-1", MaxGpa: 5},
		{ID: 4, PrefectureID: 1, Name: "小樽商科大学", Address: "小樽市緑3-5-21", MaxGpa: 5},
		{ID: 5, PrefectureID: 1, Name: "帯広畜産大学", Address: "帯広市稲田町西2線11番地", MaxGpa: 5},
		{ID: 6, PrefectureID: 1, Name: "旭川医科大学", Address: "旭川市緑が丘東2条1丁目1-1", MaxGpa: 5},
		{ID: 7, PrefectureID: 1, Name: "北見工業大学", Address: "北見市公園町165", MaxGpa: 5},
		{ID: 8, PrefectureID: 2, Name: "弘前大学", Address: "弘前市文京町1", MaxGpa: 5},
		{ID: 9, PrefectureID: 3, Name: "岩手大学", Address: "盛岡市上田3-18-8", MaxGpa: 5},
		{ID: 10, PrefectureID: 4, Name: "東北大学", Address: "仙台市青葉区片平2-1-1    ", MaxGpa: 5},
		{ID: 11, PrefectureID: 4, Name: "宮城教育大学", Address: "仙台市青葉区荒巻字青葉", MaxGpa: 5},
		{ID: 12, PrefectureID: 5, Name: "秋田大学", Address: "秋田市手形学園町1-1", MaxGpa: 5},
		{ID: 13, PrefectureID: 6, Name: "山形大学", Address: "山形市小白川町1-4-12", MaxGpa: 5},
		{ID: 14, PrefectureID: 7, Name: "福島大学", Address: "福島市金谷川1番地", MaxGpa: 5},
		{ID: 15, PrefectureID: 8, Name: "茨城大学", Address: "水戸市文京2-1-1", MaxGpa: 5},
		{ID: 16, PrefectureID: 8, Name: "図書館情報大学", Address: "つくば市春日1-2", MaxGpa: 5},
		{ID: 17, PrefectureID: 9, Name: "宇都宮大学", Address: "宇都宮市峰町350", MaxGpa: 5},
		{ID: 18, PrefectureID: 10, Name: "群馬大学", Address: "前橋市荒牧町4-2", MaxGpa: 5},
		{ID: 19, PrefectureID: 11, Name: "埼玉大学", Address: "さいたま市下大久保255", MaxGpa: 5},
		{ID: 20, PrefectureID: 12, Name: "千葉大学", Address: "千葉市稲毛区弥生町1-33", MaxGpa: 5},
		{ID: 21, PrefectureID: 12, Name: "放送大学", Address: "千葉市美浜区若葉2-11", MaxGpa: 5},
		{ID: 22, PrefectureID: 13, Name: "東京大学", Address: "文京区本郷7-3-1", MaxGpa: 5},
		{ID: 23, PrefectureID: 13, Name: "お茶の水女子大学", Address: "文京区大塚2-1-1", MaxGpa: 5},
		{ID: 24, PrefectureID: 13, Name: "電気通信大学", Address: "調布市調布ヶ丘1-5-1", MaxGpa: 5},
		{ID: 25, PrefectureID: 13, Name: "東京医科歯科大学", Address: "文京区湯島1-5-45", MaxGpa: 5},
		{ID: 26, PrefectureID: 13, Name: "東京外国語大学", Address: "北区西ヶ原4-51-21", MaxGpa: 5},
		{ID: 27, PrefectureID: 13, Name: "東京学芸大学", Address: "小金井市貫井北町4-1-1", MaxGpa: 5},
		{ID: 28, PrefectureID: 13, Name: "東京芸術大学", Address: "台東区上野公園12-8", MaxGpa: 5},
		{ID: 29, PrefectureID: 13, Name: "東京工業大学", Address: "目黒区大岡山2-12-1", MaxGpa: 5},
		{ID: 30, PrefectureID: 13, Name: "東京商船大学", Address: "江東区越中島2-1-6", MaxGpa: 5},
		{ID: 31, PrefectureID: 13, Name: "東京水産大学", Address: "港区港南4-5-7", MaxGpa: 5},
		{ID: 32, PrefectureID: 13, Name: "東京農工大学", Address: "府中市晴見町3-8-1", MaxGpa: 5},
		{ID: 33, PrefectureID: 13, Name: "一橋大学", Address: "国立市中2-1", MaxGpa: 5},
		{ID: 34, PrefectureID: 14, Name: "横浜国立大学", Address: "横浜市保土ヶ谷区常盤台79-1", MaxGpa: 4.5},
		{ID: 35, PrefectureID: 14, Name: "総合研究大学", Address: "三浦郡葉山町上山口字間門1560-35", MaxGpa: 5},
		{ID: 36, PrefectureID: 15, Name: "新潟大学", Address: "950-2181  新潟市五十嵐二の町8050", MaxGpa: 5},
		{ID: 37, PrefectureID: 15, Name: "長岡技術科学大学", Address: "長岡市上富岡町1603-1", MaxGpa: 5},
		{ID: 38, PrefectureID: 15, Name: "上越教育大学", Address: "上越市山屋敷町1", MaxGpa: 5},
		{ID: 39, PrefectureID: 16, Name: "富山大学", Address: "富山市五福3190", MaxGpa: 5},
		{ID: 40, PrefectureID: 16, Name: "富山医科薬科大学", Address: "富山市杉谷2630", MaxGpa: 5},
		{ID: 41, PrefectureID: 17, Name: "金沢大学", Address: "金沢市角間町", MaxGpa: 5},
		{ID: 42, PrefectureID: 17, Name: "北陸先端科学技術大学", Address: "能美郡辰口町旭台1-1", MaxGpa: 5},
		{ID: 43, PrefectureID: 18, Name: "福井大学", Address: "福井市文京3-9-1", MaxGpa: 5},
		{ID: 44, PrefectureID: 18, Name: "福井医科大学", Address: "吉田郡松岡町下合月23-3", MaxGpa: 5},
		{ID: 45, PrefectureID: 19, Name: "山梨大学", Address: "甲府市武田4-4-37", MaxGpa: 5},
		{ID: 46, PrefectureID: 19, Name: "山梨医科大学", Address: "中巨摩郡玉穂町下河東1110", MaxGpa: 5},
		{ID: 47, PrefectureID: 20, Name: "信州大学", Address: "松本市旭3-1-1", MaxGpa: 5},
		{ID: 48, PrefectureID: 21, Name: "岐阜大学", Address: "岐阜市柳戸1-1", MaxGpa: 5},
		{ID: 49, PrefectureID: 22, Name: "静岡大学", Address: "静岡市大谷836", MaxGpa: 5},
		{ID: 50, PrefectureID: 22, Name: "浜松医科大学", Address: "浜松市半田町3600", MaxGpa: 5},
		{ID: 51, PrefectureID: 23, Name: "名古屋大学", Address: "名古屋市千種区不老町", MaxGpa: 5},
		{ID: 52, PrefectureID: 23, Name: "愛知教育大学", Address: "刈谷市井ヶ谷町広沢1", MaxGpa: 5},
		{ID: 53, PrefectureID: 23, Name: "豊橋技術科学大学", Address: "豊橋市天伯町字雲雀ヶ丘1-1", MaxGpa: 5},
		{ID: 54, PrefectureID: 23, Name: "名古屋工業大学", Address: "名古屋市昭和区御器所町", MaxGpa: 5},
		{ID: 55, PrefectureID: 24, Name: "三重大学", Address: "津市栗真町屋町1577", MaxGpa: 5},
		{ID: 56, PrefectureID: 25, Name: "滋賀大学", Address: "彦根市馬場1-1-1", MaxGpa: 5},
		{ID: 57, PrefectureID: 25, Name: "滋賀医科大学", Address: "大津市瀬田月輪町", MaxGpa: 5},
		{ID: 58, PrefectureID: 26, Name: "京都大学", Address: "京都市左京区吉田本町", MaxGpa: 5},
		{ID: 59, PrefectureID: 26, Name: "京都教育大学", Address: "京都市伏見区深草藤森町1", MaxGpa: 5},
		{ID: 60, PrefectureID: 26, Name: "京都工芸繊維大学", Address: "京都市左京区松ヶ崎御所海道町", MaxGpa: 5},
		{ID: 61, PrefectureID: 27, Name: "大阪大学", Address: "吹田市山田丘1-1", MaxGpa: 5},
		{ID: 62, PrefectureID: 27, Name: "大阪外国語大学", Address: "箕面市粟生間谷東8-1-1", MaxGpa: 5},
		{ID: 63, PrefectureID: 27, Name: "大阪教育大学", Address: "柏原市旭ヶ丘4-698-1", MaxGpa: 5},
		{ID: 64, PrefectureID: 28, Name: "神戸大学", Address: "神戸市灘区六甲台町1-1", MaxGpa: 5},
		{ID: 65, PrefectureID: 28, Name: "神戸商船大学", Address: "神戸市東灘区深江南町5-1-1", MaxGpa: 5},
		{ID: 66, PrefectureID: 28, Name: "兵庫教育大学", Address: "加東郡社町下久米942-1", MaxGpa: 5},
		{ID: 67, PrefectureID: 29, Name: "奈良教育大学", Address: "奈良市高畑町", MaxGpa: 5},
		{ID: 68, PrefectureID: 29, Name: "奈良女子大学", Address: "奈良市北魚屋東町", MaxGpa: 5},
		{ID: 69, PrefectureID: 30, Name: "和歌山大学", Address: "和歌山市栄谷930", MaxGpa: 5},
		{ID: 70, PrefectureID: 31, Name: "鳥取大学", Address: "鳥取市湖山町南4-101", MaxGpa: 5},
		{ID: 71, PrefectureID: 32, Name: "島根大学", Address: "松江市西川津町1060", MaxGpa: 5},
		{ID: 72, PrefectureID: 32, Name: "島根医科大学", Address: "出雲市塩冶町89-1", MaxGpa: 5},
		{ID: 73, PrefectureID: 33, Name: "岡山大学", Address: "岡山市津島中3-1-1", MaxGpa: 5},
		{ID: 74, PrefectureID: 34, Name: "広島大学", Address: "東広島市鏡山1-3-2", MaxGpa: 5},
		{ID: 75, PrefectureID: 35, Name: "山口大学", Address: "山口市吉田1677-1", MaxGpa: 5},
		{ID: 76, PrefectureID: 36, Name: "徳島大学", Address: "徳島市新蔵町2-24", MaxGpa: 5},
		{ID: 77, PrefectureID: 36, Name: "鳴門教育大学", Address: "鳴門市鳴門町高島字中島748", MaxGpa: 5},
		{ID: 78, PrefectureID: 37, Name: "香川大学", Address: "高松市幸町1-1", MaxGpa: 5},
		{ID: 79, PrefectureID: 37, Name: "香川医科大学", Address: "木田郡三木町池戸1750-1", MaxGpa: 5},
		{ID: 80, PrefectureID: 38, Name: "愛媛大学", Address: "松山市道後樋又10-13", MaxGpa: 5},
		{ID: 81, PrefectureID: 39, Name: "高知大学", Address: "高知市曙町2-5-1", MaxGpa: 5},
		{ID: 82, PrefectureID: 39, Name: "高知医科大学", Address: "南国市岡豊町小蓮", MaxGpa: 5},
		{ID: 83, PrefectureID: 40, Name: "九州大学", Address: "福岡市東区箱崎6-10-1", MaxGpa: 5},
		{ID: 84, PrefectureID: 40, Name: "九州芸術工科大学", Address: "福岡市南区塩原4-9-1", MaxGpa: 5},
		{ID: 85, PrefectureID: 40, Name: "九州工業大学", Address: "北九州市戸畑区仙水町1-1", MaxGpa: 5},
		{ID: 86, PrefectureID: 40, Name: "福岡教育大学", Address: "宗像市大字赤間729-1", MaxGpa: 5},
		{ID: 87, PrefectureID: 41, Name: "佐賀大学", Address: "佐賀市本庄町1", MaxGpa: 5},
		{ID: 88, PrefectureID: 41, Name: "佐賀医科大学", Address: "佐賀市鍋島5-1-1", MaxGpa: 5},
		{ID: 89, PrefectureID: 42, Name: "長崎大学", Address: "長崎市文教町1-14", MaxGpa: 5},
		{ID: 90, PrefectureID: 43, Name: "熊本大学", Address: "熊本市黒髪2-39-1", MaxGpa: 5},
		{ID: 91, PrefectureID: 44, Name: "大分大学", Address: "大分市旦野原700", MaxGpa: 5},
		{ID: 92, PrefectureID: 44, Name: "大分医科大学", Address: "大分郡挾間町医大ヶ丘1-1", MaxGpa: 5},
		{ID: 93, PrefectureID: 45, Name: "宮崎大学", Address: "宮崎市学園木花台西1-1", MaxGpa: 5},
		{ID: 94, PrefectureID: 45, Name: "宮崎医科大学", Address: "宮崎郡清武町木原5200", MaxGpa: 5},
		{ID: 95, PrefectureID: 46, Name: "鹿児島大学", Address: "鹿児島市郡元1-21-24", MaxGpa: 5},
		{ID: 96, PrefectureID: 46, Name: "鹿屋体育大学", Address: "鹿屋市白水町1", MaxGpa: 5},
		{ID: 97, PrefectureID: 47, Name: "琉球大学", Address: "中頭郡西原町千原1", MaxGpa: 5},
	}

	sqlDb.Save(&universities)
}