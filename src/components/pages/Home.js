import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Map from '../Map.js'
import Cards from '../Cards.js'
import FormulaireOffers from '../FormulaireOffers.js';

function Home () {
  return (
    <>
      <HeroSection />
      <Map/>
      <Cards />
      <FormulaireOffers />
    </>
  )
}

export default Home;
