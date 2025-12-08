// Google Maps 配置

export const MAP_CONFIG = {
  defaultZoom: 11,
  language: 'ja',
  region: 'JP',
  mapId: 'kyushu_trip_map',
  // 地圖樣式（可選，使用默認樣式）
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
  gestureHandling: 'greedy' // 允許單指滾動
};
