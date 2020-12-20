import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Business Plan</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-appartment.jpg'
              text='Paris'
              label='Paris'
              path='/services'
            />
            <CardItem
              src='images/img-numbers.jpg'
              text='Key Numbers'
              label='Key Primary Indicators'
              path='/services'
            />

          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-ratings.jpg'
              text='Ratings'
              label='Stuffs'
              path='/services'
            />
            <CardItem
              src='images/img-numbers.jpg'
              text='Description'
              label='Description'
              path='/services'
            />
            <CardItem
              src='images/img-graphics.jpg'
              text='Price History Graph for the district'
              label='Historical Market Data'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
