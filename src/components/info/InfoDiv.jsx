import React from 'react';
import FornVioce from '../form/FornVioce';

const InfoDiv = () => {
  const handleVoice = value => {
    console.log('value', value);
  };
  return (
    <div>
      <div style={{ width: '100px', height: '100px', border: '1px solid red' }}>
        IMG
      </div>
      <p>Text</p>
      <p>Price</p>
      <>
        <FornVioce handleVoice={handleVoice} />
      </>
    </div>
  );
};

export default InfoDiv;
