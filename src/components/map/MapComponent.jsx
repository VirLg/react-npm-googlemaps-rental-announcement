import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import mapdata from '../../mapTwo.geojson';
const MapComponent = () => {
  console.log('mapdata', mapdata);
  return (
    <ComposableMap
      projection="geoMercator"
      style={{ backgroundColor: 'pink' }}
      projectionConfig={{
        scale: 1500,
        center: [29, 51],
      }}
      fill="white"
      stroke="black"
      stroke-width={3}
    >
      <Geographies
        geography={mapdata}
        style={{ width: '800px', height: '600px' }}
      >
        {geographies => {
          return geographies.geographies.map(geo => {
            return <Geography key={geo.rsmKey} geography={geo} />;
          });
        }}
      </Geographies>
    </ComposableMap>
  );
};

export default MapComponent;
