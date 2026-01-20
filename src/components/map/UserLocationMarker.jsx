import { AdvancedMarker } from '@vis.gl/react-google-maps';
import { USER_LOCATION_CONFIG } from '@config/maps';

export default function UserLocationMarker({ position }) {
  if (!position) return null;

  const { dotColor, pulseColor, dotSize, pulseSize } = USER_LOCATION_CONFIG;

  return (
    <AdvancedMarker position={{ lat: position.lat, lng: position.lng }}>
      <div className="relative flex items-center justify-center">
        {/* 精確度圈 */}
        {position.accuracy && position.accuracy < 200 && (
          <div
            className="absolute rounded-full opacity-20"
            style={{
              width: Math.min(position.accuracy * 0.5, 80),
              height: Math.min(position.accuracy * 0.5, 80),
              backgroundColor: dotColor
            }}
          />
        )}

        {/* 脈動動畫圈 */}
        <div
          className="absolute rounded-full animate-ping"
          style={{
            width: pulseSize,
            height: pulseSize,
            backgroundColor: pulseColor
          }}
        />

        {/* 外圈 */}
        <div
          className="absolute rounded-full border-2 border-white shadow-md"
          style={{
            width: dotSize + 8,
            height: dotSize + 8,
            backgroundColor: 'rgba(37, 99, 235, 0.2)'
          }}
        />

        {/* 藍點本體 */}
        <div
          className="rounded-full shadow-lg"
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: dotColor,
            border: '3px solid white'
          }}
        />
      </div>
    </AdvancedMarker>
  );
}
