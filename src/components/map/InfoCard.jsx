import { X, Navigation, Star, MapPinned, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { getGoogleMapsDirectionsUrl, getDistanceFromUser } from '@utils/helpers';
import { useTheme } from '@/contexts/ThemeContext';
import { MARKER_CONFIG } from '@config/maps';
import { LOCATIONS } from '@data/locations';

export default function InfoCard({
  marker,
  userPosition,
  navigationMode,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  currentIndex,
  totalCount
}) {
  const theme = useTheme();

  if (!marker) return null;

  // 取得座標
  const coordinates = marker.coordinates ||
    (marker.locationKey && LOCATIONS[marker.locationKey]);

  const distance = userPosition && coordinates
    ? getDistanceFromUser(userPosition, coordinates)
    : null;

  const handleNavigate = () => {
    if (coordinates) {
      const url = getGoogleMapsDirectionsUrl(
        coordinates.lat,
        coordinates.lng,
        navigationMode,
        marker.title || marker.name
      );
      window.open(url, '_blank');
    }
  };

  // 決定類型圖標和顏色
  const isGourmet = !!marker.name;
  const markerType = isGourmet
    ? (marker.isSAPA ? 'sapa' : marker.michelin ? 'michelin' : marker.shinise ? 'shinise' : 'default')
    : (marker.type || 'activity');
  const config = isGourmet
    ? MARKER_CONFIG.gourmet[markerType]
    : MARKER_CONFIG.activity[markerType] || MARKER_CONFIG.activity.activity;

  return (
    <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-md
                    rounded-3xl shadow-xl border border-gray-100 overflow-hidden
                    animate-in slide-in-from-top z-50">
      {/* 頂部色條 */}
      <div
        className="h-1.5 w-full"
        style={{ backgroundColor: config.color }}
      />

      <div className="p-4">
        {/* 關閉按鈕 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center
                     rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500
                     hover:text-gray-700 transition-colors"
        >
          <X size={16} />
        </button>

        {/* 類型標籤 */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: config.bgColor, color: config.color }}
          >
            {config.label}
            {marker.michelin && <Star size={10} className="fill-current" />}
          </span>

          {marker.googleRating && (
            <span className="inline-flex items-center gap-1 text-xs bg-amber-50
                           text-amber-700 px-2 py-1 rounded-full font-medium">
              <Star size={10} className="fill-amber-500 text-amber-500" />
              {marker.googleRating}
            </span>
          )}
        </div>

        {/* 標題 */}
        <h4 className="font-bold text-lg text-gray-900 pr-10 mb-2">
          {marker.title || marker.name}
        </h4>

        {/* 描述 */}
        <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
          {marker.detail || marker.desc}
        </p>

        {/* 標籤 */}
        {marker.tags && marker.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {marker.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* 底部操作區 */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2">
            {/* 時間 */}
            {marker.time && (
              <span className="inline-flex items-center gap-1 text-xs bg-gray-100
                             text-gray-600 px-2.5 py-1.5 rounded-full font-medium">
                <Clock size={12} />
                {marker.time}
              </span>
            )}

            {/* 距離 */}
            {distance && (
              <span className="inline-flex items-center gap-1 text-xs bg-success-50
                             text-success-700 px-2.5 py-1.5 rounded-full font-medium
                             border border-success-200">
                <MapPinned size={12} />
                {distance}
              </span>
            )}
          </div>

          {/* 導航按鈕 */}
          {coordinates && (
            <button
              onClick={handleNavigate}
              className={`inline-flex items-center gap-1.5 text-sm
                         ${theme.classes.bg} ${theme.classes.hover}
                         text-white px-4 py-2 rounded-full font-bold shadow-md
                         hover:shadow-lg active:scale-95 transition-all duration-300`}
            >
              <Navigation size={14} />
              <span>導航</span>
            </button>
          )}
        </div>

        {/* 上下站切換 */}
        {(hasPrev || hasNext) && (
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className={`flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full
                         transition-colors ${hasPrev
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-gray-50 text-gray-300 cursor-not-allowed'}`}
            >
              <ChevronLeft size={14} />
              上一站
            </button>

            <span className="text-xs text-gray-400">
              {currentIndex + 1} / {totalCount}
            </span>

            <button
              onClick={onNext}
              disabled={!hasNext}
              className={`flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full
                         transition-colors ${hasNext
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : 'bg-gray-50 text-gray-300 cursor-not-allowed'}`}
            >
              下一站
              <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
