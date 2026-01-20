import { Utensils } from 'lucide-react';
import GourmetCard from './GourmetCard';
import RouteGourmetSearch from './RouteGourmetSearch';
import DaySelector from '../timeline/DaySelector';

export default function GourmetView({ dayData, allDays, activeDayId, setActiveDayId, userPosition, navigationMode }) {
  return (
    <div className="animate-in slide-in-from-right duration-300">
      {/* 標題 */}
      <h2 className="text-xl font-bold mb-4 px-2 text-indigo-900 flex items-center gap-2">
        <Utensils size={20} className="text-amber-500" />
        極致美食雷達
      </h2>
      <p className="text-xs text-gray-500 mb-6 px-2">
        精選 Google 4.5+ 星級與米其林推薦名店
      </p>

      {/* 日期選擇器 */}
      <DaySelector days={allDays} activeDay={activeDayId} setActiveDay={setActiveDayId} />

      {/* 沿途美食搜尋 */}
      <div className="mt-4">
        <RouteGourmetSearch
          dayData={dayData}
          allDays={allDays}
          userPosition={userPosition}
          navigationMode={navigationMode}
        />
      </div>

      {/* 當日推薦美食 */}
      <div className="mt-2">
        <h3 className="text-sm font-bold text-gray-600 mb-3 px-1 flex items-center gap-2">
          <span className="w-1 h-4 bg-amber-400 rounded-full"></span>
          本日推薦
        </h3>
        {dayData.gourmet && dayData.gourmet.length > 0 ? (
          dayData.gourmet.map((place, index) => (
            <GourmetCard
              key={index}
              place={place}
              userPosition={userPosition}
              navigationMode={navigationMode}
            />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>本日暫無美食推薦</p>
          </div>
        )}
      </div>
    </div>
  );
}
