/**
 * TSP 路線優化器 - 旅行推銷員問題求解
 * 使用 Nearest Neighbor + 2-opt 混合演算法
 *
 * 適用於：
 * - 當日行程景點排序優化
 * - 多家餐廳訪問順序規劃
 */

import { calculateDistance } from '@utils/helpers';

/**
 * 計算距離矩陣
 * @param {Array} points - 座標點陣列 [{ lat, lng, name, ... }, ...]
 * @returns {Array} 二維距離矩陣
 */
function buildDistanceMatrix(points) {
  const n = points.length;
  const matrix = Array(n).fill(null).map(() => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dist = calculateDistance(
        points[i].lat, points[i].lng,
        points[j].lat, points[j].lng
      );
      matrix[i][j] = dist;
      matrix[j][i] = dist; // 對稱
    }
  }

  return matrix;
}

/**
 * 計算路徑總距離
 * @param {Array} path - 訪問順序索引陣列
 * @param {Array} distMatrix - 距離矩陣
 * @returns {number} 總距離（公里）
 */
function calculateTotalDistance(path, distMatrix) {
  let total = 0;
  for (let i = 0; i < path.length - 1; i++) {
    total += distMatrix[path[i]][path[i + 1]];
  }
  return total;
}

/**
 * Nearest Neighbor 演算法 - 貪婪法找初始解
 * @param {Array} distMatrix - 距離矩陣
 * @param {number} startIdx - 起點索引
 * @returns {Array} 訪問順序
 */
function nearestNeighbor(distMatrix, startIdx = 0) {
  const n = distMatrix.length;
  const visited = new Set([startIdx]);
  const path = [startIdx];

  let current = startIdx;

  while (visited.size < n) {
    let nearestIdx = -1;
    let nearestDist = Infinity;

    for (let i = 0; i < n; i++) {
      if (!visited.has(i) && distMatrix[current][i] < nearestDist) {
        nearestDist = distMatrix[current][i];
        nearestIdx = i;
      }
    }

    if (nearestIdx !== -1) {
      visited.add(nearestIdx);
      path.push(nearestIdx);
      current = nearestIdx;
    }
  }

  return path;
}

/**
 * 2-opt 優化 - 消除路徑交叉
 * @param {Array} path - 初始路徑
 * @param {Array} distMatrix - 距離矩陣
 * @param {number} maxIterations - 最大迭代次數
 * @returns {Array} 優化後的路徑
 */
function twoOpt(path, distMatrix, maxIterations = 100) {
  let bestPath = [...path];
  let bestDistance = calculateTotalDistance(bestPath, distMatrix);
  let improved = true;
  let iteration = 0;

  while (improved && iteration < maxIterations) {
    improved = false;
    iteration++;

    for (let i = 1; i < bestPath.length - 1; i++) {
      for (let j = i + 1; j < bestPath.length; j++) {
        // 嘗試反轉 i 到 j 之間的路段
        const newPath = [
          ...bestPath.slice(0, i),
          ...bestPath.slice(i, j + 1).reverse(),
          ...bestPath.slice(j + 1)
        ];

        const newDistance = calculateTotalDistance(newPath, distMatrix);

        if (newDistance < bestDistance) {
          bestPath = newPath;
          bestDistance = newDistance;
          improved = true;
        }
      }
    }
  }

  return bestPath;
}

/**
 * 主要優化函數 - 找出最佳訪問順序
 * @param {Object} params - 參數
 * @param {Array} params.points - 座標點陣列 [{ lat, lng, name, ... }, ...]
 * @param {number} params.startIdx - 起點索引（預設 0，即第一個點）
 * @param {number} params.endIdx - 終點索引（預設 null，不指定終點）
 * @param {boolean} params.fixStart - 是否固定起點（預設 true）
 * @param {boolean} params.fixEnd - 是否固定終點（預設 false）
 * @returns {Object} 優化結果
 */
