import { useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { MapPinned, MapIcon, Navigation, AlertCircle } from 'lucide-react';
import MapMarker from './MapMarker';
import MapRoute from './MapRoute';
import MapLegend from './MapLegend';
import { MAP_CONFIG, MAP_OPTIONS } from '@config/maps';
import { getDistanceFromUser } from '@utils/helpers';

export default function MapView({ dayData, userPosition }) {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mapError, setMapError] = useState(false);
  // Google Maps API Key (從環境變數讀取)
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // 計算選中標記的距離
  const selectedDistance = selectedMarker && userPosition && selectedMarker.coordinates
    ? getDistanceFromUser(userPosition, selectedMarker.coordinates)
    : null;

  // 如果沒有 API Key 或地圖載入錯誤，顯示備用 UI
  if (!apiKey || mapError) {
    return (
      <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60 max-w-sm text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapIcon size={32} className="text-blue-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">地圖功能暫時無法使用</h3>
            <p className="text-sm text-gray-600 mb-4">
              請使用下方景點的「Go!」按鈕開啟 Google Maps 導航
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <AlertCircle size={14} />
              <span>API Key 尚未設定</span>
            </div>
          </div>

          {/* 顯示今日景點列表 */}
          <div className="mt-4 w-full max-w-sm">
            <p className="text-xs text-gray-500 text-center mb-2">今日景點快速導航</p>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {dayData.activities
                .filter((a) => a.locationKey && a.coordinates)
                .slice(0, 5)
                .map((activity, idx) => (
                  <a
                    key={idx}
                    href={`https://www.google.com/maps/search/?api=1&query=${activity.coordinates.lat},${activity.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-3 hover:bg-white/90 transition-colors border border-white/60"
                  >
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Navigation size={16} className="text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey} onError={() => setMapError(true)}>
      <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <Map
          defaultCenter={dayData.mapCenter}
          defaultZoom={MAP_CONFIG.defaultZoom}
          mapId={MAP_CONFIG.mapId}
          {...MAP_OPTIONS}
        >
          {/* 活動標記 */}
          {dayData.activities
            .filter((a) => a.locationKey)
            .map((activity, idx) => (
              <MapMarker
                key={`activity-${idx}`}
                activity={activity}
                onClick={() => setSelectedMarker(activity)}
                isSelected={selectedMarker?.time === activity.time}
              />
            ))}

          {/* 美食標記 */}
          {dayData.gourmet &&
            dayData.gourmet.map((place, idx) => (
              <MapMarker
                key={`gourmet-${idx}`}
                place={place}
                type="gourmet"
                onClick={() => setSelectedMarker(place)}
                isSelected={selectedMarker?.name === place.name}
              />
            ))}

          {/* 路線繪製 */}
          <MapRoute dayId={dayData.id} />
        </Map>

        {/* 圖例 */}
        <MapLegend />

        {/* 選中標記的資訊卡片 - 修改為頂部顯示避免被底部導航遮住 */}
        {selectedMarker && (
          <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-4 border border-gray-200 animate-in slide-up z-50">
            <button
              onClick={() => setSelectedMarker(null)}
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors"
            >
              ✕
            </button>
            <h4 className="font-bold text-gray-900 pr-8 mb-1">
              {selectedMarker.title || selectedMarker.name}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              {selectedMarker.detail || selectedMarker.desc}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {selectedMarker.time && (
                <span className="inline-block text-xs bg-primary-100 text-primary-700 px-2.5 py-1 rounded-full font-medium">
                  {selectedMarker.time}
                </span>
              )}
              {selectedDistance && (
                <span className="inline-flex items-center gap-1 text-xs bg-success-50 text-success-700 px-2.5 py-1 rounded-full font-medium border border-success-200">
                  <MapPinned size={12} />
                  距離您 {selectedDistance}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </APIProvider>
  );
}
