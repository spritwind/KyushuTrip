import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { useEffect, useRef } from 'react';
import { DAILY_ROUTES } from '@data/locations';
import { ROUTE_CONFIG } from '@config/maps';

export default function MapRoute({ dayId, currentActivityIndex = 0 }) {
  const map = useMap();
  const geometryLibrary = useMapsLibrary('geometry');
  const polylinesRef = useRef([]);

  useEffect(() => {
    if (!map || !geometryLibrary) return;

    const routeKey = `day${dayId}`;
    const path = DAILY_ROUTES[routeKey];

    if (!path || path.length < 2) return;

    // 清理舊的 polylines
    polylinesRef.current.forEach(line => line.setMap(null));
    polylinesRef.current = [];

    // 為每一段路線創建單獨的 Polyline
    for (let i = 0; i < path.length - 1; i++) {
      const segmentPath = [
        { lat: path[i].lat, lng: path[i].lng },
        { lat: path[i + 1].lat, lng: path[i + 1].lng }
      ];

      // 決定路線樣式
      let config;
      if (i < currentActivityIndex) {
        config = ROUTE_CONFIG.completed;
      } else if (i === currentActivityIndex) {
        config = ROUTE_CONFIG.current;
      } else {
        config = ROUTE_CONFIG.upcoming;
      }

      // 創建虛線 Polyline
      const line = new google.maps.Polyline({
        path: segmentPath,
        geodesic: true,
        strokeColor: config.color,
        strokeOpacity: 0,
        strokeWeight: 0,
        map: map,
        icons: [
          // 虛線效果
          {
            icon: {
              path: 'M 0,-1 0,1',
              strokeOpacity: config.opacity,
              strokeColor: config.color,
              scale: 3
            },
            offset: '0',
            repeat: '12px'
          },
          // 箭頭指示方向（只在進行中的路線顯示）
          ...(i === currentActivityIndex ? [{
            icon: {
              path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
              fillColor: config.color,
              fillOpacity: 0.9,
              strokeWeight: 1,
              strokeColor: '#fff',
              scale: 3.5
            },
            offset: '50%'
          }] : [])
        ]
      });

      polylinesRef.current.push(line);
    }

    return () => {
      polylinesRef.current.forEach(line => line.setMap(null));
      polylinesRef.current = [];
    };
  }, [map, geometryLibrary, dayId, currentActivityIndex]);

  return null;
}
