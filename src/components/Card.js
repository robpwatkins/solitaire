import React from 'react';
import Spades from '../img/Spades.png';
import Clubs from '../img/Clubs.png';
import Diamonds from '../img/Diamonds.png';
import Hearts from '../img/Hearts.png';

const Card = (props) => {

  let cardClass = [
    'card',
    ((props.card.suit === 'Diamonds') || (props.card.suit === 'Hearts')) && 'red'
  ];
  cardClass = cardClass.join(' ');

  return (
    <div className={cardClass}>
      <div className="rank-top">
        <div className="rank-suit">
          <span>{props.card.rank}</span>
          <img className="lil-guy" src={
            props.card.suit === 'Spades' && Spades ||
            props.card.suit === 'Clubs' && Clubs ||
            props.card.suit === 'Diamonds' && Diamonds ||
            props.card.suit === 'Hearts' && Hearts
            } alt=""/>
        </div>
      </div>
      <img src={
        props.card.suit === 'Spades' && Spades ||
        props.card.suit === 'Clubs' && Clubs ||
        props.card.suit === 'Diamonds' && Diamonds ||
        props.card.suit === 'Hearts' && Hearts
        } alt=""/>
      <div className="rank-bottom">
        <div className="rank-suit">
          <span>{props.card.rank}</span>
          <img className="lil-guy" src={
            props.card.suit === 'Spades' && Spades ||
            props.card.suit === 'Clubs' && Clubs ||
            props.card.suit === 'Diamonds' && Diamonds ||
            props.card.suit === 'Hearts' && Hearts
            } alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Card;