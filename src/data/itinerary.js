// 九州旅行行程資料

export const ITINERARY_DATA = [
  {
    id: 1,
    date: "1/21 (二)",
    isoDate: "2025-01-21",
    title: "福岡抵達與市區探索",
    stay: "博多站天座飯店 (The Base Hakata)",
    location: "Fukuoka",
    mapCenter: { lat: 33.5897, lng: 130.4206 },
    activities: [
      {
        time: "10:30",
        type: "transport",
        title: "抵達福岡機場 (FUK)",
        detail: "搭乘地鐵前往博多站 (約15分鐘)",
        locationKey: "fukuoka_airport"
      },
      {
        time: "12:00",
        type: "activity",
        title: "飯店 Check-in / 寄放行李",
        detail: "博多站天座飯店",
        locationKey: "base_hakata_hotel"
      },
      {
        time: "13:00",
        type: "food",
        title: "博多市區午餐",
        detail: "推薦：博多拉麵 或 牛腸鍋",
        locationKey: "hakata_station"
      },
      {
        time: "14:30",
        type: "shopping",
        title: "博多站周邊購物",
        detail: "重點任務：購買雪靴、防寒用品 (為滑雪做準備)",
        locationKey: "hakata_station"
      },
      {
        time: "16:30",
        type: "highlight",
        title: "teamLab Forest 或 Lalaport",
        detail: "沉浸式藝術體驗 或 觀賞實物大鋼彈 (二選一)",
        locationKey: "teamlab_fukuoka"
      },
      {
        time: "19:00",
        type: "food",
        title: "晚餐：博多名物",
        detail: "探索中洲屋台或市區名店",
        locationKey: "nakasu_yatai"
      }
    ],
    gourmet: [
      {
        name: "博多祇園鐵那貝",
        type: "鐵鍋餃子",
        tags: ["在地老店", "Google 4.2"],
        desc: "外皮酥脆內餡多汁，博多必吃名物。",
        locationKey: "hakata_gion_tetsunabe"
      },
      {
        name: "元祖博多明太重",
        type: "鄉土料理",
        tags: ["排隊名店", "Google 4.4"],
        desc: "日本第一家明太子料理專門店，豪華美味。",
        locationKey: "ganso_mentaiju"
      },
      {
        name: "Seimon Barai",
        type: "海鮮居酒屋",
        tags: ["米其林推薦", "預約制"],
        desc: "新鮮玄界灘海鮮，在地饕客首選。",
        locationKey: "seimon_barai"
      }
    ]
  },
  {
    id: 2,
    date: "1/22 (三)",
    isoDate: "2025-01-22",
    title: "別府地獄巡禮與溫泉",
    stay: "別府八湯 御宿野乃",
    location: "Beppu",
    mapCenter: { lat: 33.2950, lng: 131.4750 },
    activities: [
      {
        time: "09:00",
        type: "transport",
        title: "前往 Budget 租車",
        detail: "博多筑紫口店取車",
        locationKey: "budget_hakata"
      },
      {
        time: "09:30",
        type: "drive",
        title: "自駕前往別府",
        detail: "車程約 1小時45分 (建議中途於基山PA休息)",
        duration: "105m",
        locationKey: "beppu_city"
      },
      {
        time: "11:30",
        type: "highlight",
        title: "別府地獄巡禮 (七大與八大)",
        detail: "海地獄(必吃布丁)、血池地獄(買軟膏)、龍捲地獄(間歇泉)",
        locationKey: "umi_jigoku"
      },
      {
        time: "13:30",
        type: "food",
        title: "地獄蒸工房 鐵輪",
        detail: "體驗用溫泉蒸氣蒸煮食材，極具特色",
        locationKey: "jigoku_mushi_kobo"
      },
      {
        time: "15:30",
        type: "sight",
        title: "巨大天狗像 & 商店街",
        detail: "別府經典地標拍照",
        locationKey: "beppu_tengu"
      },
      {
        time: "16:30",
        type: "activity",
        title: "竹瓦溫泉 砂浴體驗",
        detail: "百年歷史建築，體驗名物「砂湯」",
        locationKey: "takegawara_onsen"
      },
      {
        time: "18:00",
        type: "stay",
        title: "入住：御宿野乃",
        detail: "享受全館榻榻米與私人溫泉",
        locationKey: "yado_nono_beppu"
      }
    ],
    gourmet: [
      {
        name: "Toyotsune (天丼名店)",
        type: "天婦羅丼飯",
        tags: ["Google 4.4", "在地人氣"],
        desc: "特製醬汁天丼，別府排隊名店。",
        locationKey: "toyotsune"
      },
      {
        name: "Kotsukotsu An",
        type: "大分鄉土料理",
        tags: ["老字號", "燒酒"],
        desc: "能吃到大分縣著名的「琉球丼」與團子湯。",
        locationKey: "kotsukotsu_an"
      },
      {
        name: "岡本屋賣店",
        type: "地獄蒸布丁",
        tags: ["絕景", "必吃甜點"],
        desc: "苦焦糖配上濃郁布丁，明礬大橋絕景。",
        locationKey: "okamotoya"
      }
    ]
  },
  {
    id: 3,
    date: "1/23 (四)",
    isoDate: "2025-01-23",
    title: "由布院散策與九重滑雪",
    stay: "筋湯溫泉 旅館 Nanakamado",
    location: "Yufuin",
    mapCenter: { lat: 33.2000, lng: 131.3000 },
    activities: [
      {
        time: "09:30",
        type: "drive",
        title: "前往由布院",
        detail: "車程約 50-60分鐘 (山路請小心)",
        duration: "60m",
        locationKey: "yufuin_station"
      },
      {
        time: "10:30",
        type: "highlight",
        title: "湯之坪街道 & 金鱗湖",
        detail: "Yufuin Floral Village、晨霧欣賞",
        locationKey: "kinrin_lake"
      },
      {
        time: "12:30",
        type: "food",
        title: "由布院午餐",
        detail: "推薦：釜飯心 或 蕎麥麵",
        locationKey: "yufuin_kokoro"
      },
      {
        time: "14:00",
        type: "drive",
        title: "前往九重森林公園滑雪場",
        detail: "車程約 1小時10分鐘",
        duration: "70m",
        locationKey: "kokonoe_ski"
      },
      {
        time: "15:20",
        type: "activity",
        title: "九重滑雪場玩雪",
        detail: "預計停留 3小時，盡情享受粉雪",
        locationKey: "kokonoe_ski"
      },
      {
        time: "18:20",
        type: "drive",
        title: "前往筋湯溫泉",
        detail: "車程約 40分鐘",
        duration: "40m",
        locationKey: "sujiyu_onsen"
      }
    ],
    gourmet: [
      {
        name: "由布釜飯「心」",
        type: "豐後牛/地雞釜飯",
        tags: ["必吃名店", "Google 4.3"],
        desc: "金鱗湖本店，三吃法品嚐在地食材美味。",
        locationKey: "yufuin_kokoro"
      },
      {
        name: "B-Speak",
        type: "生乳捲",
        tags: ["甜點名店", "需預約"],
        desc: "由布院最知名的蛋糕捲，往往中午前售罄。",
        locationKey: "bspeak"
      },
      {
        name: "鞠智 cucuchi",
        type: "銅鑼燒/咖啡",
        tags: ["文青風", "手信"],
        desc: "嚴選素材的銅鑼燒，包裝精美適合送禮。",
        locationKey: "cucuchi"
      },
      {
        name: "金賞可樂餅",
        type: "小吃",
        tags: ["金賞受賞", "邊走邊吃"],
        desc: "湯之坪街道必吃，牛肉與起司口味最受歡迎。",
        locationKey: "yunohira_street"
      }
    ]
  }
];
