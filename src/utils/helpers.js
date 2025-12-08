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
 */
export function getGoogleMapsDirectionsUrl(lat, lng) {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
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
