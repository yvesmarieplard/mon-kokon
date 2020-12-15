import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Map from '../Map.js'
import Cards from '../Cards.js'
import Formulaire from '../Formulaire.js';

function Home () {
  return (
    <>
      <HeroSection />
      <Map/>
      <Cards />
      <Formulaire />
    </>
  )
}

export default Home;
