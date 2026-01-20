import { Navigation, Clock, MapPinned } from 'lucide-react';
import { getDistanceFromUser, getGoogleMapsDirectionsUrl } from '@utils/helpers';
import { useTheme } from '@/contexts/ThemeContext';
import { LOCATIONS } from '@data/locations';

export default function FloatingNavPanel({
  nextActivity,
  userPosition,
  navigationMode
}) {
  const theme = useTheme();

  if (!nextActivity) return null;

  // 取得座標
  const coordinates = nextActivity.coordinates ||
    (nextActivity.locationKey && LOCATIONS[nextActivity.locationKey]);

  const distance = userPosition && coordinates
    ? getDistanceFromUser(userPosition, coordinates)
    : null;

  const handleNavigate = () => {
    if (coordinates) {
      const url = getGoogleMapsDirectionsUrl(
        coordinates.lat,
        coordinates.lng,
        navigationMode,
        nextActivity.title
      );
      window.open(url, '_blank');
    }
  };

  return (
    <div className="absolute bottom-20 left-4 right-4 z-40">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg
                      border border-gray-100 p-3 flex items-center gap-3">
        {/* 左側圖標 */}
        <div
          className={`w-12 h-12 rounded-xl ${theme.classes.bgLight}
                      flex items-center justify-center flex-shrink-0`}
        >
          <Navigation size={24} className={theme.classes.text} />
        </div>

        {/* 中間資訊 */}
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-500 mb-0.5">下一站</p>
          <h4 className="font-bold text-sm text-gray-800 truncate">
            {nextActivity.title}
          </h4>

          <div className="flex items-center gap-2 mt-1">
            {distance && (
              <span className="inline-flex items-center gap-1 text-xs
                             bg-success-50 text-success-700 px-2 py-0.5 rounded-full">
                <MapPinned size={10} />
                {distance}
              </span>
            )}
            {nextActivity.time && (
              <span className="inline-flex items-center gap-1 text-xs
                             bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                <Clock size={10} />
                {nextActivity.time}
              </span>
            )}
          </div>
        </div>

        {/* 導航按鈕 */}
        <button
          onClick={handleNavigate}
          className={`w-12 h-12 rounded-xl ${theme.classes.bg} ${theme.classes.hover}
                      flex items-center justify-center flex-shrink-0
                      shadow-md active:scale-95 transition-all duration-200`}
        >
          <Navigation size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
}
