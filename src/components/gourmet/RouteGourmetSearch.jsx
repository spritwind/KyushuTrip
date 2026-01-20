import { useState, useMemo } from 'react';
import { Route, Clock, MapPin, ChevronDown, ChevronUp, Sparkles, Navigation, Filter } from 'lucide-react';
import {
  searchAlongRoute,
  extractRouteFromDay,
  collectAllGourmet,
  formatDetourTime,
  isConvenient
} from '@services/routeService';
import GourmetCard from './GourmetCard';

/**
 * 沿途美食搜尋元件
 * 根據當日行程路線，搜尋沿途的美食推薦
 */
export default function RouteGourmetSearch({
  dayData,
  allDays,
  userPosition,
  navigationMode
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxDetourTime, setMaxDetourTime] = useState(20); // 預設 20 分鐘
  const [showFilters, setShowFilters] = useState(false);

  // 提取當日路線
  const route = useMemo(() => {
    return extractRouteFromDay(dayData);
  }, [dayData]);

  // 收集所有天數的美食
  const allGourmet = useMemo(() => {
    return collectAllGourmet(allDays);
  }, [allDays]);

  // 搜尋沿途美食（排除當日已推薦的）
  const routeGourmet = useMemo(() => {
    if (route.length < 2) return [];

    // 當日已推薦的美食名稱
    const currentDayGourmetNames = new Set(
      (dayData?.gourmet || []).map(g => g.name)
    );

    // 搜尋並過濾
    const results = searchAlongRoute({
      route,
      gourmetList: allGourmet.filter(g => !currentDayGourmetNames.has(g.name)),
      maxDistance: 10, // 10km 以內
      maxDetourTime
    });

    return results;
  }, [route, allGourmet, dayData, maxDetourTime]);

  // 分類：順路 vs 需繞路
  const { convenientGourmet, detourGourmet } = useMemo(() => {
    const convenient = routeGourmet.filter(g => isConvenient(g.detourTime));
    const detour = routeGourmet.filter(g => !isConvenient(g.detourTime));
    return { convenientGourmet: convenient, detourGourmet: detour };
  }, [routeGourmet]);

  // 如果路線點太少，不顯示此功能
  if (route.length < 2) {
    return null;
  }

  const totalCount = routeGourmet.length;
  const convenientCount = convenientGourmet.length;

  return (
    <div className="mb-6">
      {/* 摺疊標題 */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl p-4 flex items-center justify-between shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-xl">
            <Route size={20} />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-sm">沿途美食探索</h3>
            <p className="text-xs text-white/80 mt-0.5">
              {totalCount > 0 ? (
                <>發現 <span className="font-bold text-yellow-300">{totalCount}</span> 家順路美食</>
              ) : (
                '搜尋路線周邊的美食'
              )}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {convenientCount > 0 && (
            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
              {convenientCount} 家超順路
            </span>
          )}
          <div className="bg-white/20 p-1.5 rounded-lg group-hover:bg-white/30 transition-colors">
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </div>
      </button>

      {/* 展開內容 */}
      {isExpanded && (
        <div className="mt-3 animate-in slide-in-from-top duration-300">
          {/* 篩選器 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 mb-4 border border-indigo-100">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm text-indigo-600 font-medium"
            >
              <Filter size={14} />
              篩選條件
              {showFilters ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {showFilters && (
              <div className="mt-3 pt-3 border-t border-indigo-100">
                <label className="block text-xs text-gray-600 mb-2">
                  最大繞道時間：<span className="font-bold text-indigo-600">{maxDetourTime} 分鐘</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="60"
                  step="5"
                  value={maxDetourTime}
                  onChange={(e) => setMaxDetourTime(parseInt(e.target.value))}
                  className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>5分</span>
                  <span>30分</span>
                  <span>60分</span>
                </div>
              </div>
            )}
          </div>

          {/* 路線資訊 */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-3 mb-4 border border-indigo-100">
            <div className="flex items-center gap-2 text-xs text-indigo-700">
              <Navigation size={14} />
              <span className="font-medium">今日路線：</span>
              <span className="text-gray-600">
                {route.length > 0 && route[0].name}
                {route.length > 2 && ' → ...'}
                {route.length > 1 && ` → ${route[route.length - 1].name}`}
              </span>
            </div>
          </div>

          {/* 順路美食 */}
          {convenientGourmet.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3 px-1">
                <Sparkles size={16} className="text-yellow-500" />
                <h4 className="text-sm font-bold text-gray-700">超順路推薦</h4>
                <span className="text-xs text-gray-400">(繞道 ≤ 15 分鐘)</span>
              </div>
              {convenientGourmet.map((gourmet, index) => (
                <div key={gourmet.name + index} className="relative">
                  <RouteGourmetBadge
                    detourTime={gourmet.detourTime}
                    distanceToRoute={gourmet.distanceToRoute}
                    isConvenient={true}
                  />
                  <GourmetCard
                    place={gourmet}
                    userPosition={userPosition}
                    navigationMode={navigationMode}
                  />
                </div>
              ))}
            </div>
          )}

          {/* 需繞路美食 */}
          {detourGourmet.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3 px-1">
                <Clock size={16} className="text-orange-500" />
                <h4 className="text-sm font-bold text-gray-700">值得繞路</h4>
                <span className="text-xs text-gray-400">(繞道 15-{maxDetourTime} 分鐘)</span>
              </div>
              {detourGourmet.map((gourmet, index) => (
                <div key={gourmet.name + index} className="relative">
                  <RouteGourmetBadge
                    detourTime={gourmet.detourTime}
                    distanceToRoute={gourmet.distanceToRoute}
                    isConvenient={false}
                  />
                  <GourmetCard
                    place={gourmet}
                    userPosition={userPosition}
                    navigationMode={navigationMode}
                  />
                </div>
              ))}
            </div>
          )}

          {/* 無結果提示 */}
          {totalCount === 0 && (
            <div className="text-center py-8 text-gray-500">
              <MapPin size={32} className="mx-auto mb-2 text-gray-300" />
              <p className="text-sm">目前路線周邊沒有發現其他美食</p>
              <p className="text-xs mt-1">試著調高繞道時間篩選條件</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * 繞道資訊徽章
 */
function RouteGourmetBadge({ detourTime, distanceToRoute, isConvenient }) {
  const bgColor = isConvenient
    ? 'bg-gradient-to-r from-green-500 to-emerald-500'
    : 'bg-gradient-to-r from-orange-400 to-amber-500';

  return (
    <div className={`absolute -top-2 right-4 ${bgColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 flex items-center gap-1.5`}>
      <Clock size={12} />
      <span>{formatDetourTime(detourTime)}</span>
      <span className="text-white/70">|</span>
      <MapPin size={12} />
      <span>{distanceToRoute}km</span>
    </div>
  );
}
