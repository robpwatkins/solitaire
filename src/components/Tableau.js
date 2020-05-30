import React, { useState, useEffect } from 'react';
import Card from './Card';
import Stack from './Stack';
// import Topmost from './Topmost';

const Tableau = (props) => {
  const [isOrigin, setIsOrigin] = useState(false);
  const [isDestination, setIsDestination] = useState(false);
  const [cardPosition, setCardPosition] = useState(props.cardsLength);
  const [cardIndex, setCardIndex] = useState(null);
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
      if (cardPosition > cards.length) return;
      setCardPosition(cardPosition => cards.length - 1);
    } else
    if (moveSuccessful && isDestination) {
      setCards([...cards, originCard]);
      setOriginCard(null);
      setMoveSuccessful(false);
    }
  }, [moveSuccessful, cards, isDestination, isOrigin, name, originCard, setCards, setMoveSuccessful, setOriginCard]);

  const handleClick = (event) => {
    // console.log(event.target.getAttribute('value'))
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
  console.log(name, cardIndex);
  return (
    <div 
      className={cards.length > 0 ? "tableau" : "tableau empty"} 
      onClick={(event) => handleClick(event)}
    >
      {cards.length > 0 && (
        <div className="tableau">
          {cards.map((card, index) => {
            if (index === cardPosition) {
              return (
                <Card 
                  card={cards[index]} 
                  isOrigin={index === cards.length - 1 && isOrigin} 
                  key={index} 
                  index={index}
                  setCardIndex={setCardIndex}
                  name="tableau top"
                />
              )        
            } else
            if (index > cardPosition) {
              return (
                <Card 
                  card={cards[index]} 
                  isOrigin={index === cards.length - 1 && isOrigin} 
                  key={index} 
                  index={index}
                  name="tableau bottom" 
                />
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