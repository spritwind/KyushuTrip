import { useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { MapPinned } from 'lucide-react';
import MapMarker from './MapMarker';
import MapRoute from './MapRoute';
import MapLegend from './MapLegend';
import { MAP_CONFIG, MAP_OPTIONS } from '@config/maps';
import { getDistanceFromUser } from '@utils/helpers';

export default function MapView({ dayData, userPosition }) {
  const [selectedMarker, setSelectedMarker] = useState(null);
  // Google Maps API Key (從環境變數讀取)
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // 計算選中標記的距離
  const selectedDistance = selectedMarker && userPosition && selectedMarker.coordinates
    ? getDistanceFromUser(userPosition, selectedMarker.coordinates)
    : null;

  return (
    <APIProvider apiKey={apiKey}>
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
