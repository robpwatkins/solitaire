import React, { useState, useEffect } from 'react';
import Card from './Card';

const Waste = (props) => {
  const [isOrigin, setIsOrigin] = useState(false);
  const { 
    cards, 
    setCards,
    originCard, 
    setOriginCard, 
    moveSuccessful, 
    setMoveSuccessful
  } = props;

  // useEffect(() => {
  //   if (isOrigin) {
  //     setIsOrigin(false);
  //     setOriginCard(null);
  //   }
  // }, [cards]);

  useEffect(() => {
    if (!originCard && isOrigin) {
      setIsOrigin(false);
    }
    if (moveSuccessful && isOrigin) {
      let newCards = cards;
      newCards.pop();
      setCards(newCards);
      setMoveSuccessful(false);
      setIsOrigin(false);
    }
  }, [setIsOrigin, cards, isOrigin, moveSuccessful, originCard, setCards, setMoveSuccessful]);

  const handleClick = () => {
    if (!originCard) {
      setOriginCard(cards[cards.length - 1]);
      setIsOrigin(true);
    }
    if (originCard) {
      setOriginCard(null);
      setIsOrigin(false);
    }
  }

  let wasteClass = [
    'waste',
    isOrigin && 'origin',
    cards.length === 0 && 'empty'
  ];

  wasteClass = wasteClass.join(' ');
  
  // console.log(cards)
  return (
    <div 
      className={wasteClass}
      onClick={handleClick}  
    >
      {cards.length > 0 && (
        <Card card={cards[cards.length - 1]} />
      )}
    </div>
  )
}

export default Waste;