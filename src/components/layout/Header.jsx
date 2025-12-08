import * as Icons from 'lucide-react';

export default function Header({ dayData, weather }) {
  // 動態獲取天氣圖示元件
  const WeatherIcon = weather?.iconName ? Icons[weather.iconName] : Icons.Snowflake;

  return (
    <div className="gradient-primary text-white px-6 pt-8 pb-12 relative overflow-hidden">
      {/* 裝飾背景圓形 - 更柔和 */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/5 rounded-full blur-2xl"></div>

      {/* 可愛裝飾元素 */}
      <div className="absolute top-6 right-6 text-white/20 text-4xl">✈️</div>
      <div className="absolute bottom-8 left-8 text-white/15 text-3xl">🗾</div>

      {/* 內容 */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          {/* 標題區域 - 更優雅 */}
          <div className="flex-1">
            <div className="text-accent-200 text-[10px] font-bold tracking-widest uppercase mb-2 flex items-center gap-1.5">
              <Icons.Sparkles size={12} />
              <span>Family Journey</span>
            </div>
            <h1 className="text-2xl font-bold mb-2 leading-tight tracking-tight">
              彥杰 & 文臻 & <br/>馨云馨予
              <span className="block text-lg font-medium mt-1 text-white/90">九州極致之旅</span>
            </h1>
            <p className="text-sm text-white/80 flex items-center gap-2 mt-2 font-medium">
              <Icons.Calendar size={15} className="text-white/70" />
              {dayData.date} · {dayData.title}
            </p>
          </div>

          {/* 天氣卡片 - 玻璃效果 */}
          {weather && (
            <div className="glass-effect rounded-2xl p-3 min-w-[85px] text-center shadow-soft backdrop-blur-md bg-white/15">
              <WeatherIcon size={32} className="text-white mx-auto mb-1.5" />
              <span className="text-2xl font-bold block">{weather.temp}°</span>
              <span className="text-[10px] text-white/70 font-medium uppercase tracking-wide">
                {weather.condition}
              </span>
            </div>
          )}
        </div>

        {/* 住宿資訊 - 更時尚 */}
        {dayData.stay && (
          <div className="glass-effect rounded-xl px-4 py-2.5 mt-4 flex items-center gap-2.5 shadow-soft backdrop-blur-md bg-white/10">
            <div className="bg-white/20 p-1.5 rounded-lg">
              <Icons.Hotel size={16} className="text-white" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] text-white/60 uppercase tracking-wide font-medium block">Tonight</span>
              <span className="text-sm font-semibold">{dayData.stay}</span>
            </div>
          </div>
        )}

        {/* 天氣警告 - 柔和版 */}
        {weather?.warning && (
          <div className="glass-effect backdrop-blur-md bg-accent-500/20 p-3 rounded-xl border border-accent-400/30 flex items-start gap-3 mt-4">
            <Icons.Info size={18} className="text-accent-200 flex-shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed text-white/90">
              <span className="font-bold text-accent-200">天氣提醒：</span>
              {weather.warning}
            </p>
          </div>
        )}

        {/* 底部資訊列 - 精簡 */}
        <div className="flex items-center justify-between text-[11px] text-white/60 mt-5 pt-4 border-t border-white/15">
          <div className="flex items-center gap-1.5 font-medium">
            <Icons.MapPin size={13} className="text-white/50" />
            <span>{dayData.location || 'Kyushu'}</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Icons.Sparkles size={13} className="text-white/50" />
            <span>AI 智能規劃</span>
          </div>
        </div>
      </div>
    </div>
  );
}
