import Image from 'next/image';
import { MapView } from './component/mapView';
import { Destination } from './component/destination';

export default function Home() {
  return (
    <main className="container w-screen h-screen font-[family-name:var(--font-cezannePro-m)]">
      <div className="w-screen h-screen flex flex-col gap-y-2 items-center justify-center">
        <MapView />
        <Destination />
      </div>
    </main>
  );
}
