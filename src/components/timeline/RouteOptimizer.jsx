import { useState, useMemo, useCallback } from 'react';
import {
  Route, Sparkles, ArrowRight, Clock, MapPin,
  ChevronDown, ChevronUp, Check, RotateCcw, Zap
} from 'lucide-react';
import {
  optimizeRoute,
  calculateTimeSavings,
  formatOptimizationSummary,
  shouldOptimize
} from '@services/tspOptimizer';

/**
 * 路線優化器元件
 * 提供當日行程的最佳訪問順序建議
 */
export default function RouteOptimizer({ dayData, onApplyOptimization }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  // 提取有座標的活動點
  const activityPoints = useMemo(() => {
    if (!dayData?.activities) return [];

    return dayData.activities
      .filter(act => act.coordinates?.lat && act.coordinates?.lng)
      .map((act, idx) => ({
        ...act,
        lat: act.coordinates.lat,
        lng: act.coordinates.lng,
        originalIndex: idx
      }));
  }, [dayData]);

  // 執行路線優化
  const optimizationResult = useMemo(() => {
    if (activityPoints.length < 3) {
      return {
        success: false,
        message: '需要至少 3 個地點才能優化',
        needsOptimization: false
      };
    }

    const result = optimizeRoute({
      points: activityPoints,
      fixStart: true, // 固定第一個點為起點
      fixEnd: false
    });

    return {
      ...result,
      needsOptimization: result.savings > 0.5 // 節省超過 0.5 公里才顯示
    };
  }, [activityPoints]);

  // 時間節省
  const timeSaved = useMemo(() => {
    if (!optimizationResult.success || optimizationResult.savings <= 0) return 0;
    return calculateTimeSavings(optimizationResult.savings);
  }, [optimizationResult]);

  // 套用優化
  const handleApply = useCallback(() => {
    if (onApplyOptimization && optimizationResult.success) {
      onApplyOptimization(optimizationResult.optimizedOrder);
    }
  }, [onApplyOptimization, optimizationResult]);

  // 如果沒有足夠的點或不需要優化，顯示簡化版
  if (activityPoints.length < 3) {
    return null;
  }

  if (!optimizationResult.needsOptimization) {
    return (
      <div className="mb-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-100">
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-xl">
            <Check size={18} className="text-green-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-green-800">路線已是最佳順序</p>
            <p className="text-xs text-green-600 mt-0.5">
              目前行程規劃效率極佳，無需調整
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4">
      {/* 主要卡片 */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl overflow-hidden shadow-lg">
        {/* 標題區 */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-4 flex items-center justify-between text-white"
        >
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-xl animate-pulse">
              <Zap size={20} />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-sm flex items-center gap-2">
                路線優化建議
                <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-0.5 rounded-full">
                  可省 {timeSaved} 分鐘
                </span>
              </h3>
              <p className="text-xs text-white/80 mt-0.5">
                發現更高效的訪問順序
              </p>
            </div>
          </div>
          <div className="bg-white/20 p-1.5 rounded-lg">
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </button>

        {/* 展開內容 */}
        {isExpanded && (
          <div className="bg-white p-4 animate-in slide-in-from-top duration-300">
            {/* 統計數據 */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <StatCard
                icon={<Route size={16} />}
                label="節省距離"
                value={`${optimizationResult.savings} km`}
                color="purple"
              />
              <StatCard
                icon={<Clock size={16} />}
                label="節省時間"
                value={`${timeSaved} 分`}
                color="indigo"
              />
              <StatCard
                icon={<Sparkles size={16} />}
                label="效率提升"
                value={`${optimizationResult.savingsPercent}%`}
                color="pink"
              />
            </div>

            {/* 路線比較切換 */}
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="w-full text-left text-sm text-indigo-600 font-medium mb-3 flex items-center gap-2"
            >
              {showComparison ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              {showComparison ? '隱藏路線比較' : '顯示路線比較'}
            </button>

            {/* 路線比較 */}
            {showComparison && (
              <div className="space-y-3 mb-4">
                {/* 原始順序 */}
                <RouteDisplay
                  title="目前順序"
                  points={optimizationResult.originalOrder}
                  distance={optimizationResult.originalDistance}
                  variant="original"
                />

                {/* 箭頭 */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-2 rounded-full">
                    <ArrowRight size={16} className="rotate-90" />
                  </div>
                </div>

                {/* 優化順序 */}
                <RouteDisplay
                  title="建議順序"
                  points={optimizationResult.optimizedOrder}
                  distance={optimizationResult.optimizedDistance}
                  variant="optimized"
                />
              </div>
            )}

            {/* 操作按鈕 */}
            <div className="flex gap-2">
              {onApplyOptimization && (
                <button
                  onClick={handleApply}
                  className="flex-1 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95 transition-all"
                >
                  <Check size={16} />
                  套用優化順序
                </button>
              )}
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="px-4 py-2.5 bg-gray-100 text-gray-600 text-sm font-medium rounded-xl hover:bg-gray-200 transition-colors"
              >
                {showComparison ? '收起' : '詳情'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * 統計卡片
 */
function StatCard({ icon, label, value, color }) {
  const colorClasses = {
    purple: 'bg-purple-50 text-purple-600 border-purple-100',
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    pink: 'bg-pink-50 text-pink-600 border-pink-100'
  };

  return (
    <div className={`${colorClasses[color]} rounded-xl p-3 border text-center`}>
      <div className="flex justify-center mb-1">{icon}</div>
      <p className="text-lg font-bold">{value}</p>
      <p className="text-xs opacity-70">{label}</p>
    </div>
  );
}

/**
 * 路線顯示元件
 */
function RouteDisplay({ title, points, distance, variant }) {
  const isOptimized = variant === 'optimized';

  const bgClass = isOptimized
    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200'
    : 'bg-gray-50 border-gray-200';

  const dotClass = isOptimized ? 'bg-green-500' : 'bg-gray-400';
  const lineClass = isOptimized ? 'bg-green-300' : 'bg-gray-300';

  return (
    <div className={`${bgClass} rounded-xl p-3 border`}>
      <div className="flex items-center justify-between mb-2">
        <span className={`text-xs font-bold ${isOptimized ? 'text-green-700' : 'text-gray-600'}`}>
          {title}
        </span>
        <span className={`text-xs ${isOptimized ? 'text-green-600' : 'text-gray-500'}`}>
          {distance} km
        </span>
      </div>

      {/* 路線點 */}
      <div className="flex items-center gap-1 overflow-x-auto pb-1">
        {points.slice(0, 6).map((point, idx) => (
          <div key={idx} className="flex items-center">
            <div className="flex flex-col items-center min-w-[60px]">
              <div className={`w-3 h-3 rounded-full ${dotClass} mb-1`} />
              <span className="text-[10px] text-gray-600 text-center line-clamp-2 leading-tight">
                {point.title?.substring(0, 8) || `地點${idx + 1}`}
              </span>
            </div>
            {idx < Math.min(points.length - 1, 5) && (
              <div className={`w-4 h-0.5 ${lineClass} -mt-4`} />
            )}
          </div>
        ))}
        {points.length > 6 && (
          <span className="text-xs text-gray-400 ml-1">+{points.length - 6}</span>
        )}
      </div>
    </div>
  );
}
