// Google Maps 配置

export const MAP_CONFIG = {
  defaultZoom: 11,
  language: 'ja',
  region: 'JP',
  mapId: 'kyushu_trip_map',
  styles: []
};

// 地圖選項
export const MAP_OPTIONS = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: true,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: true,
  gestureHandling: 'greedy'
};

// 標記類型配置 - 馬卡龍配色
export const MARKER_CONFIG = {
  // 活動類型
  activity: {
    transport: { icon: 'Navigation', color: '#3b82f6', bgColor: '#dbeafe', label: '交通' },
    drive: { icon: 'Car', color: '#4f46e5', bgColor: '#e0e7ff', label: '自駕' },
    food: { icon: 'Utensils', color: '#f59e0b', bgColor: '#fef3c7', label: '用餐' },
    shopping: { icon: 'ShoppingBag', color: '#f43f5e', bgColor: '#ffe4e6', label: '購物' },
    highlight: { icon: 'Star', color: '#8b5cf6', bgColor: '#f3e8ff', label: '必訪' },
    stay: { icon: 'Bed', color: '#10b981', bgColor: '#d1fae5', label: '住宿' },
    sight: { icon: 'Camera', color: '#06b6d4', bgColor: '#cffafe', label: '觀光' },
    activity: { icon: 'CircleDot', color: '#6b7280', bgColor: '#f3f4f6', label: '活動' }
  },

  // 美食子類型
  gourmet: {
    default: { icon: 'Utensils', color: '#ef4444', bgColor: '#fee2e2', label: '美食' },
    shinise: { icon: 'Building2', color: '#92400e', bgColor: '#fef3c7', badge: '老', label: '老舖' },
    michelin: { icon: 'Award', color: '#dc2626', bgColor: '#fee2e2', badge: '★', label: '米其林' },
    sapa: { icon: 'Car', color: '#2563eb', bgColor: '#dbeafe', badge: 'SA', label: '休息站' }
  }
};

// 用戶位置標記配置
export const USER_LOCATION_CONFIG = {
  dotColor: '#2563eb',
  pulseColor: 'rgba(37, 99, 235, 0.3)',
  accuracyCircleColor: 'rgba(37, 99, 235, 0.1)',
  dotSize: 16,
  pulseSize: 40
};

// 路線配置
export const ROUTE_CONFIG = {
  completed: { color: '#9ca3af', opacity: 0.5 },
  current: { color: '#4f46e5', opacity: 0.9 },
  upcoming: { color: '#a5b4fc', opacity: 0.6 }
};
