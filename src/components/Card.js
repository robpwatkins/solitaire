import React from 'react';

const Card = (props) => {

  let cardClass = [
    'card',
    ((props.card.suit === 'Diamonds') || (props.card.suit === 'Hearts')) && 'red'
  ];
  cardClass = cardClass.join(' ');

  return (
    <div className={cardClass}>
      {props.card.rank} of {props.card.suit}
    </div>
  )
}

export default Card;