import { useState, useMemo, useCallback } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { MapIcon, Navigation, AlertCircle } from 'lucide-react';
import MapMarker from './MapMarker';
import UserLocationMarker from './UserLocationMarker';
import MapRoute from './MapRoute';
import MapLegend from './MapLegend';
import InfoCard from './InfoCard';
import FloatingNavPanel from './FloatingNavPanel';
import { MAP_CONFIG, MAP_OPTIONS } from '@config/maps';
import { LOCATIONS } from '@data/locations';

export default function MapView({ dayData, userPosition, navigationMode = true }) {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);
  const [mapError, setMapError] = useState(false);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // 整合所有標記（活動 + 美食）
  const allMarkers = useMemo(() => {
    const activities = (dayData.activities || [])
      .filter(a => a.locationKey || a.coordinates)
      .map((a, idx) => ({
        ...a,
        _type: 'activity',
        _index: idx,
        coordinates: a.coordinates || LOCATIONS[a.locationKey]
      }));

    const gourmets = (dayData.gourmet || [])
      .filter(g => g.locationKey || g.coordinates)
      .map((g, idx) => ({
        ...g,
        _type: 'gourmet',
        _index: activities.length + idx,
        coordinates: g.coordinates || LOCATIONS[g.locationKey]
      }));

    return [...activities, ...gourmets];
  }, [dayData]);

  // 決定下一站（基於當前選擇或預設第一站）
  const nextActivity = useMemo(() => {
    const activities = dayData.activities || [];
    if (activities.length === 0) return null;

    // 如果有選中的是活動，找下一個活動
    if (selectedMarker && selectedMarker._type === 'activity') {
      const currentIdx = activities.findIndex(a => a.time === selectedMarker.time && a.title === selectedMarker.title);
      if (currentIdx >= 0 && currentIdx < activities.length - 1) {
        const next = activities[currentIdx + 1];
        return {
          ...next,
          coordinates: next.coordinates || LOCATIONS[next.locationKey]
        };
      }
    }

    // 預設返回第一個活動
    const first = activities[0];
    return {
      ...first,
      coordinates: first.coordinates || LOCATIONS[first.locationKey]
    };
  }, [dayData, selectedMarker]);

  // 標記選擇處理
  const handleMarkerClick = useCallback((marker, index) => {
    setSelectedMarker(marker);
    setSelectedMarkerIndex(index);
  }, []);

  // 上下站切換
  const handlePrevNext = useCallback((direction) => {
    if (selectedMarkerIndex === null) return;

    const newIndex = selectedMarkerIndex + direction;
    if (newIndex >= 0 && newIndex < allMarkers.length) {
      setSelectedMarkerIndex(newIndex);
      setSelectedMarker(allMarkers[newIndex]);
    }
  }, [selectedMarkerIndex, allMarkers]);

  // 關閉資訊卡
  const handleCloseInfoCard = useCallback(() => {
    setSelectedMarker(null);
    setSelectedMarkerIndex(null);
  }, []);

  // 備用 UI（無 API Key 或錯誤時）
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
                .filter((a) => a.locationKey || a.coordinates)
                .slice(0, 5)
                .map((activity, idx) => {
                  const coords = activity.coordinates || LOCATIONS[activity.locationKey];
                  return (
                    <a
                      key={idx}
                      href={coords ? `https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}` : '#'}
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
                  );
                })}
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
          {/* 用戶位置標記 */}
          <UserLocationMarker position={userPosition} />

          {/* 活動標記 */}
          {dayData.activities
            .filter((a) => a.locationKey || a.coordinates)
            .map((activity, idx) => (
              <MapMarker
                key={`activity-${idx}`}
                activity={activity}
                index={idx}
                onClick={() => handleMarkerClick({
                  ...activity,
                  _type: 'activity',
                  coordinates: activity.coordinates || LOCATIONS[activity.locationKey]
                }, idx)}
                isSelected={selectedMarker?.time === activity.time && selectedMarker?.title === activity.title}
                showNumber={true}
              />
            ))}

          {/* 美食標記 */}
          {dayData.gourmet?.map((place, idx) => (
            <MapMarker
              key={`gourmet-${idx}`}
              place={place}
              type="gourmet"
              onClick={() => handleMarkerClick({
                ...place,
                _type: 'gourmet',
                coordinates: place.coordinates || LOCATIONS[place.locationKey]
              }, dayData.activities.filter(a => a.locationKey || a.coordinates).length + idx)}
              isSelected={selectedMarker?.name === place.name}
              showNumber={false}
            />
          ))}

          {/* 路線繪製 */}
          <MapRoute dayId={dayData.id} currentActivityIndex={0} />
        </Map>

        {/* 圖例 */}
        <MapLegend />

        {/* 資訊卡片 */}
        {selectedMarker && (
          <InfoCard
            marker={selectedMarker}
            userPosition={userPosition}
            navigationMode={navigationMode}
            onClose={handleCloseInfoCard}
            onPrev={() => handlePrevNext(-1)}
            onNext={() => handlePrevNext(1)}
            hasPrev={selectedMarkerIndex > 0}
            hasNext={selectedMarkerIndex < allMarkers.length - 1}
            currentIndex={selectedMarkerIndex}
            totalCount={allMarkers.length}
          />
        )}

        {/* 下一站浮動面板（僅在未選擇標記時顯示） */}
        {!selectedMarker && nextActivity && (
          <FloatingNavPanel
            nextActivity={nextActivity}
            userPosition={userPosition}
            navigationMode={navigationMode}
          />
        )}
      </div>
    </APIProvider>
  );
}
