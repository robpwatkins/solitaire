import React, { useEffect } from 'react';
import Suit from './Suit';

const Card = (props) => {

  useEffect(() => {
    if (props.setOrigin) {
      if (!props.originCard && props.isOrigin) {
        props.setIsOrigin(false);
        props.setCardIndex(null);
      }
    }
  })

  const handleClick = event => {
    if (props.setCardIndex) {
      props.setCardIndex(props.index);
    }
    if (props.setOriginCard) {
      if (!props.originCard) {
        props.setIsOrigin(true);
        let newCards = props.cards.slice();
        props.setOriginCard(newCards.splice(props.index));
      }
    }
  }
  
  let cardClass = [
    'card',
    ((props.card.suit === 'Diamonds') || (props.card.suit === 'Hearts')) && 'red',
    (props.isOrigin && (props.index >= props.cardIndex)) && 'origin',
    (props.name && props.name.includes('tableau')) && 'tableau',
    (props.name && props.name.includes('top')) && 'top',
    (props.name && props.name.includes('bottom')) && 'bottom'
  ];
  
  cardClass = cardClass.join(' ');
    // console.log('Card', props.originCard);
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