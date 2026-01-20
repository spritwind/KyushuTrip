import { AdvancedMarker } from '@vis.gl/react-google-maps';
import {
  Navigation, Car, Utensils, ShoppingBag, Star, Bed, Camera,
  CircleDot, Building2, Award
} from 'lucide-react';
import { MARKER_CONFIG } from '@config/maps';
import { LOCATIONS } from '@data/locations';

// 圖標映射
const ICON_MAP = {
  Navigation, Car, Utensils, ShoppingBag, Star, Bed, Camera,
  CircleDot, Building2, Award
};

export default function MapMarker({
  activity,
  place,
  type,
  index,
  onClick,
  isSelected,
  showNumber = true
}) {
  // 獲取位置資訊
  const locationKey = activity?.locationKey || place?.locationKey;
  const coordinates = activity?.coordinates || place?.coordinates ||
    (locationKey && LOCATIONS[locationKey]);

  if (!coordinates) return null;

  // 決定標記配置
  let config;
  let badge = null;

  if (type === 'gourmet' || place) {
    // 美食標記 - 根據屬性決定子類型
    const gourmetType = place?.isSAPA ? 'sapa' :
      place?.michelin ? 'michelin' :
        place?.shinise ? 'shinise' : 'default';
    config = MARKER_CONFIG.gourmet[gourmetType];
    badge = config.badge;
  } else {
    // 活動標記
    const activityType = activity?.type || 'activity';
    config = MARKER_CONFIG.activity[activityType] || MARKER_CONFIG.activity.activity;
  }

  const IconComponent = ICON_MAP[config.icon] || CircleDot;

  // 編號顯示（用於行程順序）
  const displayNumber = showNumber && typeof index === 'number' ? index + 1 : null;

  return (
    <AdvancedMarker
      position={{ lat: coordinates.lat, lng: coordinates.lng }}
      onClick={onClick}
    >
      <div
        className={`
          relative flex items-center justify-center transition-all duration-300
          ${isSelected ? 'scale-125 z-50' : 'scale-100 z-10'}
        `}
      >
        {/* 選中時的光暈效果 */}
        {isSelected && (
          <div
            className="absolute rounded-full animate-ping"
            style={{
              width: 48,
              height: 48,
              backgroundColor: config.color,
              opacity: 0.3
            }}
          />
        )}

        {/* 主標記容器 */}
        <div
          className={`
            relative w-10 h-10 rounded-full shadow-lg border-2 border-white
            flex items-center justify-center transition-transform duration-200
            ${isSelected ? 'shadow-xl' : 'shadow-md hover:scale-110'}
          `}
          style={{ backgroundColor: config.bgColor }}
        >
          <IconComponent
            size={20}
            color={config.color}
            className={isSelected ? 'animate-pulse' : ''}
            fill={config.icon === 'Star' ? config.color : 'none'}
          />

          {/* 編號角標 */}
          {displayNumber && (
            <div
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full
                         flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
              style={{ backgroundColor: config.color }}
            >
              {displayNumber}
            </div>
          )}

          {/* 特殊徽章（老舖/米其林/SA） */}
          {badge && !displayNumber && (
            <div
              className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full
                         text-[8px] font-bold text-white shadow-sm"
              style={{ backgroundColor: config.color }}
            >
              {badge}
            </div>
          )}
        </div>

        {/* 底部三角指示器 */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: `8px solid ${config.bgColor}`
          }}
        />
      </div>
    </AdvancedMarker>
  );
}
