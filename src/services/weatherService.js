import axios from 'axios';
import { CITY_IDS, WEATHER_ICON_MAP } from '@utils/constants';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

/**
 * 獲取5天天氣預報
 * @param {string} cityName - 城市名稱 (Fukuoka, Beppu, Yufuin)
 * @param {string} date - ISO 日期格式 (e.g., "2025-01-21")
 * @returns {Promise<Object|null>} 天氣資料或 null
 */
export async function getForecast(cityName, date) {
  // 檢查 API Key
  if (!API_KEY || API_KEY === 'your_openweather_api_key_here') {
    console.warn('OpenWeatherMap API Key 未設定，使用 Mock 資料');
    return null;
  }

  try {
    const cityId = CITY_IDS[cityName];
    if (!cityId) {
      console.error(`找不到城市 ID: ${cityName}`);
      return null;
    }

    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        id: cityId,
        appid: API_KEY,
        units: 'metric', // 攝氏溫度
        lang: 'ja' // 日文描述
      }
    });

    // 過濾出指定日期的天氣
    const targetDate = new Date(date).toISOString().split('T')[0];
    const dayForecast = response.data.list.filter((item) =>
      item.dt_txt.startsWith(targetDate)
    );

    if (dayForecast.length === 0) {
      console.warn(`找不到日期 ${targetDate} 的天氣資料`);
      return null;
    }

    // 計算當日最高/最低溫
    const temps = dayForecast.map((f) => f.main.temp);
    const minTemp = Math.round(Math.min(...temps));
    const maxTemp = Math.round(Math.max(...temps));

    // 取中午12點的天氣狀況（或第一筆資料）
    const noonWeather = dayForecast.find((f) => f.dt_txt.includes('12:00')) || dayForecast[0];

    const iconCode = noonWeather.weather[0].icon;
    const iconName = WEATHER_ICON_MAP[iconCode] || 'CloudSun';

    return {
      temp: `${minTemp}°C - ${maxTemp}°C`,
      condition: noonWeather.weather[0].description,
      icon: iconCode,
      iconName: iconName,
      humidity: noonWeather.main.humidity,
      windSpeed: noonWeather.wind.speed,
      warning: generateWeatherWarning(cityName, noonWeather.weather[0].main, minTemp),
      raw: noonWeather
    };
  } catch (error) {
    console.error('Weather API Error:', error.response?.data || error.message);
    return null;
  }
}

/**
 * 生成天氣警告訊息
 */
function generateWeatherWarning(cityName, weatherMain, minTemp) {
  const warnings = {
    Fukuoka: {
      Cold: '博多風大，建議攜帶圍巾',
      Rain: '博多可能下雨，記得帶傘',
      default: '博多天氣宜人，適合遊覽'
    },
    Beppu: {
      Cold: '別府海邊濕氣重，體感溫度較低',
      Rain: '別府溫泉區路滑，小心行走',
      default: '別府溫泉天氣舒適'
    },
    Yufuin: {
      Snow: '九重山區降雪機率高，務必穿著雪靴',
      Cold: '由布院山區較冷，多穿保暖衣物',
      default: '由布院天氣涼爽，適合散策'
    }
  };

  const cityWarnings = warnings[cityName] || warnings.Fukuoka;

  if (minTemp < 0) return cityWarnings.Snow || cityWarnings.Cold;
  if (weatherMain === 'Rain') return cityWarnings.Rain || '可能下雨，記得帶傘';
  if (minTemp < 5) return cityWarnings.Cold || '氣溫較低，注意保暖';

  return cityWarnings.default;
}

/**
 * 獲取當前天氣（即時）
 */
export async function getCurrentWeather(cityName) {
  if (!API_KEY || API_KEY === 'your_openweather_api_key_here') {
    return null;
  }

  try {
    const cityId = CITY_IDS[cityName];
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        id: cityId,
        appid: API_KEY,
        units: 'metric',
        lang: 'ja'
      }
    });

    const data = response.data;
    const iconCode = data.weather[0].icon;

    return {
      temp: `${Math.round(data.main.temp)}°C`,
      condition: data.weather[0].description,
      icon: iconCode,
      iconName: WEATHER_ICON_MAP[iconCode] || 'CloudSun',
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      raw: data
    };
  } catch (error) {
    console.error('Current Weather API Error:', error);
    return null;
  }
}
