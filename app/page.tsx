'use client';

import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import { Destination } from './component/destination';
import { getRandomLocation } from './lib/address';
import MapView from './component/mapView';
import { useCurrentLocation } from './hooks/useCurrentLocation';
import Image from 'next/image';
import { Button } from './component/button';
import { cn } from './lib/util';

export default function Home() {
  const [start, setStart] = useState<boolean>(false);

  const radius = 5000;
  const currentLocation = useCurrentLocation();
  if (!currentLocation.location) return;

  const randamLocation = getRandomLocation(currentLocation.location, radius);

  return (
    <main
      className={cn(
        'w-screen h-screen font-[family-name:var(--font-cezannePro-m)] overflow-hidden',
        !start && 'cursor-pointer'
      )}
      style={{ backgroundImage: "url('/images/wallPaper.jpg')" }}
      onClick={() => !start && setStart(true)}
    >
      <div className="w-screen h-screen flex flex-col gap-y-2 items-center justify-center">
        {!start && (
          <div className="flex flex-col items-center">
            <Image
              src={'/images/title.png'}
              alt="♡お散歩だいしゅきクラブ♡"
              layout="intrinsic"
              width={800}
              height={400}
              objectFit="cover"
              onClick={() => setStart(true)}
            />
            <span className="text-6xl font-bold text-white">散歩を開始する</span>
          </div>
        )}
        {start && (
          <>
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
          </>
        )}
      </div>
      <ReactHowler src="/music/attackOnTitan.mp3" playing loop />
    </main>
  );
}
