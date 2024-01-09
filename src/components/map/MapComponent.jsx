import React, { useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import mapdataJson from '../../mapTwo.json';
import { useDispatch, useSelector } from 'react-redux';
import ModalWindow from '../modal/ModalWindow';
import {
  addVoiceSelector,
  mapSelector,
  showModalSelector,
} from '../../redux/selectors';
import { add, modalShow, startValue } from '../../redux/slice';
import FormVioce from '../form/FornVioce';
const MapComponent = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(showModalSelector);
  const addVoice = useSelector(addVoiceSelector);
  const [region, setRegion] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    dispatch(startValue(mapdataJson));
  }, [dispatch]);
  const mapdata = useSelector(mapSelector);
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
  // useEffect(() => {
  //   const handleReadVoice = () => {
  //     console.log('map', map);
  //     addVoice.map(el => {
  //       console.log('el.regionId', el.regionId);
  //       console.log('mapdata.features.id', mapdata.features);
  //       if (el.regionId === mapdata.features.id) {
  //         return setMap({
  //           ...el,
  //           length: 5,
  //         });
  //       }
  //     });
  //     console.log('mapinUse', map);
  //   };
  //   handleReadVoice();
  // }, [addVoice, map]);

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
        <Geographies geography={mapdata || mapdataJson}>
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
        {mapdata &&
          mapdataJson.features.map(el => {
            return (
              <Marker
                coordinates={el.properties.regionalCenter}
                key={el.properties.name}
              >
                <circle r={2} fill="#F53" />

                <text
                  textAnchor="middle"
                  fill="#F53"
                  style={{ fontSize: '10px', fontWeight: '100' }}
                >
                  {/* {el.properties.name} */}
                  {el.voice && el.voice.length}
                  <br />
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
