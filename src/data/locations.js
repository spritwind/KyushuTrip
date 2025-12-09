// 九州景點地理座標資料

export const LOCATIONS = {
  // Day 1 - 福岡
  fukuoka_airport: { lat: 33.5859, lng: 130.4511, name: "福岡機場 (FUK)" },
  hakata_station: { lat: 33.5897, lng: 130.4206, name: "博多站" },
  base_hakata_hotel: { lat: 33.5902, lng: 130.4212, name: "博多站天座飯店 (The Base Hakata)" },
  teamlab_fukuoka: { lat: 33.6244, lng: 130.4178, name: "teamLab Forest 福岡" },
  lalaport_fukuoka: { lat: 33.6245, lng: 130.4180, name: "Lalaport 福岡" },
  nakasu_yatai: { lat: 33.5936, lng: 130.4063, name: "中洲屋台街" },
  hakata_gion_tetsunabe: { lat: 33.5933, lng: 130.4107, name: "博多祇園鐵那貝" },
  ganso_mentaiju: { lat: 33.5915, lng: 130.4094, name: "元祖博多明太重" },
  seimon_barai: { lat: 33.5898, lng: 130.4062, name: "Seimon Barai" },

  // Day 2 - 別府
  budget_hakata: { lat: 33.5880, lng: 130.4250, name: "Budget 租車 博多筑紫口店" },
  beppu_city: { lat: 33.2844, lng: 131.4909, name: "別府市" },
  umi_jigoku: { lat: 33.3089, lng: 131.4656, name: "海地獄" },
  chinoike_jigoku: { lat: 33.2947, lng: 131.4783, name: "血池地獄" },
  tatsumaki_jigoku: { lat: 33.2948, lng: 131.4785, name: "龍捲地獄" },
  jigoku_mushi_kobo: { lat: 33.3084, lng: 131.4650, name: "地獄蒸工房 鐵輪" },
  beppu_tengu: { lat: 33.2821, lng: 131.4916, name: "別府天狗像" },
  takegawara_onsen: { lat: 33.2794, lng: 131.4894, name: "竹瓦溫泉" },
  yado_nono_beppu: { lat: 33.2850, lng: 131.4920, name: "別府八湯 御宿野乃" },
  toyotsune: { lat: 33.2838, lng: 131.4905, name: "Toyotsune (天丼名店)" },
  kotsukotsu_an: { lat: 33.2856, lng: 131.4898, name: "Kotsukotsu An" },
  okamotoya: { lat: 33.3095, lng: 131.4660, name: "岡本屋賣店" },

  // Day 2 - 別府購物
  chinoike_shop: { lat: 33.2947, lng: 131.4783, name: "血池地獄 賣店" },
  umi_jigoku_shop: { lat: 33.3089, lng: 131.4656, name: "海地獄 賣店" },

  // Day 3 - 由布院
  yufuin_station: { lat: 33.2661, lng: 131.3669, name: "由布院站" },
  yunohira_street: { lat: 33.2658, lng: 131.3695, name: "湯之坪街道" },
  kinrin_lake: { lat: 33.2656, lng: 131.3719, name: "金鱗湖" },
  yufuin_floral_village: { lat: 33.2662, lng: 131.3705, name: "Yufuin Floral Village" },
  yufuin_kokoro: { lat: 33.2654, lng: 131.3718, name: "由布釜飯「心」" },
  bspeak: { lat: 33.2660, lng: 131.3685, name: "B-Speak" },
  cucuchi: { lat: 33.2657, lng: 131.3692, name: "鞠智 cucuchi" },
  yufuin_shoyu: { lat: 33.2656, lng: 131.3690, name: "由布院醬油屋本店" },
  kokonoe_ski: { lat: 33.1342, lng: 131.2361, name: "九重森林公園滑雪場" },
  sujiyu_onsen: { lat: 33.1539, lng: 131.2258, name: "筋湯溫泉 旅館 Nanakamado" },

  // Day 7 - 福岡 (鋼彈與博多傳統文化)
  kushida_shrine: {
    lat: 33.593026, lng: 130.410744,
    name: "櫛田神社",
    mapUrl: "https://www.google.com/maps/place/%E6%AB%9B%E7%94%B0%E7%A5%9E%E7%A4%BE/"
  },
  ishimura_manseido: {
    lat: 33.595462, lng: 130.408226,
    name: "石村萬世堂 本店",
    mapUrl: "https://www.google.com/maps/place/%E7%9F%B3%E6%9D%91%E8%90%AC%E7%9B%9B%E5%A0%82+%E6%9C%AC%E5%BA%97/"
  },
  kushida_chaya: {
    lat: 33.592881, lng: 130.410515,
    name: "櫛田茶屋",
    mapUrl: "https://www.google.com/maps/place/%E6%AB%9B%E7%94%B0%E8%8C%B6%E5%B1%8B/"
  },
  kawabata_zenzai: {
    lat: 33.593582, lng: 130.409385,
    name: "川端善哉廣場",
    mapUrl: "https://www.google.com/maps/place/%E5%B7%9D%E7%AB%AF%E3%81%9C%E3%82%93%E3%81%96%E3%81%84%E5%BA%83%E5%A0%B4/"
  },
  lalaport_fukuoka: {
    lat: 33.564491, lng: 130.441434,
    name: "Lalaport 福岡",
    mapUrl: "https://www.google.com/maps/place/%E4%B8%89%E4%BA%95%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%83%91%E3%83%BC%E3%82%AF+%E3%82%89%E3%82%89%E3%81%BD%E3%83%BC%E3%81%A8%E7%A6%8F%E5%B2%A1/"
  },
  gundam_sidef: {
    lat: 33.564491, lng: 130.441434,
    name: "GUNDAM SIDE-F",
    mapUrl: "https://www.google.com/maps/place/GUNDAM+SIDE-F/"
  },
  tonkatsu_chisei: {
    lat: 33.564491, lng: 130.441434,
    name: "炸豬排 知青"
  },
  seiyoken_lalaport: {
    lat: 33.564491, lng: 130.441434,
    name: "久留米拉麵 清陽軒",
    mapUrl: "https://www.google.com/maps/place/%E4%B9%85%E7%95%99%E7%B1%B3%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E6%B8%85%E9%99%BD%E8%BB%92+%E3%82%89%E3%82%89%E3%81%BD%E3%83%BC%E3%81%A8%E7%A6%8F%E5%B2%A1%E5%BA%97/"
  },
  tenjin_chikagai: {
    lat: 33.590050, lng: 130.399630,
    name: "天神地下街",
    mapUrl: "https://www.google.com/maps/place/%E5%A4%A9%E7%A5%9E%E5%9C%B0%E4%B8%8B%E8%A1%97/"
  },
  yamanaka_motsunabe: {
    lat: 33.587825, lng: 130.392341,
    name: "博多牛腸鍋 山中 赤坂店",
    mapUrl: "https://www.google.com/maps/place/%E5%8D%9A%E5%A4%9A%E3%82%82%E3%81%A4%E9%8D%8B+%E3%82%84%E3%81%BE%E4%B8%AD+%E8%B5%A4%E5%9D%82%E5%BA%97/"
  },
  sudo_yakiniku: {
    lat: 33.588880, lng: 130.405360,
    name: "燒肉 須藤 春吉",
    mapUrl: "https://www.google.com/maps/place/%E7%84%BC%E8%82%89+%E3%81%99%E3%81%A9%E3%81%86+%E6%98%A5%E5%90%89/"
  },
  nikuichi_yakuin: {
    lat: 33.581530, lng: 130.402480,
    name: "博多燒肉 NIKUICHI 藥院店",
    mapUrl: "https://www.google.com/maps/place/%E5%8D%9A%E5%A4%9A%E7%84%BC%E8%82%89+NIKUICHI+%E8%96%AC%E9%99%A2%E5%BA%97/"
  }
};

