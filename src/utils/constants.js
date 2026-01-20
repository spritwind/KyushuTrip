// 應用程式常數定義

// 活動類型對應的顏色
export const ACTIVITY_COLORS = {
  transport: '#3b82f6',    // 藍色
  drive: '#4f46e5',        // 靛藍色
  food: '#f59e0b',         // 琥珀色
  shopping: '#f43f5e',     // 玫瑰色
  highlight: '#8b5cf6',    // 紫色
  stay: '#10b981',         // 綠色
  sight: '#06b6d4',        // 青色
  activity: '#6b7280'      // 灰色
};

// OpenWeather 圖示代碼對應 Lucide 圖示名稱
export const WEATHER_ICON_MAP = {
  '01d': 'Sun',
  '01n': 'Moon',
  '02d': 'CloudSun',
  '02n': 'CloudMoon',
  '03d': 'Cloud',
  '03n': 'Cloud',
  '04d': 'Cloudy',
  '04n': 'Cloudy',
  '09d': 'CloudRain',
  '09n': 'CloudRain',
  '10d': 'CloudRain',
  '10n': 'CloudRain',
  '11d': 'CloudLightning',
  '11n': 'CloudLightning',
  '13d': 'Snowflake',
  '13n': 'Snowflake',
  '50d': 'CloudFog',
  '50n': 'CloudFog'
};

// 地圖配置
export const MAP_CONFIG = {
  defaultZoom: 11,
  language: 'ja',
  region: 'JP',
  mapId: 'kyushu_trip_map'
};

// 城市 ID 對應 (OpenWeatherMap)
export const CITY_IDS = {
  Fukuoka: 1863967,
  Beppu: 1926099,
  Yufuin: 1848445
};

// 美食子類型顏色
export const GOURMET_TYPE_COLORS = {
  default: '#ef4444',   // 紅色
  shinise: '#92400e',   // 深棕色（老舖）
  michelin: '#dc2626',  // 深紅色（米其林）
  sapa: '#2563eb'       // 藍色（高速公路休息站）
};
