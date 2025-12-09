import * as Icons from 'lucide-react';
import AnimatedWeatherIcon from '@components/weather/AnimatedWeatherIcon';

// 每日主要景點地標配置 (完整 8 天)
const DAY_LANDMARKS = {
  1: { icon: 'Plane', name: '福岡', subtext: '博多' },
  2: { icon: 'Flame', name: '別府', subtext: '地獄巡禮' },
  3: { icon: 'Snowflake', name: '由布院', subtext: '金鱗湖' },
  4: { icon: 'Mountain', name: '阿蘇', subtext: '大觀峰' },
  5: { icon: 'Sparkles', name: '阿蘇', subtext: '草千里' },
  6: { icon: 'Car', name: '福岡', subtext: '天神' },
  7: { icon: 'ShoppingBag', name: '福岡', subtext: '鋼彈' },
  8: { icon: 'PlaneTakeoff', name: '福岡', subtext: '返程' }
};

export default function Header({ dayData, weather, navigationMode, setNavigationMode }) {
  const landmark = DAY_LANDMARKS[dayData.id] || { icon: 'MapPin', name: dayData.location, subtext: '' };
  const LandmarkIcon = Icons[landmark.icon] || Icons.MapPin;

  // 從溫度字串提取數字（如 "4°C - 9°C" -> "4~9"）
  const formatTemp = (temp) => {
    if (!temp) return '--';
    const matches = temp.match(/-?\d+/g);
    if (matches && matches.length >= 2) {
      return `${matches[0]}~${matches[1]}`;
    }
    return temp.replace('°C', '').replace(' ', '');
  };

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

        {/* Enhanced Weather & Landmark Card */}
        {weather && (
          <div className="glass-card rounded-3xl p-3 flex flex-col items-center justify-center min-w-[85px] animate-in zoom-in relative overflow-hidden">
            {/* 背景裝飾 */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />

            {/* 動態天氣圖示 */}
            <div className="relative mb-1">
              <AnimatedWeatherIcon
                condition={weather.condition}
                size={28}
              />
            </div>

            {/* 溫度 */}
            <span className="text-lg font-bold text-gray-700 leading-tight">
              {formatTemp(weather.temp)}°
            </span>

            {/* 天氣狀況 */}
            <span className="text-[9px] font-bold text-gray-400 tracking-wide mb-2">
              {weather.condition}
            </span>

            {/* 分隔線 */}
            <div className="w-10 h-px bg-gray-200 mb-2" />

            {/* 景點地標 */}
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center mb-1">
                <LandmarkIcon size={14} className="text-primary-500" />
              </div>
              <span className="text-[10px] font-bold text-gray-600">{landmark.name}</span>
              <span className="text-[8px] text-gray-400">{landmark.subtext}</span>
            </div>
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
