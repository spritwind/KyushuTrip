import { useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import MapMarker from './MapMarker';
import MapRoute from './MapRoute';
import MapLegend from './MapLegend';
import { MAP_CONFIG, MAP_OPTIONS } from '@config/maps';

export default function MapView({ dayData }) {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // 如果沒有 API Key，顯示提示
  if (!apiKey || apiKey === 'your_google_maps_api_key_here') {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <h3 className="text-lg font-bold text-amber-900 mb-2">請設定 Google Maps API Key</h3>
        <p className="text-sm text-amber-700 mb-4">
          請在 <code className="bg-amber-100 px-2 py-1 rounded">.env.local</code> 檔案中設定{' '}
          <code className="bg-amber-100 px-2 py-1 rounded">VITE_GOOGLE_MAPS_API_KEY</code>
        </p>
        <a
          href="https://console.cloud.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-amber-700"
        >
          前往 Google Cloud Console
        </a>
      </div>
    );
  }

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

        {/* 選中標記的資訊卡片 */}
        {selectedMarker && (
          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-200">
            <button
              onClick={() => setSelectedMarker(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <h4 className="font-bold text-gray-900 pr-6">
              {selectedMarker.title || selectedMarker.name}
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              {selectedMarker.detail || selectedMarker.desc}
            </p>
            {selectedMarker.time && (
              <span className="inline-block mt-2 text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded">
                {selectedMarker.time}
              </span>
            )}
          </div>
        )}
      </div>
    </APIProvider>
  );
}
