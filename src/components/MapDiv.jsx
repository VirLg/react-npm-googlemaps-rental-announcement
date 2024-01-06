import React, { useEffect, useRef } from 'react';
const MapDiv = () => {
  const ref = useRef < HTMLDivElement;

  const DEFAULT_ZOOM = 7;
  useEffect(() => {
    // Display the map
    if (ref.current) {
      new window.google.maps.Map(ref.current, {
        center: { lat: 48.8566, lng: 2.3522 },
        zoom: DEFAULT_ZOOM,
      });
    }
  }, [ref]);
  return <div ref={ref} style={{ width: '1000px', height: '700px' }} />;
};

export default MapDiv;
