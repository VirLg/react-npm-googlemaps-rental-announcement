import React from 'react';
import FormVioce from '../form/FornVioce';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/slice';

const InfoDiv = () => {
  const dispatch = useDispatch();
  const handleVoice = value => {
    console.log('value', value);
    dispatch(add(value));
  };
  return (
    <div>
      <div style={{ width: '100px', height: '100px', border: '1px solid red' }}>
        IMG
      </div>
      <p>Text</p>
      <p>Price</p>
      <>
        <FormVioce handleVoice={handleVoice} />
      </>
    </div>
  );
};

export default InfoDiv;
