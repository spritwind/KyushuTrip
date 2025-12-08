import * as Icons from 'lucide-react';

export default function WeatherWidget({ weather, loading }) {
  if (loading) {
    return (
      <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 animate-pulse">
        <div className="w-16 h-16 bg-white/20 rounded"></div>
      </div>
    );
  }

  if (!weather) {
    return null;
  }

  // 動態獲取天氣圖示元件
  const WeatherIcon = Icons[weather.iconName] || Icons.CloudSun;

  return (
    <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl flex flex-col items-center border border-white/20">
      <WeatherIcon size={24} className="mb-1 text-sky-300" />
      <span className="text-xs font-medium">{weather.temp}</span>
      <span className="text-[10px] text-indigo-200 mt-0.5">{weather.condition}</span>
    </div>
  );
}
