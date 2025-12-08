import { Utensils, Navigation, Star, Award, MapPinned } from 'lucide-react';
import { LOCATIONS } from '@data/locations';
import { getGoogleMapsDirectionsUrl, getDistanceFromUser } from '@utils/helpers';

export default function GourmetCard({ place, userPosition }) {
  // 計算距離
  const distance = userPosition && place.coordinates
    ? getDistanceFromUser(userPosition, place.coordinates)
    : null;
  const handleNavigate = () => {
    if (place.locationKey) {
      const location = LOCATIONS[place.locationKey];
      if (location) {
        const url = getGoogleMapsDirectionsUrl(location.lat, location.lng);
        window.open(url, '_blank');
      }
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-card border border-white/60 mb-5 transition-all duration-300 hover:shadow-soft hover:-translate-y-1 group">
      {/* 頂部圖片區域（漸層背景） */}
      <div className="h-28 bg-gradient-to-br from-amber-50 to-orange-100 relative">
        <div className="absolute top-3 right-3 flex gap-1 flex-wrap justify-end pl-10">
          {place.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-bold bg-white/80 backdrop-blur-md text-orange-800 px-2.5 py-1 rounded-pill shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute -bottom-6 left-5 bg-white p-3 rounded-2xl shadow-cute skew-y-0 transition-transform group-hover:scale-110 duration-300">
          <Utensils size={24} className="text-amber-500" />
        </div>
      </div>

      {/* 內容區域 */}
      <div className="pt-10 px-5 pb-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-800 flex-1 leading-tight">{place.name}</h3>
          {place.michelin && (
            <div className="ml-2 bg-red-50 px-2 py-1 rounded-lg flex items-center gap-1 border border-red-100">
              <Award size={14} className="text-red-500" />
              <span className="text-[10px] font-bold text-red-600">米其林</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <p className="text-xs text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded-md">{place.type}</p>
          {place.googleRating && (
            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded-full border border-yellow-100">
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-bold text-yellow-700">{place.googleRating}</span>
            </div>
          )}
          {distance && (
            <div className="flex items-center gap-1 bg-success-50 px-2 py-0.5 rounded-full border border-success-200">
              <MapPinned size={12} className="text-success-600" />
              <span className="text-xs font-bold text-success-700">{distance}</span>
            </div>
          )}
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-4">{place.desc}</p>

        {/* 導航按鈕 */}
        <button
          onClick={handleNavigate}
          className="w-full py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95 transition-all"
        >
          <Navigation size={16} />
          Go!
        </button>
      </div>
    </div>
  );
}
