import { MapPin } from 'lucide-react';
import TimelineItem from './TimelineItem';

export default function TimelineView({ dayData }) {
  return (
    <div className="space-y-2 animate-in fade-in duration-500">
      {/* 住宿資訊 */}
      <div className="flex items-center gap-2 mb-4 px-2">
        <MapPin size={16} className="text-amber-500" />
        <span className="text-sm font-bold text-gray-600">住宿：{dayData.stay}</span>
      </div>

      {/* 行程時間軸 */}
      <div className="pl-2">
        {dayData.activities.map((activity, index) => (
          <TimelineItem
            key={index}
            activity={activity}
            isLast={index === dayData.activities.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
