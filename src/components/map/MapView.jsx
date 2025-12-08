import { useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import MapMarker from './MapMarker';
import MapRoute from './MapRoute';
import MapLegend from './MapLegend';
import { MAP_CONFIG, MAP_OPTIONS } from '@config/maps';

export default function MapView({ dayData }) {
  const [selectedMarker, setSelectedMarker] = useState(null);
  // Google Maps API Key (寫死在程式碼中)
  const apiKey = 'AIzaSyDcs-sKtNk8tnuwofLKmf6qBCEsABeGoR8';

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
