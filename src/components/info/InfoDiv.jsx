import React from 'react';
import { useSelector } from 'react-redux';
import { addVoiceSelector } from '../../redux/selectors';
import mapdata from '../../mapTwo.json';
const InfoDiv = () => {
  const voiceOnRegion = useSelector(addVoiceSelector);
  return (
    <div>
      <div style={{ width: '100px', height: '100px', border: '1px solid red' }}>
        IMG
      </div>
      <p>Text</p>
      <p>Price</p>
    </div>
  );
};

export default InfoDiv;
