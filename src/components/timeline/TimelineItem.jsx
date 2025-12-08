import {
  Navigation,
  Car,
  Utensils,
  ShoppingBag,
  Star,
  MapPin,
  Map,
  Circle,
  Clock
} from 'lucide-react';

export default function TimelineItem({ activity, isLast }) {
  const getIcon = (type) => {
    switch (type) {
      case 'transport':
        return <Navigation size={18} className="text-blue-500" />;
      case 'drive':
        return <Car size={18} className="text-indigo-600" />;
      case 'food':
        return <Utensils size={18} className="text-amber-500" />;
      case 'shopping':
        return <ShoppingBag size={18} className="text-rose-500" />;
      case 'highlight':
        return <Star size={18} className="text-purple-500" />;
      case 'stay':
        return <MapPin size={18} className="text-emerald-600" />;
      case 'sight':
        return <Map size={18} className="text-cyan-600" />;
      default:
        return <Circle size={18} className="text-gray-400" />;
    }
  };

  return (
    <div className="flex gap-4 relative" id={`activity-${activity.time}`}>
      {/* Time Column */}
      <div className="flex flex-col items-center w-12 flex-shrink-0">
        <span className="text-xs font-bold text-gray-500 font-mono">{activity.time}</span>
        <div className={`h-full w-0.5 mt-2 ${isLast ? 'bg-transparent' : 'bg-gray-200'}`}></div>
      </div>

      {/* Content Column */}
      <div className="flex-1 pb-8 group">
        <div className="flex items-start gap-3">
          <div className="mt-0 bg-white p-2 rounded-full shadow-sm border border-gray-100 z-10 relative">
            {getIcon(activity.type)}
          </div>

          <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-gray-50 transition-all hover:shadow-md hover:border-indigo-100">
            <h3
              className={`font-bold text-gray-800 ${
                activity.type === 'highlight' ? 'text-indigo-900' : ''
              }`}
            >
              {activity.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">{activity.detail}</p>

            {/* Smoothness Indicator for Driving */}
            {activity.type === 'drive' && activity.duration && (
              <div className="mt-3 bg-indigo-50 rounded-lg p-2.5 flex items-center gap-3">
                <Clock size={14} className="text-indigo-400" />
                <div className="flex-1">
                  <div className="flex justify-between text-xs text-indigo-600 mb-1">
                    <span>移動耗時</span>
                    <span className="font-bold">{activity.duration}</span>
                  </div>
                  <div className="h-1.5 bg-indigo-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
