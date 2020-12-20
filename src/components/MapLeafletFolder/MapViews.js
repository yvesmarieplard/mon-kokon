import React, { Component } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from './data';
import OffersDataService from "../../services/offers.service";
import VenueMarkers from './VenueMarker';

const data2 = OffersDataService.getAll();

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 52.52437, lng: 13.41053 },
      zoom: 12,
    }
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <MapContainer center={currentLocation} zoom={zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <VenueMarkers venues={data.venues}/>
      </MapContainer>
    );
  }
}

export default MapView;
