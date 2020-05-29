import React from 'react';
import Suit from './Suit';

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
          <Suit suit={props.card.suit} name="lil" />
        </div>
      </div>
        <Suit suit={props.card.suit} />
      <div className="rank-bottom">
        <div className="rank-suit">
          <span>{props.card.rank}</span>
          <Suit suit={props.card.suit} name="lil" />
        </div>
      </div>
    </div>
  )
}

export default Card;