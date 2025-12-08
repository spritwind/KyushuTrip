import { Store, Navigation, MapPin } from 'lucide-react';
import { getGoogleMapsDirectionsUrl } from '@utils/helpers';

export default function ShoppingCard({ shop }) {
  const handleNavigate = () => {
    if (shop.coordinates) {
      const url = getGoogleMapsDirectionsUrl(shop.coordinates.lat, shop.coordinates.lng);
      window.open(url, '_blank');
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 mb-4 transition-all hover:shadow-md">
      {/* 頂部區域 */}
      <div className="h-20 bg-gradient-to-r from-rose-50 to-pink-50 relative">
        <div className="absolute top-3 right-3 flex gap-1 flex-wrap justify-end max-w-[60%]">
          {shop.tags && shop.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-bold bg-white/90 backdrop-blur text-rose-700 px-2 py-1 rounded-full shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute -bottom-5 left-4 bg-white p-2 rounded-lg shadow-md">
          <Store size={20} className="text-rose-500" />
        </div>
      </div>

      {/* 內容區域 */}
      <div className="pt-7 px-4 pb-4">
        <h3 className="text-base font-bold text-gray-900 mb-1">{shop.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-rose-600 font-medium">{shop.type}</span>
          {shop.coordinates && (
            <div className="flex items-center gap-1 text-gray-500">
              <MapPin size={10} />
              <span className="text-[10px]">可導航</span>
            </div>
          )}
        </div>
        <p className="text-sm text-gray-500 leading-relaxed mb-3">{shop.desc}</p>

        {/* 導航按鈕 */}
        {shop.coordinates && (
          <button
            onClick={handleNavigate}
            className="w-full py-2 bg-rose-500 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-rose-600 transition-colors"
          >
            <Navigation size={14} />
            開啟 Google 導航
          </button>
        )}
      </div>
    </div>
  );
}
