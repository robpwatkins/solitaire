import React, { useState, useEffect } from 'react';
// import Card from './Card';
import Topmost from './Topmost';

const Tableau = (props) => {
  const [isOrigin, setIsOrigin] = useState(false);
  const [isDestination, setIsDestination] = useState(false);
  const [topmost, setTopmost] = useState([]);
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
    let newCards = cards;
    setTopmost(newCards.splice(newCards.length - 1));
  }, [cards]);

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
      setOriginCard(cards[cards.length - 1]);
      setIsOrigin(true);
    } else
    if (originCard && !isOrigin) {
      if (cards.length === 0) {
        setDestination('tableau-empty');
        setIsDestination(true);
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
  console.log(name, topmost);
  let tblClass = [
    'tableau',
    isOrigin && 'origin',
    cards.length === 0 && 'empty'
  ]
  tblClass = tblClass.join(' ')

  return (
    <div className={tblClass} onClick={handleClick}>
      {cards.length > 0 && (
        <>
          <Topmost topmost={topmost} />
          {/* <Card card={cards[cards.length - 1]} /> */}
        </>
      )}
    </div>
  )
}

export default Tableau;