import { Utensils, Navigation } from 'lucide-react';
import { LOCATIONS } from '@data/locations';
import { getGoogleMapsDirectionsUrl } from '@utils/helpers';

export default function GourmetCard({ place }) {
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
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 mb-4 transition-all hover:shadow-md">
      {/* 頂部圖片區域（漸層背景） */}
      <div className="h-24 bg-gradient-to-r from-gray-100 to-gray-200 relative">
        <div className="absolute top-3 right-3 flex gap-1">
          {place.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-bold bg-white/90 backdrop-blur text-indigo-900 px-2 py-1 rounded-full shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute -bottom-6 left-4 bg-white p-2 rounded-lg shadow-md">
          <Utensils size={24} className="text-amber-500" />
        </div>
      </div>

      {/* 內容區域 */}
      <div className="pt-8 px-4 pb-4">
        <h3 className="text-lg font-bold text-gray-900">{place.name}</h3>
        <p className="text-xs text-amber-600 font-medium mb-2">{place.type}</p>
        <p className="text-sm text-gray-500 leading-relaxed">{place.desc}</p>

        {/* 導航按鈕 */}
        <button
          onClick={handleNavigate}
          className="mt-4 w-full py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
        >
          <Navigation size={14} />
          開啟 Google 導航
        </button>
      </div>
    </div>
  );
}
