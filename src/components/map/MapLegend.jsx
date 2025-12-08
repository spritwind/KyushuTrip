import { Navigation, Car, Utensils, Star, MapPin, ShoppingBag } from 'lucide-react';

export default function MapLegend() {
  const legends = [
    { icon: Navigation, label: '交通', color: 'bg-blue-500' },
    { icon: Car, label: '自駕', color: 'bg-indigo-600' },
    { icon: Utensils, label: '美食', color: 'bg-amber-500' },
    { icon: Star, label: '景點', color: 'bg-purple-500' },
    { icon: MapPin, label: '住宿', color: 'bg-emerald-600' }
  ];

  return (
    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-gray-200">
      <h4 className="text-xs font-bold text-gray-700 mb-2">圖例</h4>
      <div className="space-y-1.5">
        {legends.map((legend, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${legend.color}`}></div>
            <span className="text-xs text-gray-600">{legend.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
