import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  const { price } = props.data;

  return  (<Popup>
    <div className='poup-text'>{price}</div>
  </Popup>);
};

export default MarkerPopup;
