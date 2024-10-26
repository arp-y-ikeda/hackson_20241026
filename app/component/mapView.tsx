'use client';

import React, { useEffect, useState } from 'react';

type MapViewProps = {
  startLocation: { lat: number; lng: number };
  endLocation: { lat: number; lng: number };
};

const MapView: React.FC<MapViewProps> = ({ startLocation, endLocation }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`;
    googleMapScript.async = true;
    document.body.appendChild(googleMapScript);

    googleMapScript.onload = () => {
      const mapInstance = new (window as any).google.maps.Map(document.getElementById('map'), {
        center: startLocation,
        zoom: 12,
      });
      setMap(mapInstance);

      // ルート表示の設定
      const directionsService = new (window as any).google.maps.DirectionsService();
      const directionsRenderer = new (window as any).google.maps.DirectionsRenderer();
      directionsRenderer.setMap(mapInstance);

      const request = {
        origin: startLocation,
        destination: endLocation,
        travelMode: (window as any).google.maps.TravelMode.WALKING,
      };

      directionsService.route(request, (result: any, status: any) => {
        if (status === (window as any).google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        } else {
          console.error('ルートの取得に失敗しました: ' + status);
        }
      });

      // 出発地点のマーカーを追加
      new (window as any).google.maps.Marker({
        position: startLocation,
        map: mapInstance,
        title: '出発地点',
        icon: {
          url: '/images/bigMan.png', // カスタムアイコンのURL
          scaledSize: new (window as any).google.maps.Size(150, 300), // アイコンのサイズ調整
        },
        // label: {
        //   text: 'AAAAA', // ラベルテキスト
        //   color: '#FFFFFF', // ラベルの色
        //   fontSize: '16px', // ラベルのフォントサイズ
        // },
      });

      // 目的地のマーカーを追加
      new (window as any).google.maps.Marker({
        position: endLocation,
        map: mapInstance,
        title: '目的地',
        icon: {
          url: '/images/wall.PNG', // カスタムアイコンのURL
          scaledSize: new (window as any).google.maps.Size(200, 200), // アイコンのサイズ調整
        },
      });
    };
  }, [startLocation, endLocation]);

  return <div id="map" className="rounded-md" style={{ width: '80%', height: '80%' }}></div>;
};

export default MapView;
