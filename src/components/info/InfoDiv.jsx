import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { addVoiceSelector, mapSelector } from '../../redux/selectors';
import { ItemDiv } from './InfoDiv.styled';

const InfoDiv = () => {
  const selectorAllVoice = useSelector(mapSelector);
  const infoOnVoice = useSelector(mapSelector);

  console.log('infoOnVoice', infoOnVoice);
  return (
    infoOnVoice.features &&
    infoOnVoice.features.map(el => {
      if (el.voice) {
        return (
          <ItemDiv>
            <p>{el.properties.name}</p>
            <p>{el.voice.length}</p>
          </ItemDiv>
        );
      } else {
        return null;
      }
    })
  );
};

export default InfoDiv;
