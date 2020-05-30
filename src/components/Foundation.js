import React, { useState, useEffect } from 'react';
import Card from './Card';

const Foundation = (props) => {
  const [isOrigin, setIsOrigin] = useState();
  const [isDestination, setIsDestination] = useState();
  const {
    name,
    originCard,
    setOriginCard,
    cards,
    setCards,
    setDestination,
    setDestinationCard,
    moveSuccessful,
    setMoveSuccessful
  } = props;

  useEffect(() => {
    if (!originCard && isOrigin) {
      setIsOrigin(false);
    }
    if (!originCard && isDestination) {
      setIsDestination(false);
    }
    if (moveSuccessful && isOrigin) {
      let newCards = cards;
      newCards.pop();
      setCards(newCards);
      setMoveSuccessful(false);
      setIsOrigin(false);
    } else
    if (moveSuccessful && isDestination) {
      setCards([...cards, originCard]);
      setOriginCard(null);
      setMoveSuccessful(false);
    }
  }, [moveSuccessful, cards, isDestination, isOrigin, name, originCard, setCards, setMoveSuccessful, setOriginCard]);

  const handleClick = () => {
    if (!originCard) {
      if (cards.length === 0) {
        return;
      } else {
        setOriginCard(cards[cards.length - 1]);
        setIsOrigin(true);
      }
    } else
    if (originCard && !isOrigin) {
      if (cards.length === 0) {
        setDestination('foundation-empty');
        setIsDestination(true);
      } else {
        setDestinationCard(cards[cards.length - 1]);
        setDestination('foundation');
        setIsDestination(true);
      }
    } else
    if (origin && isOrigin) {
      setOriginCard(null);
      setIsOrigin(false);
    }
  }

  let fndClass = [
    'foundation',
    isOrigin && 'origin',
    cards.length === 0 && 'empty'
  ]
  fndClass = fndClass.join(' ');
  // console.log(cards);
  return (
    <div className={fndClass} onClick={handleClick}>
      {cards.length > 0 && (
        <Card card={cards[cards.length - 1]} />
      )}
    </div>
  )
}

export default Foundation;