import { useState, useEffect } from 'react';
import { getForecast } from '@services/weatherService';
import { WEATHER_MOCK_DATA } from '@data/weatherMock';

/**
 * 天氣資料 Hook
 * @param {string} location - 地點名稱 (Fukuoka, Beppu, Yufuin)
 * @param {string} date - ISO 日期格式
 * @returns {Object} { weather, loading, error }
 */
export function useWeather(location, date) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      setError(null);

      try {
        // 優先使用真實 API
        const data = await getForecast(location, date);

        if (data) {
          setWeather(data);
        } else {
          // API 失敗時使用模擬資料
          const mockData = WEATHER_MOCK_DATA[date];
          if (mockData) {
            setWeather(mockData);
          } else {
            setWeather({
              temp: '-- --',
              condition: '天氣資料載入中',
              iconName: 'CloudSun',
              warning: '無法載入天氣資料'
            });
          }
        }
      } catch (err) {
        console.error('useWeather error:', err);
        setError(err);

        // 錯誤時使用備用資料
        const mockData = WEATHER_MOCK_DATA[date];
        if (mockData) {
          setWeather(mockData);
        }
      } finally {
        setLoading(false);
      }
    }

    if (location && date) {
      fetchWeather();
    }
  }, [location, date]);

  return { weather, loading, error };
}
