import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import { DAILY_ROUTES } from '@data/locations';

export default function MapRoute({ dayId }) {
  const map = useMap();
  const geometryLibrary = useMapsLibrary('geometry');
  const [polyline, setPolyline] = useState(null);

  useEffect(() => {
    if (!map || !geometryLibrary) return;

    const routeKey = `day${dayId}`;
    const path = DAILY_ROUTES[routeKey];

    if (!path || path.length === 0) return;

    // 建立 Polyline
    const line = new google.maps.Polyline({
      path: path.map((loc) => ({ lat: loc.lat, lng: loc.lng })),
      geodesic: true,
      strokeColor: '#4338ca',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      map: map
    });

    setPolyline(line);

    // 清理函式
    return () => {
      if (line) {
        line.setMap(null);
      }
    };
  }, [map, geometryLibrary, dayId]);

  return null;
}
