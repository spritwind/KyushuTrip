import { useState } from 'react';
import {
  Navigation, Car, Utensils, Star, Bed, Camera, ShoppingBag,
  Building2, Award, ChevronDown, ChevronUp, MapPin
} from 'lucide-react';
import { MARKER_CONFIG } from '@config/maps';

const ICON_MAP = {
  Navigation, Car, Utensils, Star, Bed, Camera, ShoppingBag, Building2, Award
};

export default function MapLegend() {
  const [isExpanded, setIsExpanded] = useState(false);

  const activityLegends = [
    { type: 'transport', label: '交通' },
    { type: 'drive', label: '自駕' },
    { type: 'highlight', label: '必訪' },
    { type: 'sight', label: '觀光' },
    { type: 'stay', label: '住宿' },
    { type: 'shopping', label: '購物' }
  ];

  const gourmetLegends = [
    { type: 'default', label: '美食' },
    { type: 'shinise', label: '老舖' },
    { type: 'michelin', label: '米其林' },
    { type: 'sapa', label: '休息站' }
  ];

  return (
    <div className="absolute top-4 right-4 z-30">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg
                      border border-gray-100 overflow-hidden transition-all duration-300">
        {/* 標題區 */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-3 hover:bg-gray-50
                     transition-colors"
        >
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-gray-500" />
            <span className="text-xs font-bold text-gray-700">圖例說明</span>
          </div>
          {isExpanded ? (
            <ChevronUp size={14} className="text-gray-400" />
          ) : (
            <ChevronDown size={14} className="text-gray-400" />
          )}
        </button>

        {/* 展開內容 */}
        {isExpanded && (
          <div className="px-3 pb-3 space-y-3 border-t border-gray-100 pt-2">
            {/* 行程類型 */}
            <div>
              <p className="text-[10px] text-gray-400 font-medium mb-1.5">行程</p>
              <div className="grid grid-cols-2 gap-1.5">
                {activityLegends.map(({ type, label }) => {
                  const config = MARKER_CONFIG.activity[type];
                  const IconComponent = ICON_MAP[config.icon];
                  return (
                    <div key={type} className="flex items-center gap-1.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: config.bgColor }}
                      >
                        <IconComponent size={10} color={config.color} />
                      </div>
                      <span className="text-[10px] text-gray-600">{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 美食類型 */}
            <div>
              <p className="text-[10px] text-gray-400 font-medium mb-1.5">美食</p>
              <div className="grid grid-cols-2 gap-1.5">
                {gourmetLegends.map(({ type, label }) => {
                  const config = MARKER_CONFIG.gourmet[type];
                  const IconComponent = ICON_MAP[config.icon] || Utensils;
                  return (
                    <div key={type} className="flex items-center gap-1.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center relative"
                        style={{ backgroundColor: config.bgColor }}
                      >
                        <IconComponent size={10} color={config.color} />
                        {config.badge && (
                          <span
                            className="absolute -bottom-0.5 -right-0.5 text-[6px] font-bold
                                       text-white px-1 rounded-full"
                            style={{ backgroundColor: config.color }}
                          >
                            {config.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-gray-600">{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 用戶位置 */}
            <div>
              <p className="text-[10px] text-gray-400 font-medium mb-1.5">其他</p>
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                </div>
                <span className="text-[10px] text-gray-600">您的位置</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
