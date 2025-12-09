import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Wind, CloudSun, CloudMoon, Moon, Droplets } from 'lucide-react';

// 動態天氣圖示元件 - 根據天氣狀況顯示動畫效果
export default function AnimatedWeatherIcon({ condition, size = 32, className = "" }) {
  // 根據天氣狀況選擇圖示和動畫
  const getWeatherConfig = (weatherCondition) => {
    const conditionLower = (weatherCondition || '').toLowerCase();

    if (conditionLower.includes('雪') || conditionLower.includes('snow')) {
      return {
        Icon: CloudSnow,
        animation: 'animate-snow',
        particles: 'snow',
        bgGradient: 'from-slate-100 to-blue-100',
        iconColor: 'text-blue-400'
      };
    }
    if (conditionLower.includes('雨') || conditionLower.includes('rain')) {
      return {
        Icon: CloudRain,
        animation: 'animate-rain',
        particles: 'rain',
        bgGradient: 'from-gray-200 to-blue-200',
        iconColor: 'text-blue-500'
      };
    }
    if (conditionLower.includes('雷') || conditionLower.includes('thunder')) {
      return {
        Icon: CloudLightning,
        animation: 'animate-flash',
        particles: null,
        bgGradient: 'from-gray-300 to-purple-200',
        iconColor: 'text-purple-500'
      };
    }
    if (conditionLower.includes('多雲') || conditionLower.includes('cloudy')) {
      return {
        Icon: Cloud,
        animation: 'animate-float',
        particles: null,
        bgGradient: 'from-gray-100 to-gray-200',
        iconColor: 'text-gray-500'
      };
    }
    if (conditionLower.includes('晴') || conditionLower.includes('sun') || conditionLower.includes('clear')) {
      return {
        Icon: Sun,
        animation: 'animate-spin-slow',
        particles: 'rays',
        bgGradient: 'from-yellow-100 to-orange-100',
        iconColor: 'text-yellow-500'
      };
    }
    // 預設：晴時多雲
    return {
      Icon: CloudSun,
      animation: 'animate-float',
      particles: null,
      bgGradient: 'from-blue-50 to-yellow-50',
      iconColor: 'text-amber-500'
    };
  };

  const config = getWeatherConfig(condition);
  const { Icon, animation, particles, iconColor } = config;

  return (
    <div className={`relative ${className}`}>
      {/* 粒子效果 */}
      {particles === 'snow' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-80"
              style={{
                left: `${15 + i * 15}%`,
                animation: `snowfall ${1.5 + i * 0.3}s linear infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      )}

      {particles === 'rain' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-2 bg-blue-400 rounded-full opacity-60"
              style={{
                left: `${20 + i * 15}%`,
                animation: `rainfall ${0.8 + i * 0.15}s linear infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      )}

      {particles === 'rays' && (
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(251,191,36,0.4) 0%, transparent 70%)',
              animation: 'pulse 2s ease-in-out infinite'
            }}
          />
        </div>
      )}

      {/* 主圖示 */}
      <Icon
        size={size}
        className={`${iconColor} ${animation} relative z-10 drop-shadow-sm`}
      />
    </div>
  );
}
