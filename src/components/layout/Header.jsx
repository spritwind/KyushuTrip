import * as Icons from 'lucide-react';

export default function Header({ dayData, weather, navigationMode, setNavigationMode }) {
  const WeatherIcon = weather?.iconName ? Icons[weather.iconName] : Icons.CloudSun;

  return (
    <div className="relative pt-10 pb-8 px-6 text-gray-800 overflow-visible z-10">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-primary-200/40 rounded-full blur-[80px] -z-10 animate-float"></div>
      <div className="absolute top-[20px] right-[-20px] w-48 h-48 bg-accent-200/40 rounded-full blur-[60px] -z-10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="flex justify-between items-start">
        {/* Title Section */}
        <div className="animate-in slide-in-from-right">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/60 backdrop-blur-sm rounded-full border border-white/50 mb-3 shadow-sm">
            <Icons.Sparkles size={12} className="text-primary-500" />
            <span className="text-[10px] font-bold tracking-wider text-primary-700 uppercase">Kyushu Family Trip</span>
          </div>

          <h1 className="text-3xl font-display font-extrabold text-gray-800 leading-tight">
            九州<span className="text-primary-500">極致</span>之旅
          </h1>

          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <Icons.CalendarHeart size={16} className="text-primary-400" />
            <span className="text-sm font-bold bg-white/40 px-2 py-0.5 rounded-md">
              {dayData.date}
            </span>
          </div>
        </div>

        {/* Weather Card */}
        {weather && (
          <div className="glass-card rounded-3xl p-3 flex flex-col items-center justify-center min-w-[70px] aspect-[3/4] animate-in zoom-in">
            <WeatherIcon size={24} className="text-accent-500 mb-1" />
            <span className="text-xl font-bold text-gray-700">{weather.temp}°</span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide mt-0.5">{weather.condition}</span>
          </div>
        )}
      </div>

      {/* Sub-header Info */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 bg-white/30 px-3 py-1.5 rounded-2xl backdrop-blur-sm">
          <Icons.MapPin size={14} className="text-primary-500" />
          <span>{dayData.location || "Kyushu, Japan"}</span>
        </div>

        {dayData.stay && (
          <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
            <Icons.Hotel size={13} />
            <span className="max-w-[120px] truncate">{dayData.stay}</span>
          </div>
        )}
      </div>

      {/* 導航模式切換按鈕 */}
      <div className="mt-4 flex items-center justify-center">
        <div className="inline-flex items-center bg-white/60 backdrop-blur-md rounded-full p-1 shadow-sm border border-white/50">
          <button
            onClick={() => setNavigationMode(true)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              navigationMode
                ? 'bg-primary-500 text-white shadow-cute'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Icons.Navigation size={12} />
            <span>導航</span>
          </button>
          <button
            onClick={() => setNavigationMode(false)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              !navigationMode
                ? 'bg-success-500 text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Icons.MapPin size={12} />
            <span>查看</span>
          </button>
        </div>
      </div>
    </div>
  );
}
