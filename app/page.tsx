'use client';

import React from 'react';
import { Destination } from './component/destination';
import { getRandomLocation } from './lib/address';
import MapView from './component/mapView';
import { useCurrentLocation } from './hooks/useCurrentLocation';

export default function Home() {
  const radius = 5000;
  const currentLocation = useCurrentLocation();
  if (!currentLocation.location) return;

  const randamLocation = getRandomLocation(currentLocation.location, radius);

  return (
    <main className="container w-screen h-screen font-[family-name:var(--font-cezannePro-m)]">
      <div className="w-screen h-screen flex flex-col gap-y-2 items-center justify-center">
        <p className="font-bold">♡お散歩だいしゅきクラブ♡</p>
        <MapView startLocation={currentLocation.location} endLocation={randamLocation} />
        <Destination location={randamLocation} />
      </div>
    </main>
  );
}
