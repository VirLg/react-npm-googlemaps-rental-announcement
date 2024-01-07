import React, { useEffect } from 'react';
import { useMap } from '@vis.gl/react-google-maps';

const MapDiv = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // here you can interact with the imperative maps API
  }, [map]);

  return <></>;
};

export default MapDiv;