// 每日路線座標陣列（用於繪製路線）
export const DAILY_ROUTES = {
  day1: [
    LOCATIONS.fukuoka_airport,
    LOCATIONS.hakata_station,
    LOCATIONS.base_hakata_hotel,
    LOCATIONS.teamlab_fukuoka,
    LOCATIONS.nakasu_yatai
  ],
  day2: [
    LOCATIONS.budget_hakata,
    LOCATIONS.umi_jigoku,
    LOCATIONS.chinoike_jigoku,
    LOCATIONS.jigoku_mushi_kobo,
    LOCATIONS.beppu_tengu,
    LOCATIONS.takegawara_onsen,
    LOCATIONS.yado_nono_beppu
  ],
  day3: [
    LOCATIONS.yado_nono_beppu,
    LOCATIONS.yufuin_station,
    LOCATIONS.kinrin_lake,
    LOCATIONS.kokonoe_ski,
    LOCATIONS.sujiyu_onsen
  ]
};

// 每日地圖中心點和縮放等級
export const MAP_CENTERS = {
  day1: { lat: 33.5897, lng: 130.4206, zoom: 12, name: "福岡" },
  day2: { lat: 33.2950, lng: 131.4750, zoom: 12, name: "別府" },
  day3: { lat: 33.2000, lng: 131.3000, zoom: 10, name: "由布院・九重" }
};