export function optimizeRoute({
  points,
  startIdx = 0,
  endIdx = null,
  fixStart = true,
  fixEnd = false
}) {
  if (!points || points.length < 2) {
    return {
      success: false,
      message: '至少需要 2 個地點才能優化',
      originalOrder: points || [],
      optimizedOrder: points || [],
      savings: 0
    };
  }

  const n = points.length;

  // 建立距離矩陣
  const distMatrix = buildDistanceMatrix(points);

  // 計算原始順序距離
  const originalPath = points.map((_, i) => i);
  const originalDistance = calculateTotalDistance(originalPath, distMatrix);

  // 使用 Nearest Neighbor 找初始解
  let bestPath;

  if (fixStart) {
    // 固定起點
    bestPath = nearestNeighbor(distMatrix, startIdx);
  } else {
    // 嘗試從每個點開始，找最佳解
    let bestInitialPath = null;
    let bestInitialDist = Infinity;

    for (let i = 0; i < n; i++) {
      const path = nearestNeighbor(distMatrix, i);
      const dist = calculateTotalDistance(path, distMatrix);
      if (dist < bestInitialDist) {
        bestInitialDist = dist;
        bestInitialPath = path;
      }
    }
    bestPath = bestInitialPath;
  }

  // 2-opt 優化
  bestPath = twoOpt(bestPath, distMatrix);

  // 如果需要固定終點，調整路徑
  if (fixEnd && endIdx !== null && endIdx !== bestPath[bestPath.length - 1]) {
    // 找到終點在路徑中的位置並旋轉
    const endPosition = bestPath.indexOf(endIdx);
    if (endPosition !== -1 && endPosition !== bestPath.length - 1) {
      // 將終點之後的元素移到最前面（保持相對順序）
      const beforeEnd = bestPath.slice(0, endPosition + 1);
      const afterEnd = bestPath.slice(endPosition + 1);
      bestPath = [...afterEnd, ...beforeEnd];
    }
  }

  // 確保起點正確
  if (fixStart && bestPath[0] !== startIdx) {
    const startPosition = bestPath.indexOf(startIdx);
    if (startPosition !== -1) {
      // 旋轉陣列使起點在最前面
      bestPath = [
        ...bestPath.slice(startPosition),
        ...bestPath.slice(0, startPosition)
      ];
    }
  }

  const optimizedDistance = calculateTotalDistance(bestPath, distMatrix);
  const savings = originalDistance - optimizedDistance;
  const savingsPercent = originalDistance > 0
    ? Math.round((savings / originalDistance) * 100)
    : 0;

  // 根據優化後的順序重新排列點
  const optimizedPoints = bestPath.map(idx => ({
    ...points[idx],
    originalIndex: idx
  }));

  return {
    success: true,
    originalOrder: points,
    optimizedOrder: optimizedPoints,
    originalDistance: Math.round(originalDistance * 10) / 10,
    optimizedDistance: Math.round(optimizedDistance * 10) / 10,
    savings: Math.round(savings * 10) / 10,
    savingsPercent,
    pathIndices: bestPath
  };
}

/**
 * 計算時間節省（基於平均時速）
 * @param {number} distanceKm - 節省的距離（公里）
 * @param {number} avgSpeedKmH - 平均時速（預設 35 km/h 市區）
 * @returns {number} 節省時間（分鐘）
 */
export function calculateTimeSavings(distanceKm, avgSpeedKmH = 35) {
  if (distanceKm <= 0) return 0;
  const timeHours = distanceKm / avgSpeedKmH;
  return Math.round(timeHours * 60);
}

/**
 * 格式化優化結果摘要
 * @param {Object} result - optimizeRoute 的回傳結果
 * @returns {string} 格式化的摘要文字
 */
export function formatOptimizationSummary(result) {
  if (!result.success) {
    return result.message;
  }

  const timeSaved = calculateTimeSavings(result.savings);

  if (result.savings <= 0) {
    return '目前順序已是最佳路線！';
  }

  return `優化後可節省 ${result.savings} 公里（約 ${timeSaved} 分鐘），效率提升 ${result.savingsPercent}%`;
}

/**
 * 快速檢查是否值得優化
 * @param {Array} points - 座標點陣列
 * @returns {boolean} 是否建議優化
 */
export function shouldOptimize(points) {
  // 少於 3 個點不需要優化
  if (!points || points.length < 3) return false;

  // 計算原始與優化後的差異
  const result = optimizeRoute({ points, fixStart: true });

  // 節省超過 10% 或超過 2 公里才建議優化
  return result.savingsPercent >= 10 || result.savings >= 2;
}
