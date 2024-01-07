import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import mapdata from '../../mapTwo.json';
const MapComponent = () => {
  const handleVoice = value => {
    console.log('value', value);
  };
  return (
    <ComposableMap
      projection="geoMercator"
      style={{
        backgroundColor: 'pink',
        height: '600px',
      }}
      projectionConfig={{
        scale: 2300,
        center: [31, 48],
      }}
      fill="white"
      stroke="black"
      strokeWidth={1}
    >
      <Geographies geography={mapdata}>
        {geographies => {
          return (
            <>
              {geographies.geographies.map(geo => {
                return (
                  <Geography
                    style={{
                      hover: {
                        fill: '#FF331F',
                      },
                    }}
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleVoice(geo)}
                  />
                );
              })}
            </>
          );
        }}
      </Geographies>
    </ComposableMap>
  );
};

export default MapComponent;
