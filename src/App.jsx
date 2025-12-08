import { useState } from 'react';
import Header from './components/layout/Header';
import TabNav from './components/layout/TabNav';
import TimelineView from './components/timeline/TimelineView';
import GourmetView from './components/gourmet/GourmetView';
import ShoppingView from './components/shopping/ShoppingView';
import MapView from './components/map/MapView';
import DaySelector from './components/timeline/DaySelector';
import { ITINERARY_DATA } from './data/itinerary';
import { WEATHER_MOCK_DATA } from './data/weatherMock';

export default function App() {
  const [activeTab, setActiveTab] = useState('timeline');
  const [activeDayId, setActiveDayId] = useState(1);

  // 獲取當前日期資料
  const currentDayData = ITINERARY_DATA.find((d) => d.id === activeDayId);

  // 獲取當前天氣資料（暫時使用 Mock 資料）
  const currentWeather = currentDayData ? WEATHER_MOCK_DATA[currentDayData.isoDate] : null;

  return (
    <div className="min-h-screen bg-slate-50 pb-24 font-sans text-gray-900 max-w-md mx-auto shadow-2xl overflow-hidden relative">
      {/* Header */}
      <Header dayData={currentDayData} weather={currentWeather} />

      {/* Main Content Area */}
      <div className="px-4 -mt-6 relative z-20">
        {/* Timeline View - 行程 */}
        {activeTab === 'timeline' && (
          <>
            <div className="bg-white rounded-2xl shadow-lg p-1 mb-6">
              <DaySelector
                days={ITINERARY_DATA}
                activeDay={activeDayId}
                setActiveDay={setActiveDayId}
              />
            </div>
            <TimelineView dayData={currentDayData} />
          </>
        )}

        {/* Gourmet View - 美食 */}
        {activeTab === 'gourmet' && (
          <GourmetView
            dayData={currentDayData}
            allDays={ITINERARY_DATA}
            activeDayId={activeDayId}
            setActiveDayId={setActiveDayId}
          />
        )}

        {/* Map View - 地圖 */}
        {activeTab === 'map' && (
          <div className="animate-in zoom-in duration-300">
            <div className="bg-white rounded-2xl shadow-lg p-1 mb-6">
              <DaySelector
                days={ITINERARY_DATA}
                activeDay={activeDayId}
                setActiveDay={setActiveDayId}
              />
            </div>
            <MapView dayData={currentDayData} />
          </div>
        )}

        {/* Shopping View - 必買清單 */}
        {activeTab === 'shopping' && <ShoppingView />}
      </div>

      {/* Bottom Navigation */}
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
