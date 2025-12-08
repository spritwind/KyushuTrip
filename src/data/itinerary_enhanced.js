// 彥杰 & 文臻 & 馨云馨予 九州之旅 - 完整增強版行程資料

export const ITINERARY_DATA_ENHANCED = [
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
        detail: "搭乘地鐵前往博多站 (約15分鐘) | Google評分: 4.3⭐",
        locationKey: "fukuoka_airport",
        googleRating: 4.3,
        coordinates: { lat: 33.5859, lng: 130.4511 }
      },
      {
        time: "12:00",
        type: "activity",
        title: "飯店 Check-in / 寄放行李",
        detail: "博多站天座飯店 | Google評分: 4.4⭐ | 地理位置絕佳",
        locationKey: "base_hakata_hotel",
        googleRating: 4.4,
        coordinates: { lat: 33.5902, lng: 130.4212 }
      },
      {
        time: "13:00",
        type: "food",
        title: "午餐：一蘭拉麵總本店",
        detail: "博多拉麵發祥地 | Google評分: 4.2⭐",
        locationKey: "ichiran_ramen",
        googleRating: 4.2,
        coordinates: { lat: 33.5896, lng: 130.4001 }
      },
      {
        time: "14:30",
        type: "shopping",
        title: "博多站 AMU PLAZA 購物",
        detail: "購買雪靴、防寒用品 | Google評分: 4.3⭐",
        locationKey: "amu_plaza",
        googleRating: 4.3,
        coordinates: { lat: 33.5903, lng: 130.4207 }
      },
      {
        time: "16:30",
        type: "highlight",
        title: "teamLab Forest 福岡",
        detail: "沉浸式數位藝術體驗 | Google評分: 4.5⭐",
        locationKey: "teamlab_fukuoka",
        googleRating: 4.5,
        coordinates: { lat: 33.6244, lng: 130.4178 }
      },
      {
        time: "19:00",
        type: "food",
        title: "晚餐：中洲屋台街",
        detail: "福岡夜市美食文化 | Google評分: 4.1⭐",
        locationKey: "nakasu_yatai",
        googleRating: 4.1,
        coordinates: { lat: 33.5936, lng: 130.4063 }
      }
    ],
    gourmet: [
      {
        name: "一蘭拉麵 總本店",
        type: "博多拉麵",
        tags: ["Google 4.2⭐", "創始店"],
        desc: "福岡必吃拉麵，24小時營業，濃郁豚骨湯底。",
        locationKey: "ichiran_ramen",
        googleRating: 4.2,
        michelin: false,
        coordinates: { lat: 33.5896, lng: 130.4001 }
      },
      {
        name: "博多祇園鐵那貝",
        type: "鐵鍋餃子",
        tags: ["Google 4.3⭐", "在地老店"],
        desc: "外皮酥脆內餡多汁，博多必吃名物。",
        locationKey: "hakata_gion_tetsunabe",
        googleRating: 4.3,
        michelin: false,
        coordinates: { lat: 33.5933, lng: 130.4107 }
      },
      {
        name: "元祖博多明太重",
        type: "明太子料理",
        tags: ["Google 4.4⭐", "排隊名店"],
        desc: "日本第一家明太子料理專門店，豪華美味。",
        locationKey: "ganso_mentaiju",
        googleRating: 4.4,
        michelin: false,
        coordinates: { lat: 33.5915, lng: 130.4094 }
      },
      {
        name: "河太郎 中洲本店",
        type: "活烏賊料理",
        tags: ["Google 4.5⭐", "米其林推薦"],
        desc: "現撈活烏賊生魚片，新鮮彈牙，福岡必吃。",
        locationKey: "kawataro_nakasu",
        googleRating: 4.5,
        michelin: true,
        coordinates: { lat: 33.5941, lng: 130.4069 }
      },
      {
        name: "Seimon Barai",
        type: "海鮮居酒屋",
        tags: ["Google 4.6⭐", "米其林推薦"],
        desc: "新鮮玄界灘海鮮，在地饕客首選，需預約。",
        locationKey: "seimon_barai",
        googleRating: 4.6,
        michelin: true,
        coordinates: { lat: 33.5898, lng: 130.4062 }
      }
    ],
    shopping: [
      {
        name: "AMU PLAZA 博多",
        type: "百貨商場",
        tags: ["Google 4.3⭐", "車站直結"],
        desc: "博多站直結，10層樓購物天堂，品牌齊全。",
        coordinates: { lat: 33.5903, lng: 130.4207 }
      },
      {
        name: "博多阪急百貨",
        type: "高級百貨",
        tags: ["Google 4.4⭐", "精品雲集"],
        desc: "關西阪急百貨九州唯一據點，精品美食應有盡有。",
        coordinates: { lat: 33.5897, lng: 130.4201 }
      },
      {
        name: "Canal City 博多",
        type: "購物娛樂城",
        tags: ["Google 4.3⭐", "必訪景點"],
        desc: "運河城，結合購物、美食、娛樂的大型複合設施。",
        coordinates: { lat: 33.5903, lng: 130.4086 }
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
        title: "取車：Budget 租車 博多筑紫口店",
        detail: "預約取車 | Google評分: 4.2⭐",
        locationKey: "budget_hakata",
        googleRating: 4.2,
        coordinates: { lat: 33.5880, lng: 130.4250 }
      },
      {
        time: "09:30",
        type: "drive",
        title: "自駕前往別府",
        detail: "車程約 1小時45分 | 建議中途於基山PA休息",
        duration: "105m",
        locationKey: "beppu_city",
        coordinates: { lat: 33.2844, lng: 131.4909 }
      },
      {
        time: "11:30",
        type: "highlight",
        title: "海地獄",
        detail: "別府八大地獄之首 | Google評分: 4.3⭐ | 必吃地獄蒸布丁",
        locationKey: "umi_jigoku",
        googleRating: 4.3,
        coordinates: { lat: 33.3089, lng: 131.4656 }
      },
      {
        time: "12:30",
        type: "highlight",
        title: "血池地獄",
        detail: "日本最古老天然地獄 | Google評分: 4.2⭐ | 購買血池軟膏",
        locationKey: "chinoike_jigoku",
        googleRating: 4.2,
        coordinates: { lat: 33.2947, lng: 131.4783 }
      },
      {
        time: "13:30",
        type: "food",
        title: "午餐：地獄蒸工房 鐵輪",
        detail: "溫泉蒸氣蒸煮食材 | Google評分: 4.4⭐",
        locationKey: "jigoku_mushi_kobo",
        googleRating: 4.4,
        coordinates: { lat: 33.3084, lng: 131.4650 }
      },
      {
        time: "15:30",
        type: "sight",
        title: "巨大天狗像 & 商店街",
        detail: "別府地標拍照 | Google評分: 4.0⭐",
        locationKey: "beppu_tengu",
        googleRating: 4.0,
        coordinates: { lat: 33.2821, lng: 131.4916 }
      },
      {
        time: "16:30",
        type: "activity",
        title: "竹瓦溫泉 砂浴體驗",
        detail: "百年溫泉建築 | Google評分: 4.5⭐ | 砂湯體驗",
        locationKey: "takegawara_onsen",
        googleRating: 4.5,
        coordinates: { lat: 33.2794, lng: 131.4894 }
      },
      {
        time: "18:00",
        type: "stay",
        title: "入住：御宿野乃 別府八湯",
        detail: "全館榻榻米溫泉飯店 | Google評分: 4.6⭐",
        locationKey: "yado_nono_beppu",
        googleRating: 4.6,
        coordinates: { lat: 33.2850, lng: 131.4920 }
      }
    ],
    gourmet: [
      {
        name: "Toyotsune (とよ常)",
        type: "天婦羅丼飯",
        tags: ["Google 4.5⭐", "別府第一"],
        desc: "特製醬汁天丼，大排長龍的超人氣名店。",
        locationKey: "toyotsune",
        googleRating: 4.5,
        michelin: false,
        coordinates: { lat: 33.2838, lng: 131.4905 }
      },
      {
        name: "Kotsukotsu An",
        type: "大分鄉土料理",
        tags: ["Google 4.4⭐", "老字號"],
        desc: "琉球丼、團子湯等大分縣傳統美食。",
        locationKey: "kotsukotsu_an",
        googleRating: 4.4,
        michelin: false,
        coordinates: { lat: 33.2856, lng: 131.4898 }
      },
      {
        name: "岡本屋 賣店",
        type: "地獄蒸布丁",
        tags: ["Google 4.6⭐", "必吃甜點"],
        desc: "苦焦糖配上濃郁布丁，明礬大橋絕景。",
        locationKey: "okamotoya",
        googleRating: 4.6,
        michelin: false,
        coordinates: { lat: 33.3095, lng: 131.4660 }
      },
      {
        name: "地獄蒸工房 鐵輪",
        type: "地獄蒸料理",
        tags: ["Google 4.4⭐", "特色體驗"],
        desc: "用溫泉蒸氣蒸煮食材，健康美味。",
        locationKey: "jigoku_mushi_kobo",
        googleRating: 4.4,
        michelin: false,
        coordinates: { lat: 33.3084, lng: 131.4650 }
      }
    ],
    shopping: [
      {
        name: "血池地獄 賣店",
        type: "土產專賣",
        tags: ["血池軟膏", "必買"],
        desc: "百年老藥血池軟膏，針對皮膚問題特效。",
        coordinates: { lat: 33.2947, lng: 131.4783 }
      },
      {
        name: "海地獄 賣店",
        type: "溫泉土產",
        tags: ["溫泉粉", "極樂饅頭"],
        desc: "藍色溫泉粉、極樂饅頭等特色土產。",
        coordinates: { lat: 33.3089, lng: 131.4656 }
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
        detail: "車程約 50-60分鐘 | 山路請小心",
        duration: "60m",
        locationKey: "yufuin_station",
        coordinates: { lat: 33.2661, lng: 131.3669 }
      },
      {
        time: "10:30",
        type: "highlight",
        title: "金鱗湖",
        detail: "晨霧美景 | Google評分: 4.2⭐",
        locationKey: "kinrin_lake",
        googleRating: 4.2,
        coordinates: { lat: 33.2656, lng: 131.3719 }
      },
      {
        time: "11:00",
        type: "shopping",
        title: "湯之坪街道散策",
        detail: "特色小店、伴手禮 | Google評分: 4.4⭐",
        locationKey: "yunohira_street",
        googleRating: 4.4,
        coordinates: { lat: 33.2658, lng: 131.3695 }
      },
      {
        time: "12:30",
        type: "food",
        title: "午餐：由布釜飯「心」",
        detail: "豐後牛釜飯 | Google評分: 4.5⭐",
        locationKey: "yufuin_kokoro",
        googleRating: 4.5,
        coordinates: { lat: 33.2654, lng: 131.3718 }
      },
      {
        time: "14:00",
        type: "drive",
        title: "前往九重森林公園滑雪場",
        detail: "車程約 1小時10分鐘",
        duration: "70m",
        locationKey: "kokonoe_ski",
        googleRating: 4.3,
        coordinates: { lat: 33.1342, lng: 131.2361 }
      },
      {
        time: "15:20",
        type: "activity",
        title: "九重滑雪場玩雪",
        detail: "預計停留 3小時 | Google評分: 4.3⭐",
        locationKey: "kokonoe_ski",
        googleRating: 4.3,
        coordinates: { lat: 33.1342, lng: 131.2361 }
      },
      {
        time: "18:20",
        type: "drive",
        title: "前往筋湯溫泉",
        detail: "車程約 40分鐘",
        duration: "40m",
        locationKey: "sujiyu_onsen",
        coordinates: { lat: 33.1539, lng: 131.2258 }
      }
    ],
    gourmet: [
      {
        name: "由布釜飯「心」",
        type: "豐後牛/地雞釜飯",
        tags: ["Google 4.5⭐", "必吃名店"],
        desc: "金鱗湖本店，三吃法品嚐在地食材美味。",
        locationKey: "yufuin_kokoro",
        googleRating: 4.5,
        michelin: false,
        coordinates: { lat: 33.2654, lng: 131.3718 }
      },
      {
        name: "B-Speak",
        type: "生乳捲",
        tags: ["Google 4.7⭐", "需預約"],
        desc: "由布院最知名蛋糕捲，往往中午前售罄。",
        locationKey: "bspeak",
        googleRating: 4.7,
        michelin: false,
        coordinates: { lat: 33.2660, lng: 131.3685 }
      },
      {
        name: "鞠智 cucuchi",
        type: "銅鑼燒/咖啡",
        tags: ["Google 4.5⭐", "文青風"],
        desc: "嚴選素材的銅鑼燒，包裝精美適合送禮。",
        locationKey: "cucuchi",
        googleRating: 4.5,
        michelin: false,
        coordinates: { lat: 33.2657, lng: 131.3692 }
      },
      {
        name: "金賞可樂餅",
        type: "街頭小吃",
        tags: ["Google 4.4⭐", "金賞受賞"],
        desc: "湯之坪街道必吃，牛肉與起司口味最受歡迎。",
        locationKey: "yunohira_street",
        googleRating: 4.4,
        michelin: false,
        coordinates: { lat: 33.2658, lng: 131.3695 }
      },
      {
        name: "Yufuin Floral Village",
        type: "歐風小鎮/咖啡",
        tags: ["Google 4.2⭐", "打卡景點"],
        desc: "宛如童話世界的歐風小鎮，咖啡館和小店林立。",
        locationKey: "yufuin_floral_village",
        googleRating: 4.2,
        michelin: false,
        coordinates: { lat: 33.2662, lng: 131.3705 }
      }
    ],
    shopping: [
      {
        name: "B-Speak 本店",
        type: "生乳捲專賣",
        tags: ["Google 4.7⭐", "必買"],
        desc: "保存期限短，建議當天享用，需提前預約。",
        coordinates: { lat: 33.2660, lng: 131.3685 }
      },
      {
        name: "由布院醬油屋本店",
        type: "調味料專賣",
        tags: ["Google 4.5⭐", "在地名產"],
        desc: "柚子胡椒醬油、九州限定調味料。",
        coordinates: { lat: 33.2656, lng: 131.3690 }
      },
      {
        name: "湯之坪街道 伴手禮店街",
        type: "特色小店",
        tags: ["Google 4.4⭐", "必逛"],
        desc: "各式特色雜貨、甜點、工藝品應有盡有。",
        coordinates: { lat: 33.2658, lng: 131.3695 }
      }
    ]
  }
];
