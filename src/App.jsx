import { useState } from 'react';
import Header from './components/layout/Header';
import TabNav from './components/layout/TabNav';
import TimelineView from './components/timeline/TimelineView';
import GourmetView from './components/gourmet/GourmetView';
import ShoppingView from './components/shopping/ShoppingView';
import MapView from './components/map/MapView';
import DaySelector from './components/timeline/DaySelector';
import { ITINERARY_DATA_ENHANCED } from './data/itinerary_enhanced';
import { WEATHER_MOCK_DATA } from './data/weatherMock';
import { useGeolocation } from './hooks/useGeolocation';

export default function App() {
  const [activeTab, setActiveTab] = useState('timeline');
  const [activeDayId, setActiveDayId] = useState(1);
  const [navigationMode, setNavigationMode] = useState(true); // true: 導航, false: 查看

  // 獲取用戶當前位置
  const { position: userPosition, error: locationError, loading: locationLoading } = useGeolocation();

  // 獲取當前日期資料
  const currentDayData = ITINERARY_DATA_ENHANCED.find((d) => d.id === activeDayId);

  // 獲取當前天氣資料
  const currentWeather = currentDayData ? WEATHER_MOCK_DATA[currentDayData.isoDate] : null;

  return (
    <div className="min-h-screen font-sans text-gray-800 flex justify-center selection:bg-primary-200">
      <div className="w-full max-w-md relative min-h-screen pb-28">

        {/* Header */}
        <Header
          dayData={currentDayData}
          weather={currentWeather}
          navigationMode={navigationMode}
          setNavigationMode={setNavigationMode}
        />

        {/* Main Content Area */}
        <div className="px-5 -mt-4 relative z-20 space-y-6">

          {/* Day Selector (Context Aware) */}
          {(activeTab === 'timeline' || activeTab === 'map') && (
            <div className="animate-in slide-up">
              <DaySelector
                days={ITINERARY_DATA_ENHANCED}
                activeDay={activeDayId}
                setActiveDay={setActiveDayId}
              />
            </div>
          )}

          {/* Views */}
          <main className="animate-in fade-in transition-all duration-500">
            {activeTab === 'timeline' && (
              <TimelineView
                dayData={currentDayData}
                userPosition={userPosition}
                navigationMode={navigationMode}
              />
            )}

            {activeTab === 'gourmet' && (
              <GourmetView
                dayData={currentDayData}
                allDays={ITINERARY_DATA_ENHANCED}
                activeDayId={activeDayId}
                setActiveDayId={setActiveDayId}
                userPosition={userPosition}
                navigationMode={navigationMode}
              />
            )}

            {activeTab === 'map' && <MapView dayData={currentDayData} userPosition={userPosition} />}

            {activeTab === 'shopping' && <ShoppingView navigationMode={navigationMode} />}
          </main>
        </div>

        {/* Bottom Navigation */}
        <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
