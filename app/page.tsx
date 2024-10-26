'use client';

import React from 'react';
import ReactHowler from 'react-howler';
import { Destination } from './component/destination';
import { getRandomLocation } from './lib/address';
import MapView from './component/mapView';
import { useCurrentLocation } from './hooks/useCurrentLocation';
import Image from 'next/image';

export default function Home() {
  const radius = 5000;
  const currentLocation = useCurrentLocation();
  if (!currentLocation.location) return;

  const randamLocation = getRandomLocation(currentLocation.location, radius);

  return (
    <main
      className="w-screen h-screen font-[family-name:var(--font-cezannePro-m)]"
      style={{ backgroundImage: "url('/images/wallPaper.jpg')" }}
    >
      <div className="w-screen h-screen flex flex-col gap-y-2 items-center justify-center">
        <Image
          src={'/images/title.png'}
          alt="♡お散歩だいしゅきクラブ♡"
          layout="intrinsic"
          width={650}
          height={350}
          objectFit="cover"
          className="my-[-80px]"
        />
        <MapView startLocation={currentLocation.location} endLocation={randamLocation} />
        <Destination location={randamLocation} />
      </div>
      <ReactHowler src="/music/attackOnTitan.mp3" playing loop />
    </main>
  );
}
