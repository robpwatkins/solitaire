import React, { useState, useEffect } from 'react';
// import Card from './Card';
import Stack from './Stack';
import Topmost from './Topmost';

const Tableau = (props) => {
  const [isOrigin, setIsOrigin] = useState(false);
  const [isDestination, setIsDestination] = useState(false);
  const [cardPosition, setCardPosition] = useState(props.cardsLength);
  const {
    name,
    originCard,
    setOriginCard,
    cards,
    setCards,
    cardsLength,
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
      setCardPosition(cardPosition => cardPosition - 1);
    } else
    if (moveSuccessful && isDestination) {
      setCards([...cards, originCard]);
      // setCardPosition(cardPosition => cardPosition + 1)
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
  // console.log(name, topIndex);
  // let tblClass = [
  //   'tableau',
  //   cards.length === 0 && 'empty'
  // ]
  // tblClass = tblClass.join(' ')
  // console.log(name, cardPosition);
  return (
    <div 
      className={cards.length > 0 ? "tableau" : "tableau empty"} 
      onClick={handleClick}
    >
      {cards.length > 0 && (
        <div className="tableau">
          {cards.map((card, index) => {
            if (index === cardPosition) {
              return (
                <Topmost topmost={cards[index]} isOrigin={isOrigin} key={index} name="top" />
              )        
            } else
            if (index > cardPosition) {
              return (
                <Topmost topmost={cards[index]} isOrigin={isOrigin} key={index} name="bottom" />
              )
            }
            return <Stack key={index} />
          })}
        </div>
      )}
    </div>
  )
}

export default Tableau;