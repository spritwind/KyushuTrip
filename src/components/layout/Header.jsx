import * as Icons from 'lucide-react';

export default function Header({ dayData, weather }) {
  // 動態獲取天氣圖示元件
  const WeatherIcon = weather?.iconName ? Icons[weather.iconName] : Icons.Snowflake;

  return (
    <div className="bg-indigo-900 text-white p-6 rounded-b-3xl shadow-xl relative overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
        <Snowflake size={120} />
      </div>

      <div className="relative z-10">
        {/* 頭部標題 */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-amber-400 text-sm font-bold tracking-wider uppercase">
              Kyushu Premium Journey
            </h2>
            <h1 className="text-3xl font-bold mt-1">九州極致之旅</h1>
            <p className="text-indigo-200 text-sm mt-1">{dayData?.title}</p>
          </div>

          {/* 天氣小工具 */}
          {weather && (
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl flex flex-col items-center border border-white/20">
              <WeatherIcon size={24} className="mb-1 text-sky-300" />
              <span className="text-xs font-medium">{weather.temp}</span>
              <span className="text-[10px] text-indigo-200 mt-0.5">
                {weather.condition}
              </span>
            </div>
          )}
        </div>

        {/* 天氣警告 */}
        {weather?.warning && (
          <div className="bg-indigo-800/50 p-3 rounded-lg border-l-4 border-amber-500 flex items-start gap-3">
            <Info size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed text-indigo-100">
              <span className="font-bold text-amber-400">天氣管家：</span>
              {weather.warning}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
