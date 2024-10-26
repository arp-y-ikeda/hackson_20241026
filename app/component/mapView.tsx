'use client';

import React, { useEffect, useState } from 'react';

const MapView = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC98kaMSCrEc-_0tAo0ulVFbyvemDNwaw0`;
    googleMapScript.async = true;
    document.body.appendChild(googleMapScript);

    googleMapScript.onload = () => {
      const map = new (window as any).google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.6895, lng: 139.767 },
        zoom: 12,
      });
      setMap(map);
    };
  }, []);

  return <div id="map" style={{ width: '80%', height: '80%' }}></div>;
};

export default MapView;
