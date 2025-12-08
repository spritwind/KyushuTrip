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
    title: "阿蘇火山直升機與神話神社",
    stay: "Grandvrio Hotel Aso (連泊)",
    location: "Aso",
    mapCenter: { lat: 32.8845, lng: 131.0500 },
    activities: [
      {
        time: "09:00",
        type: "highlight",
        title: "草千里 & 阿蘇火山",
        detail: "搭乘直升機 (30mins) | 觀景台玩雪重頭戲",
        locationKey: "kusasenri",
        googleRating: 4.5,
        coordinates: { lat: 32.8845, lng: 131.0530 }
      },
      {
        time: "12:00",
        type: "food",
        title: "午餐：草千里景觀餐廳",
        detail: "New Kusasenri 或周邊",
        locationKey: "new_kusasenri",
        googleRating: 4.0,
        coordinates: { lat: 32.8845, lng: 131.0535 }
      },
      {
        time: "13:30",
        type: "drive",
        title: "前往上色見熊野座神社",
        detail: "車程約 32分鐘 | 螢火之森取景地",
        duration: "32m",
        locationKey: "shrine_drive",
        coordinates: { lat: 32.8335, lng: 131.1520 }
      },
      {
        time: "14:10",
        type: "highlight",
        title: "上色見熊野座神社",
        detail: "神秘的穿戶岩 | Google評分: 4.7⭐",
        locationKey: "kamishikimi",
        googleRating: 4.7,
        coordinates: { lat: 32.8335, lng: 131.1520 }
      },
      {
        time: "16:00",
        type: "highlight",
        title: "白川水源",
        detail: "日本名水百選 | 裝水體驗 (12分車程)",
        locationKey: "shirakawa",
        googleRating: 4.4,
        coordinates: { lat: 32.8340, lng: 131.0965 }
      },
      {
        time: "18:00",
        type: "food",
        title: "晚餐 & 採買",
        detail: "返回飯店途中享用晚餐",
        locationKey: "dinner_aso",
        coordinates: { lat: 32.9000, lng: 131.0000 }
      }
    ],
    gourmet: [
      {
        name: "New Kusasenri (ニュー草千里)",
        type: "景觀餐廳",
        tags: ["絕景", "赤牛丼"],
        desc: "擁有整片落地窗，可以直接眺望草千里與阿蘇中岳噴煙的絕景餐廳。推薦赤牛丼與阿蘇牛奶冰淇淋。",
        locationKey: "new_kusasenri",
        googleRating: 4.0,
        michelin: false,
        coordinates: { lat: 32.8850, lng: 131.0530 }
      },
      {
        name: "水源茶屋 (Suigen Chaya)",
        type: "豆腐/甘味",
        tags: ["白川水源內", "名水豆腐"],
        desc: "使用白川水源的名水製作的料理，豆腐料理清甜，也有好吃的糰子和咖啡。",
        locationKey: "suigen_chaya",
        googleRating: 4.2,
        michelin: false,
        coordinates: { lat: 32.8340, lng: 131.0965 }
      },
      {
        name: "高森田楽保存会",
        type: "田樂燒",
        tags: ["鄉土料理", "圍爐裹"],
        desc: "距離上色見神社不遠，體驗在古老圍爐裹旁烤山女魚、豆腐和野菜的傳統美味。",
        locationKey: "takamori_dengaku",
        googleRating: 4.4,
        michelin: false,
        coordinates: { lat: 32.8250, lng: 131.1350 }
      }
    ],
    shopping: [
      {
        name: "白川水源 賣店",
        type: "裝水瓶/土產",
        tags: ["名水", "空瓶"],
        desc: "記得購買空寶特瓶裝取日本第一的白川水源名水帶回飯店喝。",
        coordinates: { lat: 32.8340, lng: 131.0965 }
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
        type: "transport",
        title: "格蘭德里奧 出發",
        detail: "飯店早餐後退房 → 午餐在阿蘇解決 (12:30啟程)",
        coordinates: { lat: 32.9230, lng: 130.9850 }
      },
      {
        time: "12:30",
        type: "drive",
        title: "開車返回福岡",
        detail: "高速公路 3小時 | 17:30 前還車",
        duration: "180m",
        locationKey: "highway",
        coordinates: { lat: 33.3000, lng: 130.7000 }
      },
      {
        time: "17:30",
        type: "transport",
        title: "還車：Budget 筑紫口",
        detail: "還車後搭計程車/Uber至飯店",
        locationKey: "budget_return",
        coordinates: { lat: 33.5885, lng: 130.4255 }
      },
      {
        time: "18:30",
        type: "stay",
        title: "MYSTAYS 天神 Check-in",
        detail: "位於天神商圈，交通便利",
        locationKey: "mystays_tenjin",
        googleRating: 4.1,
        coordinates: { lat: 33.5912, lng: 130.3950 }
      },
      {
        time: "19:30",
        type: "food",
        title: "天神晚餐 (見推薦)",
        detail: "Shirokane Nishida / 壽司 / 屋台",
        locationKey: "tenjin_dinner",
        coordinates: { lat: 33.5910, lng: 130.3980 }
      }
    ],
    gourmet: [
      {
        name: "Shirokane Nishida (白金 にし田)",
        type: "精緻懷石",
        tags: ["米其林一星⭐", "Google 4.7⭐", "頂級"],
        desc: "展現季節之美的日本料理，主廚手藝精湛，高湯濃郁優雅，是福岡極致的味覺體驗。",
        locationKey: "shirokane_nishida",
        googleRating: 4.7,
        michelin: true,
        coordinates: { lat: 33.5800, lng: 130.4030 }
      },
      {
        name: "Chakaiseki Nakahan (茶懐石 中伴)",
        type: "懷石料理",
        tags: ["隱密高雅", "Google 4.5⭐"],
        desc: "西中洲的隱密名店，氛圍寧靜高雅，料理細膩，適合重要的晚餐時刻。",
        locationKey: "nakahan",
        googleRating: 4.5,
        michelin: true,
        coordinates: { lat: 33.5905, lng: 130.4045 }
      },
      {
        name: "Yatai Yappari (屋台 やっぱり)",
        type: "屋台美食",
        tags: ["天神人氣", "炒拉麵"],
        desc: "位於天神南的熱門屋台，炒拉麵和關東煮非常受歡迎，氣氛熱鬧。",
        locationKey: "yatai_yappari",
        googleRating: 4.0,
        michelin: false,
        coordinates: { lat: 33.5880, lng: 130.4010 }
      }
    ],
    shopping: [
      {
        name: "天神地下街",
        type: "購物街",
        tags: ["必逛", "好買"],
        desc: "全長600公尺，風格優雅的地下商店街，服飾、雜貨、美食林立。",
        coordinates: { lat: 33.5910, lng: 130.3980 }
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
        title: "櫛田神社",
        detail: "博多總鎮守 | 觀賞巨大山笠",
        locationKey: "kushida",
        googleRating: 4.4,
        coordinates: { lat: 33.5930, lng: 130.4105 }
      },
      {
        time: "11:30",
        type: "shopping",
        title: "Lalaport 福岡",
        detail: "1:1 RX-93ff ν鋼彈 | 購物午餐",
        locationKey: "lalaport",
        googleRating: 4.4,
        coordinates: { lat: 33.5650, lng: 130.4280 }
      },
      {
        time: "16:00",
        type: "shopping",
        title: "天神商圈 最後採買",
        detail: "岩田屋 / 大丸 / PARCO",
        locationKey: "tenjin_shop",
        googleRating: 4.3,
        coordinates: { lat: 33.5900, lng: 130.3980 }
      },
      {
        time: "19:00",
        type: "food",
        title: "慶功宴晚餐",
        detail: "回味福岡美食 (牛腸鍋/燒肉)",
        locationKey: "final_dinner",
        coordinates: { lat: 33.5900, lng: 130.4000 }
      }
    ],
    gourmet: [
      {
        name: "Motsunabe Ooyama (もつ鍋 おおやま)",
        type: "牛腸鍋",
        tags: ["Google 4.3⭐", "口味濃郁"],
        desc: "味噌口味牛腸鍋一絕，福岡最具代表性的美食之一。",
        locationKey: "ooyama",
        googleRating: 4.3,
        michelin: false,
        coordinates: { lat: 33.5910, lng: 130.4200 }
      },
      {
        name: "Yakiniku Champion",
        type: "和牛燒肉",
        tags: ["JR博多城10F", "A5和牛"],
        desc: "可以吃到各種稀有部位的頂級燒肉，Lalaport 內也有分店。",
        locationKey: "champion",
        googleRating: 4.2,
        michelin: false,
        coordinates: { lat: 33.5900, lng: 130.4200 }
      }
    ],
    shopping: [
      {
        name: "Lalaport 福岡",
        type: "購物中心",
        tags: ["鋼彈Park", "KidZania"],
        desc: "不僅有巨大鋼彈，還有各種親子設施與九州初登場品牌。",
        coordinates: { lat: 33.5650, lng: 130.4280 }
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
