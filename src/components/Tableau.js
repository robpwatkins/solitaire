import React, { useState, useEffect } from 'react';
import Card from './Card';

const Tableau = (props) => {
  const [isOrigin, setIsOrigin] = useState(false);
  const [isDestination, setIsDestination] = useState(false);
  const {
    name,
    destination,
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
    console.log(name, destination);
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
      setOriginCard(cards[cards.length - 1]);
      setIsOrigin(true);
    } else
    if (originCard && !isOrigin) {
      if (cards.length === 0) {
        setDestination('tableau-empty');
      } else {
        setDestinationCard(cards[cards.length - 1]);
        setDestination('tableau');
        setIsDestination(true);
      }
    } else
    if (originCard && isOrigin) {
      setOriginCard(null);
      setIsOrigin(false);
    }
  }
  
  let tblClass = [
    'tableau',
    isOrigin && 'clicked',
    cards.length === 0 && 'empty'
  ]
  tblClass = tblClass.join(' ')
  // console.log(name, cards);
  return (
    <div 
      className={tblClass}
      onClick={handleClick}
    >
      {cards.length > 0 && (
        <Card 
          card={cards[cards.length - 1]} 
          // clickedCards={clickedCards}
          // setClickedCards={setClickedCards}
        />
      )}
    </div>
  )
}

export default Tableau;