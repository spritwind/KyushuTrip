import { useState, useEffect } from 'react';

/**
 * 使用 Geolocation API 獲取用戶當前位置
 * @returns {Object} { position, error, loading }
 */
export function useGeolocation() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 檢查瀏覽器是否支援 Geolocation API
    if (!navigator.geolocation) {
      setError('您的瀏覽器不支援定位功能');
      setLoading(false);
      return;
    }

    // 成功獲取位置的回調
    const handleSuccess = (pos) => {
      setPosition({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        accuracy: pos.coords.accuracy
      });
      setLoading(false);
      setError(null);
    };

    // 獲取位置失敗的回調
    const handleError = (err) => {
      let errorMessage = '無法取得您的位置';

      switch (err.code) {
        case err.PERMISSION_DENIED:
          errorMessage = '定位權限被拒絕，請在設定中開啟定位權限';
          break;
        case err.POSITION_UNAVAILABLE:
          errorMessage = '位置資訊無法取得';
          break;
        case err.TIMEOUT:
          errorMessage = '取得位置逾時';
          break;
        default:
          errorMessage = '發生未知錯誤';
      }

      setError(errorMessage);
      setLoading(false);
    };

    // 請求當前位置（一次性）
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
      enableHighAccuracy: true, // 高精度模式
      timeout: 10000, // 10秒逾時
      maximumAge: 0 // 不使用快取位置
    });

    // 持續監聽位置變化（可選）
    const watchId = navigator.geolocation.watchPosition(
      handleSuccess,
      handleError,
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 30000 // 30秒內的快取可用
      }
    );

    // 清理函數
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return { position, error, loading };
}
