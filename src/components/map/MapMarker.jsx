import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { LOCATIONS } from '@data/locations';
import { ACTIVITY_COLORS } from '@utils/constants';

export default function MapMarker({ activity, place, type, onClick, isSelected }) {
  // 獲取位置資訊
  const locationKey = activity?.locationKey || place?.locationKey;
  const location = locationKey ? LOCATIONS[locationKey] : null;

  if (!location) return null;

  // 根據類型設定顏色
  const activityType = type || activity?.type || 'gourmet';
  const pinColor = type === 'gourmet' ? '#ef4444' : ACTIVITY_COLORS[activityType] || '#6b7280';

  return (
    <AdvancedMarker position={{ lat: location.lat, lng: location.lng }} onClick={onClick}>
      <Pin
        background={pinColor}
        borderColor={isSelected ? '#fff' : pinColor}
        glyphColor="#fff"
        scale={isSelected ? 1.4 : 1}
      />
    </AdvancedMarker>
  );
}
