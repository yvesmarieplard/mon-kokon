import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Map from '../Map.js';
import Cards from '../Cards.js';
import MapView from '../MapViews';


function Home () {
  return (
    <>
      <HeroSection />
      <MapView />
      <Cards />
    </>
  )
}

export default Home;
