// 彥杰 & 文臻 & 馨云馨予 九州之旅 - 完整超強版行程資料
// Based on Sheet2 of Itinerary & Enhanced with Michelin/4.5+ Star Gourmet

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
        title: "午餐：一蘭拉麵 總本店",
        detail: "福岡必訪 | Google評分: 4.2⭐ | 豚骨拉麵發源地",
        locationKey: "ichiran_main",
        googleRating: 4.2,
        coordinates: { lat: 33.5932, lng: 130.4042 }
      },
      {
        time: "14:30",
        type: "shopping",
        title: "博多站周邊 Snow Gear 採購",
        detail: "AMU PLAZA | 購買雪靴、手套、防寒用品",
        locationKey: "amu_plaza",
        googleRating: 4.3,
        coordinates: { lat: 33.5903, lng: 130.4207 }
      },
      {
        time: "16:30",
        type: "highlight",
        title: "teamLab Forest 福岡",
        detail: "E・ZO FUKUOKA | 沉浸式藝術 | Google評分: 4.5⭐",
        locationKey: "teamlab_fukuoka",
        googleRating: 4.5,
        coordinates: { lat: 33.5956, lng: 130.3621 }
      },
      {
        time: "19:00",
        type: "food",
        title: "精選晚餐 (市區)",
        detail: "建議前往中洲屋台或預約米其林名店 (見下方美食推薦)",
        locationKey: "nakasu",
        coordinates: { lat: 33.5930, lng: 130.4070 }
      }
    ],
    gourmet: [
      {
        name: "西村や (Nishimuraya)",
        type: "創意法式拉麵",
        tags: ["米其林一星⭐", "Google 4.2⭐"],
        desc: "打破傳統的法式拉麵體驗，主廚 Nishimura 先生將法餐精髓融入每一碗麵中。",
        locationKey: "nishimuraya",
        googleRating: 4.2,
        michelin: true,
        coordinates: { lat: 33.5865, lng: 130.3995 }
      },
      {
        name: "博多 華味鳥",
        type: "水炊雞鍋",
        tags: ["百年傳統", "Google 4.3⭐"],
        desc: "福岡代表性鄉土料理，濃郁雞白湯，膠原蛋白滿滿。",
        locationKey: "hanamidori",
        googleRating: 4.3,
        michelin: false,
        coordinates: { lat: 33.5945, lng: 130.4050 }
      },
      {
        name: "Sushi Sakai (寿司 さかい)",
        type: "江戶前壽司",
        tags: ["米其林三星⭐⭐⭐", "需預約"],
        desc: "九州頂級壽司殿堂，極致的職人手藝，一生必訪的味覺饗宴。",
        locationKey: "sushi_sakai",
        googleRating: 4.6,
        michelin: true,
        coordinates: { lat: 33.5850, lng: 130.4050 }
      }
    ],
    shopping: [
      {
        name: "AMU PLAZA 博多",
        type: "百貨",
        tags: ["車站直結", "Uniqlo", "Hands"],
        desc: "博多站最大的購物中心，8樓有 Pokémon Center。",
        coordinates: { lat: 33.5903, lng: 130.4207 }
      }
    ]
  },
  {
    id: 2,
    date: "1/22 (三)",
    isoDate: "2025-01-22",
    title: "別府八湯與地獄蒸體驗",
    stay: "別府八湯御宿野乃 (Onyado Nono Beppu)",
    location: "Beppu",
    mapCenter: { lat: 33.3000, lng: 131.5000 },
    activities: [
      {
        time: "09:00",
        type: "transport",
        title: "步行至租車點",
        detail: "前往 Budget 博多筑紫口店 (步行約5分)",
        locationKey: "budget_hakata",
        coordinates: { lat: 33.5885, lng: 130.4255 }
      },
      {
        time: "09:30",
        type: "drive",
        title: "取車出發 → 別府",
        detail: "車程約 1hr 45mins | 九州自動車道",
        duration: "105m",
        locationKey: "beppu_city",
        coordinates: { lat: 33.2844, lng: 131.4909 }
      },
      {
        time: "11:30",
        type: "highlight",
        title: "別府地獄巡禮",
        detail: "海地獄、鬼石坊主地獄 | Google評分: 4.3⭐",
        locationKey: "umi_jigoku",
        googleRating: 4.3,
        coordinates: { lat: 33.3150, lng: 131.4680 }
      },
      {
        time: "13:00",
        type: "food",
        title: "午餐：地獄蒸工房 鐵輪",
        detail: "體驗自己動手蒸食 | Google評分: 4.4⭐",
        locationKey: "jigokumushi",
        googleRating: 4.4,
        coordinates: { lat: 33.3155, lng: 131.4688 }
      },
      {
        time: "15:00",
        type: "stay",
        title: "御宿野乃 Check-in",
        detail: "別府站前，全館榻榻米及露天溫泉",
        locationKey: "nono_beppu",
        googleRating: 4.6,
        coordinates: { lat: 33.2850, lng: 131.4920 }
      },
      {
        time: "16:00",
        type: "sight",
        title: "巨大天狗像 & 商店街",
        detail: "彌生天狗通散策 (走路4分) | 必拍地標",
        locationKey: "beppu_tengu",
        googleRating: 4.0,
        coordinates: { lat: 33.2821, lng: 131.4916 }
      },
      {
        time: "16:30",
        type: "activity",
        title: "竹瓦溫泉 砂浴體驗",
        detail: "建於1879年百年建築 | Google評分: 4.4⭐ | 唐破風造豪華外觀",
        locationKey: "takegawara",
        googleRating: 4.4,
        coordinates: { lat: 33.2794, lng: 131.4894 }
      },
      {
        time: "18:30",
        type: "food",
        title: "別府晚餐 (見推薦)",
        detail: "餃子香月 / 東洋軒 / 海鮮居酒屋",
        locationKey: "beppu_dinner",
        coordinates: { lat: 33.2821, lng: 131.4916 }
      }
    ],
    gourmet: [
      {
        name: "餃子 香月 (Kogetsu)",
        type: "鐵鍋餃子",
        tags: ["隱藏名店", "1940年代開業"],
        desc: "位於巷弄中的傳奇老店，皮薄餡多，別府在地人的靈魂美食。皮薄酥脆，非常適合搭配啤酒！",
        locationKey: "kogetsu_gyoza",
        googleRating: 4.3,
        michelin: false,
        coordinates: { lat: 33.2785, lng: 131.4890 }
      },
      {
        name: "東洋軒 (Toyoken)",
        type: "大分雞肉天婦羅",
        tags: ["Toriten發源店", "百年老舖"],
        desc: "創業於大正15年(1926年)，是大分名物「雞肉天婦羅」的發源地。外酥內嫩，必吃！",
        locationKey: "toyoken",
        googleRating: 4.3,
        michelin: false,
        coordinates: { lat: 33.3035, lng: 131.4920 }
      },
      {
        name: "Hyotan Onsen - Yurari",
        type: "地獄蒸料理",
        tags: ["米其林三星溫泉", "Google 4.5⭐"],
        desc: "唯一獲得米其林三星的溫泉設施，附設餐廳「Yurari」提供精緻地獄蒸料理與大分鄉土餐。",
        locationKey: "hyotan_onsen",
        googleRating: 4.5,
        michelin: true,
        coordinates: { lat: 33.3175, lng: 131.4690 }
      },
      {
        name: "Toyotsune (とよ常) 本店",
        type: "特上天丼",
        tags: ["Google 4.4⭐", "排隊名店"],
        desc: "別府最著名的天丼老店，大蝦天婦羅滿到濱臨倒塌，醬汁一絕。",
        locationKey: "toyotsune",
        googleRating: 4.4,
        michelin: false,
        coordinates: { lat: 33.2838, lng: 131.4905 }
      }
    ],
    shopping: [
      {
        name: "血池地獄專賣店",
        type: "土產",
        tags: ["血池軟膏", "限定"],
        desc: "著名的「血池軟膏」，對皮膚乾燥龜裂有奇效，復古包裝非常適合作為伴手禮。",
        coordinates: { lat: 33.3150, lng: 131.4680 } // Approx
      },
      {
        name: "海地獄 商店",
        type: "土產",
        tags: ["藍色溫泉粉", "極樂饅頭"],
        desc: "必買漂亮的藍色溫泉粉，回家也能享受別府溫泉。",
        coordinates: { lat: 33.3150, lng: 131.4680 }
      }
    ]
  },
  {
    id: 3,
    date: "1/23 (四)",
    isoDate: "2025-01-23",
    title: "夢幻金鱗湖與九重滑雪",
    stay: "旅館 Nanakamado (筋湯溫泉)",
    location: "Yufuin / Kokonoe",
    mapCenter: { lat: 33.2656, lng: 131.3695 },
    activities: [
      {
        time: "09:00",
        type: "drive",
        title: "前往由布院",
        detail: "御宿野乃出發 → 由布院 (約39分鐘)",
        duration: "39m",
        locationKey: "yufuin",
        coordinates: { lat: 33.2656, lng: 131.3695 }
      },
      {
        time: "10:00",
        type: "highlight",
        title: "金鱗湖 & 湯之坪",
        detail: "晨霧名勝 | 湯布院花卉村 (Floral Village)",
        locationKey: "kinrin",
        googleRating: 4.2,
        coordinates: { lat: 33.2656, lng: 131.3719 }
      },
      {
        time: "12:00",
        type: "food",
        title: "午餐：由布釜飯 心",
        detail: "豊後牛三吃 | Google評分: 4.4⭐",
        locationKey: "kokoro",
        googleRating: 4.4,
        coordinates: { lat: 33.2654, lng: 131.3718 }
      },
      {
        time: "13:30",
        type: "drive",
        title: "前往九重夢大吊橋",
        detail: "車程約 45分鐘 | 日本第一高人行吊橋",
        duration: "45m",
        locationKey: "yume_bridge",
        googleRating: 4.3,
        coordinates: { lat: 33.1736, lng: 131.2285 }
      },
      {
        time: "15:00",
        type: "highlight",
        title: "タデ原濕原 & 牧之戶峠",
        detail: "賞雪勝地/玩雪 (停留約1.5小時)",
        locationKey: "makinoto",
        googleRating: 4.4,
        coordinates: { lat: 33.0950, lng: 131.2500 } // Approx for Makinoto
      },
      {
        time: "17:30",
        type: "stay",
        title: "入住：Nanakamado",
        detail: "筋湯溫泉 (開車約9分鐘) | 飯店內享用晚餐",
        locationKey: "nanakamado",
        googleRating: 4.5,
        coordinates: { lat: 33.1539, lng: 131.2258 }
      }
    ],
    gourmet: [
      {
        name: "由布釜飯 心 (金鱗湖店)",
        type: "釜飯",
        tags: ["Google 4.4⭐", "排隊名店"],
        desc: "必點「豊後牛釜飯」，第一碗吃原味，第二碗加佐料，第三碗茶泡飯，層次豐富。",
        locationKey: "kokoro",
        googleRating: 4.4,
        michelin: false,
        coordinates: { lat: 33.2654, lng: 131.3718 }
      },
      {
        name: "B-Speak",
        type: "P-Roll 蛋糕捲",
        tags: ["甜點名店", "秒殺美食"],
        desc: "由布院御三家之山莊無量塔經營，口感蓬鬆，蛋香濃郁。建議一早先去預約。",
        locationKey: "bspeak",
        googleRating: 4.3,
        michelin: false,
        coordinates: { lat: 33.2660, lng: 131.3685 }
      },
      {
        name: "Snoopy Cha-ya (Snoopy茶屋)",
        type: "主題咖啡",
        tags: ["必去打卡", "可愛風"],
        desc: "全球第一間Snoopy茶屋，將史努比結合日式和風元素，餐點超級可愛！",
        locationKey: "snoopy_chaya",
        googleRating: 4.1,
        michelin: false,
        coordinates: { lat: 33.2658, lng: 131.3695 }
      }
    ],
    shopping: [
      {
        name: "Yufuin Floral Village",
        type: "商店街",
        tags: ["童話名店", "必逛"],
        desc: "仿照英國科茨沃爾德地區打造的童話小鎮，有貓頭鷹之森、愛麗絲專賣店。",
        coordinates: { lat: 33.2662, lng: 131.3705 }
      }
    ]
  },
  {
    id: 4,
    date: "1/24 (五)",
    isoDate: "2025-01-24",
    title: "阿蘇壯麗絕景與神社巡禮",
    stay: "Grandvrio Hotel Aso (阿蘇格蘭德里奧)",
    location: "Aso",
    mapCenter: { lat: 33.1500, lng: 131.1000 },
    activities: [
      {
        time: "10:00",
        type: "transport",
        title: "飯店出發 → 鍋瀑布",
        detail: "退房後開車 40mins (需預約 11:00 入場)",
        duration: "40m",
        locationKey: "nabegataki",
        googleRating: 4.5,
        coordinates: { lat: 33.1360, lng: 131.0250 }
      },
      {
        time: "12:00",
        type: "highlight",
        title: "大觀峰",
        detail: "阿蘇五岳絕景 (30mins) | Google評分: 4.6⭐",
        locationKey: "daikanbo",
        googleRating: 4.6,
        coordinates: { lat: 33.0560, lng: 131.0770 }
      },
      {
        time: "13:30",
        type: "food",
        title: "午餐：阿蘇赤牛料理",
        detail: "前往阿蘇神社周邊 (Imakin / Hana-Bishi)",
        locationKey: "aso_lunch",
        coordinates: { lat: 32.9475, lng: 131.1160 }
      },
      {
        time: "15:00",
        type: "highlight",
        title: "阿蘇神社 & 商店街",
        detail: "2500年歷史古社 | 參拜後前往飯店",
        locationKey: "aso_shrine",
        googleRating: 4.4,
        coordinates: { lat: 32.9479, lng: 131.1165 }
      },
      {
        time: "16:30",
        type: "stay",
        title: "入住：Grandvrio Aso",
        detail: "附設高爾夫球場與溫泉 | 22分鐘車程",
        locationKey: "grandvrio",
        googleRating: 4.1,
        coordinates: { lat: 32.9230, lng: 130.9850 } // Approx
      }
    ],
    gourmet: [
      {
        name: "Imakin Shokudo (いまきん食堂)",
        type: "赤牛丼",
        tags: ["百年老店", "Google 4.3⭐", "必吃"],
        desc: "阿蘇最傳奇的百年老食堂，必點「赤牛丼(Akaushi Don)」，半熟的褐毛和牛鋪滿整碗，極度美味。請做好排隊心理準備。",
        locationKey: "imakin",
        googleRating: 4.3,
        michelin: false,
        coordinates: { lat: 32.9665, lng: 131.0690 }
      },
      {
        name: "Hana-Bishi (はなびし)",
        type: "赤牛牛排重",
        tags: ["阿蘇神社旁", "Google 4.2⭐"],
        desc: "位於阿蘇神社參道，赤牛牛排重和炸牛排定食非常有名，是參拜後的絕佳午餐選擇。",
        locationKey: "hanabishi",
        googleRating: 4.2,
        michelin: false,
        coordinates: { lat: 32.9475, lng: 131.1160 }
      },
      {
        name: "Aso Torimiya (阿蘇とり宮)",
        type: "馬肉可樂餅",
        tags: ["邊走邊吃", "在地名物"],
        desc: "位於阿蘇神社門前町，必吃現炸「馬肉可樂餅」，酥脆多汁。",
        locationKey: "torimiya",
        googleRating: 4.3,
        michelin: false,
        coordinates: { lat: 32.9477, lng: 131.1162 }
      }
    ],
    shopping: [
      {
        name: "阿蘇神社 門前町",
        type: "商店街",
        tags: ["水基巡禮", "特色小店"],
        desc: "湧泉處處的古老街道，可以一邊喝著甘甜的泉水，一邊逛逛懷舊的雜貨店。",
        coordinates: { lat: 32.9475, lng: 131.1160 }
      }
    ]
  },
  {
    id: 5,
    date: "1/25 (六)",
    isoDate: "2025-01-25",
    title: "阿蘇神話與秘境探險",
    stay: "Grandvrio Hotel Aso (連泊)",
    location: "Aso",
    mapCenter: { lat: 32.8845, lng: 131.0500 },
    activities: [
      {
        time: "09:00",
        type: "highlight",
        title: "草千里之濱 & 阿蘇火山",
        detail: "直升機火山口見學 | 觀景台玩雪 | 銀白草原絕景",
        locationKey: "kusasenri",
        googleRating: 4.5,
        coordinates: { lat: 32.885150, lng: 131.050600 },
        mapUrl: "https://www.google.com/maps/search/Kusasenri+Parking"
      },
      {
        time: "10:30",
        type: "food",
        title: "草千里咖啡焙煎所",
        detail: "【IG爆紅】2021新開幕 | 手沖咖啡配雪景 | 文青必去",
        locationKey: "kusasenri_coffee",
        googleRating: 4.5,
        coordinates: { lat: 32.884210, lng: 131.054450 },
        mapUrl: "https://www.google.com/maps/search/Kusasenri+Coffee+Roastery"
      },
      {
        time: "12:00",
        type: "food",
        title: "午餐 (二選一)",
        detail: "New Kusasenri 景觀餐廳 或 高森田樂保存會 (百年老店)",
        locationKey: "lunch_choice",
        coordinates: { lat: 32.884100, lng: 131.054800 }
      },
      {
        time: "13:30",
        type: "highlight",
        title: "南阿蘇鐵道 高森站",
        detail: "【海賊王朝聖】法蘭基銅像 | 昭和復古車站 | 順路必停",
        locationKey: "takamori_station",
        googleRating: 4.8,
        coordinates: { lat: 32.819750, lng: 131.122680 },
        mapUrl: "https://www.google.com/maps/search/Takamori+Station+Kumamoto"
      },
      {
        time: "14:10",
        type: "highlight",
        title: "上色見熊野座神社",
        detail: "【螢火之森取景地】神秘石燈籠參道 | 穿戶岩能量景點 | 冬季積雪超夢幻",
        locationKey: "kamishikimi",
        googleRating: 4.7,
        coordinates: { lat: 32.840780, lng: 131.164800 },
        mapUrl: "https://www.google.com/maps/search/Kamishikimi+Kumanoza+Shrine+Parking"
      },
      {
        time: "16:00",
        type: "highlight",
        title: "白川水源",
        detail: "【名水百選】每分鐘湧出60噸 | 藍色湧泉 | 可裝水帶走",
        locationKey: "shirakawa",
        googleRating: 4.4,
        coordinates: { lat: 32.822950, lng: 131.082720 },
        mapUrl: "https://www.google.com/maps/search/Shirakawa+Source"
      },
      {
        time: "16:30",
        type: "food",
        title: "吉村 生Ikinari糰子",
        detail: "【熊本名物】水源入口小店 | 熱騰騰地瓜紅豆糰子",
        locationKey: "yoshimura_dango",
        googleRating: 4.5,
        coordinates: { lat: 32.822600, lng: 131.082500 },
        mapUrl: "https://www.google.com/maps/search/Shirakawa+Suigen+Yoshimura"
      },
      {
        time: "18:00",
        type: "food",
        title: "晚餐：阿蘇料理 Hikoichi",
        detail: "【在地人推薦】自家農場阿蘇赤牛 | 馬刺身 | 高CP值",
        locationKey: "hikoichi",
        googleRating: 4.5,
        coordinates: { lat: 32.937660, lng: 131.119750 },
        mapUrl: "https://www.google.com/maps/search/Aso+Ryori+Hikoichi"
      }
    ],
    gourmet: [
      {
        name: "草千里咖啡焙煎所",
        type: "景觀咖啡廳",
        tags: ["IG爆紅", "2021新開幕", "文青必去"],
        desc: "阿蘇最時尚的景觀咖啡廳，透過巨大玻璃窗欣賞草千里雪景，手沖咖啡香氣十足。",
        locationKey: "kusasenri_coffee",
        googleRating: 4.5,
        michelin: false,
        coordinates: { lat: 32.884210, lng: 131.054450 },
        mapUrl: "https://www.google.com/maps/search/Kusasenri+Coffee+Roastery"
      },
      {
        name: "New Kusasenri (ニュー草千里)",
        type: "景觀餐廳",
        tags: ["絕景第一排", "赤牛丼"],
        desc: "草千里絕景第一排，整片落地窗眺望阿蘇中岳噴煙，推薦赤牛丼。",
        locationKey: "new_kusasenri",
        googleRating: 4.0,
        michelin: false,
        coordinates: { lat: 32.884100, lng: 131.054800 },
        mapUrl: "https://www.google.com/maps/search/New+Kusasenri"
      },
      {
        name: "高森田樂保存會",
        type: "百年鄉土料理",
        tags: ["130年茅草屋", "圍爐裏炭火", "強烈推薦"],
        desc: "【強烈推薦】130年歷史茅草屋老店，圍著地爐享用烤味噌豆腐、山女魚與阿蘇赤牛，極致文化體驗。",
        locationKey: "takamori_dengaku",
        googleRating: 4.6,
        michelin: false,
        coordinates: { lat: 32.825220, lng: 131.144180 },
        mapUrl: "https://www.google.com/maps/search/Takamori+Dengaku+Hozonkai"
      },
      {
        name: "阿蘇料理 Hikoichi",
        type: "阿蘇赤牛燒肉",
        tags: ["自家農場直送", "馬刺身", "在地人推薦"],
        desc: "自家農場生產的阿蘇赤牛燒肉與定食，還有熊本名物馬刺身，在地人極推的高CP值名店。",
        locationKey: "hikoichi",
        googleRating: 4.5,
        michelin: false,
        coordinates: { lat: 32.937660, lng: 131.119750 },
        mapUrl: "https://www.google.com/maps/search/Aso+Ryori+Hikoichi"
      },
      {
        name: "吉村 生Ikinari糰子",
        type: "熊本甜點",
        tags: ["熊本名物", "地瓜紅豆", "白川水源入口"],
        desc: "白川水源入口處的小店，販售熊本名物「Ikinari Dango」，熱騰騰的地瓜紅豆糰子非常好吃。",
        locationKey: "yoshimura_dango",
        googleRating: 4.5,
        michelin: false,
        coordinates: { lat: 32.822600, lng: 131.082500 },
        mapUrl: "https://www.google.com/maps/search/Shirakawa+Suigen+Yoshimura"
      },
      {
        name: "水源茶屋 (Suigen Chaya)",
        type: "名水料理",
        tags: ["白川水源內", "名水豆腐"],
        desc: "使用白川水源的名水製作料理，豆腐清甜，也有糰子和咖啡。",
        locationKey: "suigen_chaya",
        googleRating: 4.2,
        michelin: false,
        coordinates: { lat: 32.822950, lng: 131.082720 }
      }
    ],
    shopping: [
      {
        name: "白川水源",
        type: "名水體驗",
        tags: ["名水百選", "可裝水"],
        desc: "每分鐘湧出60噸泉水，可自由裝取（建議帶空寶特瓶），水質甘甜可生飲。",
        coordinates: { lat: 32.822950, lng: 131.082720 },
        mapUrl: "https://www.google.com/maps/search/Shirakawa+Source"
      },
      {
        name: "南阿蘇鐵道 高森站",
        type: "海賊王朝聖",
        tags: ["法蘭基銅像", "昭和復古"],
        desc: "海賊王熊本復興計畫的一環，與法蘭基銅像合照，車站本身也很有昭和風情。",
        coordinates: { lat: 32.819750, lng: 131.122680 },
        mapUrl: "https://www.google.com/maps/search/Takamori+Station+Kumamoto"
      }
    ]
  },
  {
    id: 6,
    date: "1/26 (日)",
    isoDate: "2025-01-26",
    title: "返回福岡與天神之夜",
    stay: "MYSTAYS 福岡天神 (MYSTAYS Fukuoka Tenjin)",
    location: "Fukuoka",
    mapCenter: { lat: 33.5910, lng: 130.3980 },
    activities: [
      {
        time: "09:00",
        type: "highlight",
        title: "大觀峰 絕景展望",
        detail: "阿蘇最具代表性展望台 | 360度眺望阿蘇五岳 | 釋迦涅槃像絕景",
        locationKey: "daikanbo",
        googleRating: 4.6,
        coordinates: { lat: 32.996728, lng: 131.066974 },
        mapUrl: "https://www.google.com/maps/search/Daikanbo+Lookout"
      },
      {
        time: "10:30",
        type: "food",
        title: "阿蘇 Imakin 食堂",
        detail: "【百年名店】赤牛丼創始店 | 1910年創業 | 務必先登記候位",
        locationKey: "imakin",
        googleRating: 4.3,
        coordinates: { lat: 32.974950, lng: 131.039310 },
        mapUrl: "https://www.google.com/maps/search/Imakin+Shokudo"
      },
      {
        time: "11:30",
        type: "highlight",
        title: "阿蘇神社 參拜",
        detail: "2500年歷史古社 | 神之泉名水 | 門前町散策",
        locationKey: "aso_shrine",
        googleRating: 4.4,
        coordinates: { lat: 32.947930, lng: 131.123510 },
        mapUrl: "https://www.google.com/maps/search/Aso+Shrine"
      },
      {
        time: "12:30",
        type: "drive",
        title: "開車返回福岡",
        detail: "高速公路約3小時 | 途中停靠南藏院 & 山田SA",
        duration: "180m",
        locationKey: "highway",
        coordinates: { lat: 33.3000, lng: 130.7000 }
      },
      {
        time: "14:30",
        type: "highlight",
        title: "南藏院 (世界最大臥佛)",
        detail: "【必看】全球最大青銅臥佛 (長41m) | 福岡最強能量景點 | 住持中1.3億彩券傳說",
        locationKey: "nanzoin",
        googleRating: 4.7,
        coordinates: { lat: 33.619839, lng: 130.572935 },
        mapUrl: "https://www.google.com/maps/search/Nanzoin+Temple"
      },
      {
        time: "15:30",
        type: "transport",
        title: "山田服務區 休息",
        detail: "必買「朝倉蛋糕捲」與「八女茶」甜點",
        locationKey: "yamada_sa",
        coordinates: { lat: 33.385310, lng: 130.764580 },
        mapUrl: "https://www.google.com/maps/search/Yamada+Service+Area"
      },
      {
        time: "17:30",
        type: "transport",
        title: "還車：Budget 筑紫口",
        detail: "還車後搭計程車/Uber至飯店",
        locationKey: "budget_return",
        coordinates: { lat: 33.590820, lng: 130.424350 },
        mapUrl: "https://www.google.com/maps/search/Budget+Rent+a+Car+Hakata"
      },
      {
        time: "18:00",
        type: "highlight",
        title: "Acros 福岡 (天神之森)",
        detail: "階梯狀綠建築 | 都市中的綠洲 | 可沿步道走上去",
        locationKey: "acros_fukuoka",
        googleRating: 4.4,
        coordinates: { lat: 33.591900, lng: 130.402200 },
        mapUrl: "https://www.google.com/maps/search/ACROS+Fukuoka"
      },
      {
        time: "18:30",
        type: "stay",
        title: "MYSTAYS 天神 Check-in",
        detail: "位於天神親富孝通 | 交通便利的高CP值飯店",
        locationKey: "mystays_tenjin",
        googleRating: 4.1,
        coordinates: { lat: 33.592530, lng: 130.396550 },
        mapUrl: "https://www.google.com/maps/search/Hotel+MYSTAYS+Fukuoka+Tenjin"
      },
      {
        time: "19:00",
        type: "food",
        title: "鈴懸 本店 (百年和菓子)",
        detail: "創業90年和菓子名店 | 鈴乃最中 | 草莓大福 | 附設茶房",
        locationKey: "suzukake",
        googleRating: 4.5,
        coordinates: { lat: 33.595462, lng: 130.408226 },
        mapUrl: "https://www.google.com/maps/search/Suzukake+Main+Shop"
      },
      {
        time: "19:30",
        type: "food",
        title: "天神晚餐 (四選一)",
        detail: "吉塚鰻魚屋 / 米其林懷石 / 人氣屋台 / Bar Oscar",
        locationKey: "tenjin_dinner",
        coordinates: { lat: 33.5910, lng: 130.3980 }
      }
    ],
    gourmet: [
      {
        name: "阿蘇 Imakin 食堂",
        type: "阿蘇赤牛丼",
        tags: ["百年名店", "1910年創業", "排隊美食"],
        desc: "阿蘇赤牛丼創始店，鋪滿半熟溫泉蛋與赤牛切片，視覺與味覺雙重享受。務必先登記候位。",
        locationKey: "imakin",
        googleRating: 4.3,
        michelin: false,
        coordinates: { lat: 32.974950, lng: 131.039310 },
        mapUrl: "https://www.google.com/maps/search/Imakin+Shokudo"
      },
      {
        name: "博多名代 吉塚鰻魚屋",
        type: "鰻魚飯",
        tags: ["150年歷史", "福岡鰻魚飯頂點", "外酥內嫩"],
        desc: "創業150年的福岡鰻魚飯名店，獨特烤法外酥內嫩，是福岡必吃的傳奇美食。",
        locationKey: "yoshizuka_unagi",
        googleRating: 4.4,
        michelin: false,
        coordinates: { lat: 33.592180, lng: 130.408420 },
        mapUrl: "https://www.google.com/maps/search/Yoshizuka+Unagiya"
      },
      {
        name: "Shirokane Nishida (白金 にし田)",
        type: "精緻懷石",
        tags: ["米其林一星⭐", "完全預約制", "頂級"],
        desc: "展現季節之美的日本料理，主廚手藝精湛，高湯濃郁優雅，是福岡極致的味覺體驗。",
        locationKey: "shirokane_nishida",
        googleRating: 4.7,
        michelin: true,
        coordinates: { lat: 33.589000, lng: 130.406000 },
        mapUrl: "https://www.google.com/maps/search/Shirokane+Nishida"
      },
      {
        name: "茶懐石 中伴 (Chakaiseki Nakahan)",
        type: "茶懷石",
        tags: ["米其林推薦", "西中洲隱密名店"],
        desc: "西中洲的隱密名店，正統茶懷石，氛圍寧靜高雅，適合重要的晚餐時刻。",
        locationKey: "nakahan",
        googleRating: 4.5,
        michelin: true,
        coordinates: { lat: 33.591000, lng: 130.405000 },
        mapUrl: "https://www.google.com/maps/search/Chakaiseki+Nakahan"
      },
      {
        name: "屋台 Mami-chan",
        type: "屋台美食",
        tags: ["4.5星人氣", "親切美味", "不擠人"],
        desc: "天神人氣屋台，氣氛溫馨親切，不想去中洲人擠人的最佳選擇。",
        locationKey: "yatai_mamichan",
        googleRating: 4.5,
        michelin: false,
        coordinates: { lat: 33.589800, lng: 130.399500 },
        mapUrl: "https://www.google.com/maps/search/Yatai+Mamichan"
      },
      {
        name: "Bar Oscar",
        type: "調酒酒吧",
        tags: ["世界調酒冠軍", "大名區", "正統酒吧"],
        desc: "想要小酌一杯，這裡是福岡調酒界的聖地，世界冠軍調酒師坐鎮。",
        locationKey: "bar_oscar",
        googleRating: 4.6,
        michelin: false,
        coordinates: { lat: 33.587500, lng: 130.396000 },
        mapUrl: "https://www.google.com/maps/search/Bar+Oscar+Fukuoka"
      },
      {
        name: "鈴懸 本店",
        type: "百年和菓子",
        tags: ["創業90年", "鈴乃最中", "草莓大福"],
        desc: "福岡頂級和菓子名店，店內氛圍優雅，附設茶房可享用精緻甜點。",
        locationKey: "suzukake",
        googleRating: 4.5,
        michelin: false,
        coordinates: { lat: 33.595462, lng: 130.408226 },
        mapUrl: "https://www.google.com/maps/search/Suzukake+Main+Shop"
      }
    ],
    shopping: [
      {
        name: "阿蘇神社 門前町",
        type: "商店街",
        tags: ["特色小店", "土產"],
        desc: "阿蘇神社參道上的特色商店街，可購買當地土產。",
        coordinates: { lat: 32.947930, lng: 131.123510 },
        mapUrl: "https://www.google.com/maps/search/Aso+Shrine"
      },
      {
        name: "山田服務區",
        type: "高速公路休息站",
        tags: ["朝倉蛋糕捲", "八女茶"],
        desc: "高速公路必停休息站，推薦購買朝倉蛋糕捲與八女茶甜點。",
        coordinates: { lat: 33.385310, lng: 130.764580 },
        mapUrl: "https://www.google.com/maps/search/Yamada+Service+Area"
      },
      {
        name: "Acros 福岡",
        type: "綠建築景點",
        tags: ["天神之森", "階梯步道"],
        desc: "階梯狀綠建築，外觀種滿樹木如都市中的山，可沿步道走上去眺望天神。",
        coordinates: { lat: 33.591900, lng: 130.402200 },
        mapUrl: "https://www.google.com/maps/search/ACROS+Fukuoka"
      }
    ]
  },
  {
    id: 7,
    date: "1/27 (一)",
    isoDate: "2025-01-27",
    title: "鋼彈與博多傳統文化",
    stay: "MYSTAYS 福岡天神 (連泊)",
    location: "Fukuoka",
    mapCenter: { lat: 33.5890, lng: 130.4200 },
    activities: [
      {
        time: "10:00",
        type: "highlight",
        title: "櫛田神社 & 川端通商店街",
        detail: "博多總鎮守 | 觀賞巨大裝飾山笠 | 百年甜點巡禮",
        locationKey: "kushida",
        googleRating: 4.4,
        coordinates: { lat: 33.593026, lng: 130.410744 },
        mapUrl: "https://www.google.com/maps/place/%E6%AB%9B%E7%94%B0%E7%A5%9E%E7%A4%BE/"
      },
      {
        time: "11:30",
        type: "shopping",
        title: "Lalaport 福岡",
        detail: "1:1 RX-93ff ν鋼彈立像 | 購物午餐 | GUNDAM SIDE-F",
        locationKey: "lalaport",
        googleRating: 4.4,
        coordinates: { lat: 33.564491, lng: 130.441434 },
        mapUrl: "https://www.google.com/maps/place/%E4%B8%89%E4%BA%95%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%83%91%E3%83%BC%E3%82%AF+%E3%82%89%E3%82%89%E3%81%BD%E3%83%BC%E3%81%A8%E7%A6%8F%E5%B2%A1/"
      },
      {
        time: "16:00",
        type: "shopping",
        title: "天神地下街 & 商圈",
        detail: "九州最大地下街 (600米) | 歐風設計 | RINGO蘋果派 | BAKE起司塔",
        locationKey: "tenjin_chikagai",
        googleRating: 4.3,
        coordinates: { lat: 33.590050, lng: 130.399630 },
        mapUrl: "https://www.google.com/maps/place/%E5%A4%A9%E7%A5%9E%E5%9C%B0%E4%B8%8B%E8%A1%97/"
      },
      {
        time: "19:00",
        type: "food",
        title: "慶功宴晚餐",
        detail: "米其林牛腸鍋 或 頂級A5和牛燒肉 (三選一)",
        locationKey: "final_dinner",
        coordinates: { lat: 33.587825, lng: 130.392341 }
      }
    ],
    gourmet: [
      {
        name: "博多牛腸鍋 山中 赤坂店",
        type: "牛腸鍋",
        tags: ["米其林推薦", "裝潢氣派"],
        desc: "米其林推薦，味噌口味一絕，氣派裝潢適合慶功宴。",
        locationKey: "yamanaka_motsunabe",
        googleRating: 4.3,
        michelin: true,
        coordinates: { lat: 33.587825, lng: 130.392341 },
        mapUrl: "https://www.google.com/maps/place/%E5%8D%9A%E5%A4%9A%E3%82%82%E3%81%A4%E9%8D%8B+%E3%82%84%E3%81%BE%E4%B8%AD+%E8%B5%A4%E5%9D%82%E5%BA%97/"
      },
      {
        name: "燒肉 須藤 春吉",
        type: "頂級燒肉",
        tags: ["專人代烤", "A5和牛", "需預約"],
        desc: "頂級專人代烤服務，嚴選A5和牛，極致燒肉體驗。",
        locationKey: "sudo_yakiniku",
        googleRating: 4.5,
        michelin: false,
        coordinates: { lat: 33.588880, lng: 130.405360 },
        mapUrl: "https://www.google.com/maps/place/%E7%84%BC%E8%82%89+%E3%81%99%E3%81%A9%E3%81%86+%E6%98%A5%E5%90%89/"
      },
      {
        name: "博多燒肉 NIKUICHI 藥院店",
        type: "黑毛和牛燒肉",
        tags: ["高CP值", "在地人氣"],
        desc: "高CP值黑毛和牛，在地人氣店，不需預約也能享用好肉。",
        locationKey: "nikuichi",
        googleRating: 4.4,
        michelin: false,
        coordinates: { lat: 33.581530, lng: 130.402480 },
        mapUrl: "https://www.google.com/maps/place/%E5%8D%9A%E5%A4%9A%E7%84%BC%E8%82%89+NIKUICHI+%E8%96%AC%E9%99%A2%E5%BA%97/"
      },
      {
        name: "石村萬世堂 本店",
        type: "百年甜點",
        tags: ["明治38年創立", "白色情人節發源地"],
        desc: "必吃「鶴乃子」，白色情人節發源地，百年傳統和菓子。",
        locationKey: "ishimura_manseido",
        googleRating: 4.2,
        michelin: false,
        coordinates: { lat: 33.595462, lng: 130.408226 },
        mapUrl: "https://www.google.com/maps/place/%E7%9F%B3%E6%9D%91%E8%90%AC%E7%9B%9B%E5%A0%82+%E6%9C%AC%E5%BA%97/"
      },
      {
        name: "櫛田茶屋",
        type: "烤麻糬",
        tags: ["神社旁", "現烤"],
        desc: "位於櫛田神社旁，必吃剛烤好的「焼き餅」(烤麻糬)。",
        locationKey: "kushida_chaya",
        googleRating: 4.3,
        michelin: false,
        coordinates: { lat: 33.592881, lng: 130.410515 },
        mapUrl: "https://www.google.com/maps/place/%E6%AB%9B%E7%94%B0%E8%8C%B6%E5%B1%8B/"
      },
      {
        name: "炸豬排 知青 (Lalaport)",
        type: "炸豬排",
        tags: ["Google 4.5⭐", "低溫熟成"],
        desc: "Grand Dining 3F，低溫熟成豬肉，高CP值美味午餐選擇。",
        locationKey: "tonkatsu_chisei",
        googleRating: 4.5,
        michelin: false,
        coordinates: { lat: 33.564491, lng: 130.441434 }
      },
      {
        name: "久留米拉麵 清陽軒 (Lalaport)",
        type: "久留米拉麵",
        tags: ["昭和27年創業", "老店"],
        desc: "Grand Dining 3F，昭和27年創業的久留米拉麵老店。",
        locationKey: "seiyoken",
        googleRating: 4.3,
        michelin: false,
        coordinates: { lat: 33.564491, lng: 130.441434 },
        mapUrl: "https://www.google.com/maps/place/%E4%B9%85%E7%95%99%E7%B1%B3%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E6%B8%85%E9%99%BD%E8%BB%92+%E3%82%89%E3%82%89%E3%81%BD%E3%83%BC%E3%81%A8%E7%A6%8F%E5%B2%A1%E5%BA%97/"
      }
    ],
    shopping: [
      {
        name: "Lalaport 福岡",
        type: "購物中心",
        tags: ["鋼彈Park", "KidZania", "GUNDAM SIDE-F"],
        desc: "1:1 ν鋼彈立像，4F有限定模型與博多聯名點心。",
        coordinates: { lat: 33.564491, lng: 130.441434 },
        mapUrl: "https://www.google.com/maps/place/%E4%B8%89%E4%BA%95%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%83%91%E3%83%BC%E3%82%AF+%E3%82%89%E3%82%89%E3%81%BD%E3%83%BC%E3%81%A8%E7%A6%8F%E5%B2%A1/"
      },
      {
        name: "天神地下街",
        type: "地下商店街",
        tags: ["600米長", "歐風設計"],
        desc: "九州最大地下街，歐風設計，必逛 RINGO 蘋果派、BAKE 起司塔。",
        coordinates: { lat: 33.590050, lng: 130.399630 },
        mapUrl: "https://www.google.com/maps/place/%E5%A4%A9%E7%A5%9E%E5%9C%B0%E4%B8%8B%E8%A1%97/"
      },
      {
        name: "川端善哉廣場",
        type: "景點",
        tags: ["飾山笠展示", "必逛"],
        desc: "商店街內展示巨大飾山笠的廣場，博多祭典文化體驗。",
        coordinates: { lat: 33.593582, lng: 130.409385 },
        mapUrl: "https://www.google.com/maps/place/%E5%B7%9D%E7%AB%AF%E3%81%9C%E3%82%93%E3%81%96%E3%81%84%E5%BA%83%E5%A0%B4/"
      },
      {
        name: "GUNDAM SIDE-F",
        type: "鋼彈專賣店",
        tags: ["限定模型", "博多聯名"],
        desc: "Lalaport 4F，販售限定模型與博多聯名點心伴手禮。",
        coordinates: { lat: 33.564491, lng: 130.441434 },
        mapUrl: "https://www.google.com/maps/place/GUNDAM+SIDE-F/"
      }
    ]
  },
  {
    id: 8,
    date: "1/28 (二)",
    isoDate: "2025-01-28",
    title: "帶著滿滿回憶返家",
    stay: "(返家)",
    location: "Fukuoka",
    mapCenter: { lat: 33.5859, lng: 130.4511 },
    activities: [
      {
        time: "09:00",
        type: "transport",
        title: "Check-out → 機場",
        detail: "步行至天神站 (3分) → 地鐵直達機場 (11分)",
        locationKey: "to_airport",
        coordinates: { lat: 33.5910, lng: 130.3980 }
      },
      {
        time: "10:30",
        type: "transport",
        title: "福岡機場 (FUK) 搭機",
        detail: "期待下次九州之旅！",
        locationKey: "airport",
        coordinates: { lat: 33.5859, lng: 130.4511 }
      }
    ],
    gourmet: [],
    shopping: []
  }
];
