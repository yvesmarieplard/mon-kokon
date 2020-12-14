import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return(
    <div className='hero-container'>
    <h1>BUYING SOMETHING</h1>
    <p>What are you waiting for ? </p>
      <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
      >
        Invest
      </Button>
    </div>
  )
}

export default HeroSection
