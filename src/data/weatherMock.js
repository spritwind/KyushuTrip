// 天氣備用資料（當 API 失敗時使用）

export const WEATHER_MOCK_DATA = {
  "2025-01-21": {
    temp: "4°C - 9°C",
    condition: "晴時多雲",
    icon: "02d",
    iconName: "CloudSun",
    warning: "博多風大，建議攜帶圍巾",
    humidity: 65,
    windSpeed: 4.5
  },
  "2025-01-22": {
    temp: "2°C - 7°C",
    condition: "多雲",
    icon: "03d",
    iconName: "Cloud",
    warning: "別府海邊濕氣重，體感溫度較低",
    humidity: 72,
    windSpeed: 3.2
  },
  "2025-01-23": {
    temp: "-2°C - 3°C",
    condition: "降雪",
    icon: "13d",
    iconName: "Snowflake",
    warning: "九重山區降雪機率高，務必穿著雪靴",
    humidity: 85,
    windSpeed: 5.8
  }
};
