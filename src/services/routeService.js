/**
 * 路線搜尋服務 - 沿途美食搜尋功能
 * 基於 Haversine 公式計算距離，找出路線沿途的美食推薦
 */

import { calculateDistance } from '@utils/helpers';

/**
 * 計算點到線段的最短距離
 * @param {Object} point - 目標點 { lat, lng }
 * @param {Object} lineStart - 線段起點 { lat, lng }
 * @param {Object} lineEnd - 線段終點 { lat, lng }
 * @returns {number} 最短距離（公里）
 */
function pointToLineDistance(point, lineStart, lineEnd) {
  // 計算線段長度
  const lineLength = calculateDistance(
    lineStart.lat, lineStart.lng,
    lineEnd.lat, lineEnd.lng
  );

  // 如果線段長度為0，直接返回點到起點的距離
  if (lineLength === 0) {
    return calculateDistance(point.lat, point.lng, lineStart.lat, lineStart.lng);
  }

  // 計算點到起點和終點的距離
  const distToStart = calculateDistance(point.lat, point.lng, lineStart.lat, lineStart.lng);
  const distToEnd = calculateDistance(point.lat, point.lng, lineEnd.lat, lineEnd.lng);

  // 使用投影計算最短距離
  // 簡化版：取點到兩端點距離的較小值，再與垂直距離比較
  const t = Math.max(0, Math.min(1,
    ((point.lat - lineStart.lat) * (lineEnd.lat - lineStart.lat) +
     (point.lng - lineStart.lng) * (lineEnd.lng - lineStart.lng)) /
    (Math.pow(lineEnd.lat - lineStart.lat, 2) + Math.pow(lineEnd.lng - lineStart.lng, 2))
  ));

  const projLat = lineStart.lat + t * (lineEnd.lat - lineStart.lat);
  const projLng = lineStart.lng + t * (lineEnd.lng - lineStart.lng);
  const distToLine = calculateDistance(point.lat, point.lng, projLat, projLng);

  return Math.min(distToStart, distToEnd, distToLine);
}

/**
 * 計算點到路線（多線段）的最短距離
 * @param {Object} point - 目標點 { lat, lng }
 * @param {Array} route - 路線座標陣列 [{ lat, lng }, ...]
 * @returns {number} 最短距離（公里）
 */
function pointToRouteDistance(point, route) {
  if (!route || route.length === 0) return Infinity;
  if (route.length === 1) {
    return calculateDistance(point.lat, point.lng, route[0].lat, route[0].lng);
  }

  let minDistance = Infinity;

  for (let i = 0; i < route.length - 1; i++) {
    const distance = pointToLineDistance(point, route[i], route[i + 1]);
    minDistance = Math.min(minDistance, distance);
  }

  return minDistance;
}

/**
 * 估算繞道時間（分鐘）
 * 假設平均車速 40 km/h（考慮市區與高速混合）
 * @param {number} detourDistanceKm - 繞道距離（公里）
 * @returns {number} 預估繞道時間（分鐘）
 */
function estimateDetourTime(detourDistanceKm) {
  const averageSpeedKmH = 40; // 平均時速
  const timeHours = (detourDistanceKm * 2) / averageSpeedKmH; // 來回
  return Math.round(timeHours * 60);
}

/**
 * 搜尋沿途美食
 * @param {Object} params - 搜尋參數
 * @param {Array} params.route - 路線座標陣列
 * @param {Array} params.gourmetList - 美食清單
 * @param {number} params.maxDistance - 最大偏離距離（公里，預設 5km）
 * @param {number} params.maxDetourTime - 最大繞道時間（分鐘，預設 30 分）
 * @returns {Array} 符合條件的美食清單，包含距離與繞道時間資訊
 */
export function searchAlongRoute({
  route,
  gourmetList,
  maxDistance = 5,
  maxDetourTime = 30
}) {
  if (!route || route.length < 2 || !gourmetList || gourmetList.length === 0) {
    return [];
  }

  const results = gourmetList
    .map(gourmet => {
      // 取得座標（優先使用 coordinates，fallback 到 locationKey）
      const coords = gourmet.coordinates;
      if (!coords || !coords.lat || !coords.lng) {
        return null;
      }

      // 計算到路線的最短距離
      const distanceToRoute = pointToRouteDistance(coords, route);

      // 估算繞道時間
      const detourTime = estimateDetourTime(distanceToRoute);

      return {
        ...gourmet,
        distanceToRoute: Math.round(distanceToRoute * 10) / 10, // 保留一位小數
        detourTime,
        isOnRoute: distanceToRoute < 1 // 小於 1km 視為在路線上
      };
    })
    .filter(item => {
      if (!item) return false;
      // 過濾條件：距離和繞道時間都要符合
      return item.distanceToRoute <= maxDistance && item.detourTime <= maxDetourTime;
    })
    .sort((a, b) => a.distanceToRoute - b.distanceToRoute); // 按距離排序

  return results;
}

/**
 * 取得兩個地點之間的路線（簡化版，直接連線）
 * @param {Object} origin - 起點 { lat, lng }
 * @param {Object} destination - 終點 { lat, lng }
 * @param {Array} waypoints - 中途點（選填）
 * @returns {Array} 路線座標陣列
 */
export function getSimpleRoute(origin, destination, waypoints = []) {
  const route = [origin];

  if (waypoints && waypoints.length > 0) {
    route.push(...waypoints);
  }

  route.push(destination);

  return route;
}

/**
 * 從行程資料中提取當日路線
 * @param {Object} dayData - 當日行程資料
 * @returns {Array} 路線座標陣列
 */
export function extractRouteFromDay(dayData) {
  if (!dayData || !dayData.activities) {
    return [];
  }

  const route = dayData.activities
    .filter(activity => activity.coordinates)
    .map(activity => ({
      lat: activity.coordinates.lat,
      lng: activity.coordinates.lng,
      name: activity.title
    }));

  return route;
}

/**
 * 從所有天數的美食清單中收集全部美食
 * @param {Array} allDays - 所有天數資料
 * @returns {Array} 所有美食清單
 */
export function collectAllGourmet(allDays) {
  if (!allDays || allDays.length === 0) {
    return [];
  }

  const allGourmet = [];
  const seenNames = new Set();

  allDays.forEach(day => {
    if (day.gourmet && day.gourmet.length > 0) {
      day.gourmet.forEach(gourmet => {
        // 避免重複
        if (!seenNames.has(gourmet.name)) {
          seenNames.add(gourmet.name);
          allGourmet.push({
            ...gourmet,
            dayId: day.id,
            dayDate: day.date
          });
        }
      });
    }
  });

  return allGourmet;
}

/**
 * 格式化繞道時間顯示
 * @param {number} minutes - 分鐘數
 * @returns {string} 格式化字串
 */
export function formatDetourTime(minutes) {
  if (minutes < 1) {
    return '路線上';
  } else if (minutes < 60) {
    return `+${minutes}分`;
  } else {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `+${hours}時${mins}分` : `+${hours}時`;
  }
}

/**
 * 判斷是否為順路（繞道時間小於閾值）
 * @param {number} detourTime - 繞道時間（分鐘）
 * @param {number} threshold - 閾值（分鐘，預設 15）
 * @returns {boolean}
 */
export function isConvenient(detourTime, threshold = 15) {
  return detourTime <= threshold;
}
