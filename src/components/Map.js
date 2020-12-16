import React, { Component } from "react";
import OffersDataService from "../services/offers.service";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
require('dotenv').config();


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
        googleMapsApiKey={process.env.GOOGLE_API_TOKEN}
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
