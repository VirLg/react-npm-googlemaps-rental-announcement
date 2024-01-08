import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import mapdata from '../../mapTwo.json';
import { useDispatch, useSelector } from 'react-redux';
import ModalWindow from '../modal/ModalWindow';
import { addVoiceSelector, showModalSelector } from '../../redux/selectors';
import { add, modalShow } from '../../redux/slice';
import FormVioce from '../form/FornVioce';
const MapComponent = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(showModalSelector);
  const addVoice = useSelector(addVoiceSelector);
  const [region, setRegion] = useState(null);
  const handleVoice = value => {
    dispatch(modalShow(true));
    const item = mapdata.features.find(el => el.id === value.id);
    setRegion(item.id);
  };
  const handleFormVoice = data => {
    console.log('addVoice', addVoice);

    const statRegionItem = {
      regionId: region,
      voice: [data],
    };
    dispatch(add(statRegionItem));
  };
  return (
    <>
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
        {mapdata.features.map(el => {
          return (
            <Marker
              coordinates={el.properties.regionalCenter}
              key={el.properties.name}
            >
              <circle r={2} fill="#F53" />

              <text
                textAnchor="middle"
                fill="#F53"
                style={{ fontSize: '7px', fontWeight: '100' }}
              >
                {el.properties.name}
              </text>
              <text
                textAnchor="middle"
                fill="#F53"
                style={{ fontSize: '12px', fontWeight: '100' }}
              >
                {el.properties.name}
              </text>
            </Marker>
          );
        })}
      </ComposableMap>
      {showModal && (
        <ModalWindow>
          <FormVioce handleFormVoice={handleFormVoice} />
        </ModalWindow>
      )}
    </>
  );
};

export default MapComponent;
