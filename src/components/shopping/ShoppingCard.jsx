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
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-card border border-white/60 mb-4 transition-all duration-300 hover:shadow-soft hover:-translate-y-1">
      {/* 頂部區域 */}
      <div className="h-24 bg-gradient-to-br from-rose-50 to-pink-100 relative">
        <div className="absolute top-3 right-3 flex gap-1 flex-wrap justify-end max-w-[70%]">
          {shop.tags && shop.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-bold bg-white/80 backdrop-blur text-rose-600 px-2.5 py-1 rounded-pill shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute -bottom-5 left-5 bg-white p-2.5 rounded-2xl shadow-cute">
          <Store size={22} className="text-rose-400" />
        </div>
      </div>

      {/* 內容區域 */}
      <div className="pt-9 px-5 pb-5">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{shop.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-rose-500 font-bold bg-rose-50 px-2 py-0.5 rounded-md">{shop.type}</span>
          {shop.coordinates && (
            <div className="flex items-center gap-1.5 text-gray-400 border border-gray-100 px-2 py-0.5 rounded-full">
              <MapPin size={10} />
              <span className="text-[10px]">可導航</span>
            </div>
          )}
        </div>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{shop.desc}</p>

        {/* 導航按鈕 */}
        {shop.coordinates && (
          <button
            onClick={handleNavigate}
            className="w-full py-2.5 bg-gradient-to-r from-rose-400 to-pink-500 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95 transition-all"
          >
            <Navigation size={16} />
            帶我去買!
          </button>
        )}
      </div>
    </div>
  );
}
