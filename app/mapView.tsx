import React, { useEffect, useState } from 'react';

const MapView = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`;
    googleMapScript.async = true;
    document.body.appendChild(googleMapScript);

    googleMapScript.onload = () => {
      const map = new (window as any).google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12,
      });
      setMap(map);
    };
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '100%' }}></div>
  );
};

export default MapView;