import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Map.css';


const containerStyle = {
  width: '1000px',
  height: '400px'
};

const center = {
  lat: 48.8526757,
  lng: 2.2631792
};

class Map extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyBST27U0e-ZBKSCS097uXoNHBBeDNYXsx0"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default Map;
