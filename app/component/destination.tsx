'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import { ReactNode } from 'react';

type DestinationProps = {
  location: { lat: number; lng: number };
};

export const Destination: React.FC<DestinationProps> = ({ location }) => {
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    (async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${apiKey}&language=ja`
      );
      const data = await response.json();
      setAddress(data.results[0]?.formatted_address || '【エラー】住所が見つかりません');
    })();
  }, []);

  return (
    <div className="flex items-center gap-2 text-white">
      <span>ここまで歩こう！！→</span>
      <div className="text-xl font-bold">{address.replace('日本、', '')}</div>
    </div>
  );
};
