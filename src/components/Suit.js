import React from 'react';
import Spades from '../img/Spades.png';
import Clubs from '../img/Clubs.png';
import Diamonds from '../img/Diamonds.png';
import Hearts from '../img/Hearts.png';

const Suit = ({ suit }) => {
  console.log(suit);
  return (
    <img src={suit} alt=""/>
  )
}

export default Suit;