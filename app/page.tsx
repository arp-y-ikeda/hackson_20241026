import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Destination } from './component/destination';
import { getRandomLocation } from './lib/address';
import MapView from './component/mapView';

export default function Home() {
  const radius = 5000; // 半径5km
  const currentLocation = { lat: 35.681236, lng: 139.767125 }; // 例: 東京駅

  const { lat, lng } = getRandomLocation(currentLocation, radius);

  return (
    <main className="container w-screen h-screen font-[family-name:var(--font-cezannePro-m)]">
      <div className="w-screen h-screen flex flex-col gap-y-2 items-center justify-center">
        <p>♡お散歩だいしゅきクラブ♡</p>
        <MapView />
        <Destination location={{ lat, lng }} />
      </div>
    </main>
  );
}
