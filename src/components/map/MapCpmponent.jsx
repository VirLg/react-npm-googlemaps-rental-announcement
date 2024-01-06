import React from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { GoogleApiWrapper } from 'google-maps-react';
const MapCpmponent = () => {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  return (
    <Wrapper apiKey={'YOUR_API_KEY'} render={render}>
      <YourComponent />
    </Wrapper>
  );
};

export default MapCpmponent;
