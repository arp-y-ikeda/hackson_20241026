'use client';

import { useEffect, useState } from 'react';

type Location = { lat: number; lng: number };

/**
 * デバイスの現在地を取得します。ユーザーからの権限取得が必要です。
 * @returns 緯度軽度、エラー内容
 */
export const useCurrentLocation = () => {
  const [location, setLocation] = useState<Location>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('このブラウザでは位置情報を使用できません。');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => setError(err.message)
    );
  }, []);

  return { location, error };
};
