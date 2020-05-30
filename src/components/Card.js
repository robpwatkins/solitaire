import React from 'react';
import Suit from './Suit';

const Card = (props) => {

  const handleClick = event => {
    props.setCardIndex && props.setCardIndex(props.index);
    // console.log(props.cardIndex);
  }
  console.log(props.cardIndex);
  let cardClass = [
    'card',
    ((props.card.suit === 'Diamonds') || (props.card.suit === 'Hearts')) && 'red',
    (props.isOrigin && (props.index >= props.cardIndex)) && 'origin',
    (props.name && props.name.includes('tableau')) && 'tableau',
    (props.name && props.name.includes('top')) && 'top',
    (props.name && props.name.includes('bottom')) && 'bottom'
  ];
  
  cardClass = cardClass.join(' ');
    // console.log('Card', props.index);
  return (
    <div className={cardClass} value={props.index} onClick={handleClick}>
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