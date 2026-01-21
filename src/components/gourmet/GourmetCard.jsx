import { Utensils, Navigation, Star, Award, MapPinned, Landmark, Car } from 'lucide-react';
import { LOCATIONS } from '@data/locations';
import { getGoogleMapsDirectionsUrl, getDistanceFromUser } from '@utils/helpers';

export default function GourmetCard({ place, userPosition, navigationMode }) {
  // 計算距離
  const distance = userPosition && place.coordinates
    ? getDistanceFromUser(userPosition, place.coordinates)
    : null;

  // 計算經營年數
  const yearsInBusiness = place.foundedYear
    ? new Date().getFullYear() - place.foundedYear
    : null;

  const handleNavigate = () => {
    // 優先使用 coordinates，其次使用 locationKey
    let lat, lng;

    if (place.coordinates?.lat && place.coordinates?.lng) {
      lat = place.coordinates.lat;
      lng = place.coordinates.lng;
    } else if (place.locationKey) {
      const location = LOCATIONS[place.locationKey];
      if (location) {
        lat = location.lat;
        lng = location.lng;
      }
    }

    if (lat && lng) {
      const url = getGoogleMapsDirectionsUrl(
        lat,
        lng,
        navigationMode,
        place.name // 傳遞餐廳名稱讓 Google Maps 搜尋完整景點資訊
      );
      window.open(url, '_blank');
    }
  };

  // 根據是否為老舖或高速公路休息站決定背景色
  const headerGradient = place.shinise
    ? 'from-amber-100 to-yellow-50'
    : place.isSAPA
    ? 'from-blue-50 to-cyan-50'
    : 'from-amber-50 to-orange-100';

  const iconBgColor = place.shinise
    ? 'bg-amber-50'
    : place.isSAPA
    ? 'bg-blue-50'
    : 'bg-white';

  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-card border mb-5 transition-all duration-300 hover:shadow-soft hover:-translate-y-1 group ${place.shinise ? 'border-amber-200' : place.isSAPA ? 'border-blue-200' : 'border-white/60'}`}>
      {/* 頂部圖片區域（漸層背景） */}
      <div className={`h-28 bg-gradient-to-br ${headerGradient} relative`}>
        {/* 老舖徽章 */}
        {place.shinise && yearsInBusiness && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5">
            <Landmark size={14} />
            <span className="text-xs font-bold">{yearsInBusiness}年老舖</span>
          </div>
        )}
        {/* 高速公路休息站徽章 */}
        {place.isSAPA && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5">
            <Car size={14} />
            <span className="text-xs font-bold">高速公路美食</span>
          </div>
        )}
        <div className="absolute top-3 right-3 flex gap-1 flex-wrap justify-end pl-10">
          {place.tags.map((tag, i) => (
            <span
              key={i}
              className={`text-[10px] font-bold bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-pill shadow-sm ${place.shinise ? 'text-amber-800' : place.isSAPA ? 'text-blue-800' : 'text-orange-800'}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className={`absolute -bottom-6 left-5 ${iconBgColor} p-3 rounded-2xl shadow-cute skew-y-0 transition-transform group-hover:scale-110 duration-300`}>
          {place.isSAPA ? (
            <Car size={24} className="text-blue-500" />
          ) : (
            <Utensils size={24} className={place.shinise ? 'text-amber-600' : 'text-amber-500'} />
          )}
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
