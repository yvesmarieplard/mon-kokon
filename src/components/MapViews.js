import React, { Component } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import OffersDataService from "../services/offers.service";
import VenueMarkers from './VenueMarker';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.retrieveOffers = this.retrieveOffers.bind(this);

    this.state = {
      currentLocation: {   lat: 48.8526757, lng: 2.2631792},
      zoom: 12,
      offers: []
    }
  }

  componentDidMount() {
    this.retrieveOffers();
  }

  retrieveOffers() {
    OffersDataService.getAll()
      .then(response => {
        this.setState({
          offers: response.data
        });
      });
  }


  render() {
    const { currentLocation, zoom, offers } = this.state;

    return (
      <>
      <MapContainer center={currentLocation} zoom={zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <VenueMarkers venues={this.state.offers}/>
      </MapContainer>
      </>
    );
  }
}

export default MapView;
