import {
  Navigation,
  Car,
  Utensils,
  ShoppingBag,
  Star,
  MapPin,
  Map,
  Circle,
  Clock,
  Camera,
  MapPinned
} from 'lucide-react';
import { getDistanceFromUser, getGoogleMapsDirectionsUrl } from '@utils/helpers';

export default function TimelineItem({ activity, isLast, index, userPosition }) {
  // 計算距離
  const distance = userPosition && activity.coordinates
    ? getDistanceFromUser(userPosition, activity.coordinates)
    : null;

  // 導航處理
  const handleNavigate = () => {
    if (activity.coordinates) {
      const url = getGoogleMapsDirectionsUrl(activity.coordinates.lat, activity.coordinates.lng);
      window.open(url, '_blank');
    }
  };
  const getIcon = (type) => {
    switch (type) {
      case 'transport': return <Navigation size={18} className="text-blue-400" />;
      case 'drive': return <Car size={18} className="text-primary-400" />;
      case 'food': return <Utensils size={18} className="text-accent-400" />;
      case 'shopping': return <ShoppingBag size={18} className="text-pink-400" />;
      case 'highlight': return <Star size={18} className="text-yellow-400 fill-yellow-400" />;
      case 'stay': return <MapPin size={18} className="text-green-500" />;
      case 'sight': return <Camera size={18} className="text-indigo-400" />;
      default: return <Circle size={18} className="text-gray-300" />;
    }
  };

  const getTypeStyle = (type) => {
    if (type === 'highlight') return 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-100';
    if (type === 'food') return 'bg-white border-accent-100';
    return 'bg-white border-white/60';
  };

  return (
    <div
      className="relative z-10 animate-in slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex gap-4">
        {/* Time & Icon Column */}
        <div className="flex flex-col items-center flex-shrink-0 w-14 pt-1">
          <div className="bg-white p-2.5 rounded-full shadow-cute border border-white z-10 mb-2 transition-transform hover:scale-110 active:scale-95 duration-300">
            {getIcon(activity.type)}
          </div>
          <span className="text-[10px] font-bold text-gray-400 bg-white/60 px-2 rounded-full backdrop-blur-sm">
            {activity.time}
          </span>
        </div>

        {/* Content Bubble */}
        <div className="flex-1 min-w-0">
          <div
            className={`relative p-4 rounded-3xl shadow-card hover:shadow-soft transition-all duration-300 group ${getTypeStyle(activity.type)}`}
          >
            {/* Cute connector triangle */}
            <div className="absolute top-5 -left-2 w-4 h-4 bg-white transform rotate-45 rounded-sm z-0"></div>

            <div className="relative z-10">
              <h3 className={`font-bold text-base mb-1 ${activity.type === 'highlight' ? 'text-gray-800' : 'text-gray-700'
                }`}>
                {activity.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {activity.detail}
              </p>

              {/* 距離與導航 */}
              <div className="mt-3 flex items-center gap-2">
                {distance && (
                  <div className="inline-flex items-center gap-1.5 text-xs bg-success-50 text-success-700 px-2.5 py-1 rounded-full font-medium border border-success-200">
                    <MapPinned size={12} />
                    <span>距離您 {distance}</span>
                  </div>
                )}
                {activity.coordinates && (
                  <button
                    onClick={handleNavigate}
                    className="inline-flex items-center gap-1.5 text-xs bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 rounded-full font-bold shadow-sm hover:shadow-md active:scale-95 transition-all"
                  >
                    <Navigation size={12} />
                    <span>Go!</span>
                  </button>
                )}
              </div>

              {/* Driving details */}
              {activity.type === 'drive' && activity.duration && (
                <div className="mt-3 bg-primary-50/50 rounded-xl p-2.5 flex items-center gap-3 border border-primary-100/30">
                  <div className="bg-white p-1.5 rounded-full text-primary-400">
                    <Clock size={12} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs text-primary-600 mb-1 font-bold">
                      <span>移動時間</span>
                      <span>{activity.duration}</span>
                    </div>
                    <div className="h-1.5 bg-white rounded-full overflow-hidden">
                      <div className="h-full bg-primary-300 rounded-full w-[80%]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
