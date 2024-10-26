import { useEffect, useState } from 'react';

type Location = {
  /** 緯度 */
  latitude: number;
  /** 経度 */
  longitude: number;
};

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
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => setError(err.message)
    );
  }, []);

  return { location, error };
};
