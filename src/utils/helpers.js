// 輔助函式

/**
 * 格式化日期為 ISO 格式
 */
export function formatDateToISO(dateString) {
  // 例: "1/21 (二)" => "2025-01-21"
  const match = dateString.match(/(\d+)\/(\d+)/);
  if (match) {
    const month = match[1].padStart(2, '0');
    const day = match[2].padStart(2, '0');
    return `2025-${month}-${day}`;
  }
  return dateString;
}

/**
 * 根據活動類型返回對應的圖示元件名稱
 */
export function getActivityIcon(type) {
  const iconMap = {
    transport: 'Navigation',
    drive: 'Car',
    food: 'Utensils',
    shopping: 'ShoppingBag',
    highlight: 'Star',
    stay: 'MapPin',
    sight: 'Map',
    activity: 'Circle'
  };
  return iconMap[type] || 'Circle';
}

/**
 * 生成 Google Maps 導航 URL
 * @param {number} lat - 緯度
 * @param {number} lng - 經度
 * @param {boolean} navigationMode - true: 導航模式, false: 查看模式
 * @param {string} placeName - 地點名稱（選填，用於查看模式）
 */
export function getGoogleMapsDirectionsUrl(lat, lng, navigationMode = true, placeName = null) {
  if (navigationMode) {
    // 導航模式：開啟 Google Maps 導航
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  } else {
    // 查看模式：使用地點名稱 + 座標搜尋，確保精確定位到正確的分店
    if (placeName) {
      // 組合名稱和座標，Google Maps 會優先匹配最接近該座標的同名店家
      const searchQuery = `${placeName} ${lat},${lng}`;
      const encodedQuery = encodeURIComponent(searchQuery);
      return `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
    } else {
      // 如果沒有名稱，降級使用座標
      return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    }
  }
}

/**
 * 檢查是否在指定日期範圍內
 */
export function isDateInRange(dateStr, startDate, endDate) {
  const date = new Date(dateStr);
  const start = new Date(startDate);
  const end = new Date(endDate);
  return date >= start && date <= end;
}

/**
 * 平滑滾動到指定元素
 */
export function scrollToElement(elementId, options = {}) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      ...options
    });
  }
}

/**
 * 高亮顯示元素（添加動畫效果）
 */
export function highlightElement(elementId, duration = 2000) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.add('ring-2', 'ring-indigo-500', 'transition-all');
    setTimeout(() => {
      element.classList.remove('ring-2', 'ring-indigo-500');
    }, duration);
  }
}

/**
 * 使用 Haversine 公式計算兩個經緯度座標之間的距離（公里）
 * @param {number} lat1 - 起點緯度
 * @param {number} lng1 - 起點經度
 * @param {number} lat2 - 終點緯度
 * @param {number} lng2 - 終點經度
 * @returns {number} 距離（公里）
 */
export function calculateDistance(lat1, lng1, lat2, lng2) {
  // 地球半徑（公里）
  const R = 6371;

  // 轉換為弧度
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
}

/**
 * 將角度轉換為弧度
 */
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

/**
 * 格式化距離顯示
 * @param {number} distanceKm - 距離（公里）
 * @returns {string} 格式化的距離字串
 */
export function formatDistance(distanceKm) {
  if (distanceKm < 1) {
    // 小於 1 公里顯示公尺
    return `${Math.round(distanceKm * 1000)}m`;
  } else if (distanceKm < 10) {
    // 1-10 公里顯示一位小數
    return `${distanceKm.toFixed(1)}km`;
  } else {
    // 大於 10 公里顯示整數
    return `${Math.round(distanceKm)}km`;
  }
}

/**
 * 計算用戶位置到目標位置的距離並格式化
 * @param {Object} userPosition - 用戶位置 { lat, lng }
 * @param {Object} targetCoordinates - 目標座標 { lat, lng }
 * @returns {string|null} 格式化的距離或 null（無法計算時）
 */
export function getDistanceFromUser(userPosition, targetCoordinates) {
  if (!userPosition || !targetCoordinates) {
    return null;
  }

  const distance = calculateDistance(
    userPosition.lat,
    userPosition.lng,
    targetCoordinates.lat,
    targetCoordinates.lng
  );

  return formatDistance(distance);
}
