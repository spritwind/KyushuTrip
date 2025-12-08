import { MapPin } from 'lucide-react';
import TimelineItem from './TimelineItem';

export default function TimelineView({ dayData }) {
  return (
    <div className="space-y-4 pb-12">
      {/* 住宿資訊 */}
      {dayData.stay && (
        <div className="flex items-center gap-2 mb-2 px-1 animate-in fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="bg-white/80 p-2 rounded-full shadow-sm text-primary-500">
            <MapPin size={14} />
          </div>
          <span className="text-xs font-bold text-gray-500 bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
            今晚住：{dayData.stay}
          </span>
        </div>
      )}

      {/* 行程時間軸 */}
      <div className="relative pl-4 space-y-6">
        {/* Continuous Line Background */}
        <div className="absolute left-[27px] top-4 bottom-4 w-0.5 border-l-2 border-dashed border-gray-200 z-0"></div>

        {dayData.activities.map((activity, index) => (
          <TimelineItem
            key={index}
            activity={activity}
            isLast={index === dayData.activities.length - 1}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
