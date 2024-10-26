'use client';

import React, { useEffect, useState } from 'react';

type MapViewProps = {
  startLocation: { lat: number; lng: number };
  endLocation: { lat: number; lng: number };
};

const MapView: React.FC<MapViewProps> = ({ startLocation, endLocation }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`;
    googleMapScript.async = true;
    document.body.appendChild(googleMapScript);

    googleMapScript.onload = () => {
      const map = new (window as any).google.maps.Map(document.getElementById('map'), {
        center: startLocation, // 中心の座標
        zoom: 12,
      });
      setMap(map);

      // ルート表示の設定
      const directionsService = new (window as any).google.maps.DirectionsService();
      const directionsRenderer = new (window as any).google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);

      const start = startLocation; // 出発地点
      const end = endLocation; // 目的地

      const request = {
        origin: start,
        destination: end,
        travelMode: (window as any).google.maps.TravelMode.WALKING, // 移動手段を指定
      };

      directionsService.route(request, (result: any, status: any) => {
        if (status === (window as any).google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        } else {
          console.error('ルートの取得に失敗しました: ' + status);
        }
      });
    };
  }, []);

  return <div id="map" style={{ width: '80%', height: '80%' }}></div>;
};

export default MapView;
