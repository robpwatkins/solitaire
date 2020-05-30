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
    if (!originCard && isDestination) {
      setIsDestination(false);
      setCardIndex(null);
    }
    if (moveSuccessful && isOrigin) {
      let newCards = cards.slice();
      newCards.splice(cardIndex);
      setCards(newCards);
      setMoveSuccessful(false);
      setIsOrigin(false);
      setCardIndex(null);
      if (cardIndex === cardPosition) {
        setCardPosition(cardPosition => cardPosition - 1)
      }
    } else
    if (moveSuccessful && isDestination) {
      console.log(originCard);
      setCards([...cards, ...originCard]);
      setMoveSuccessful(false);
      setCardIndex(null);
      setOriginCard(null);
    }
  }, [moveSuccessful, cards, isDestination, isOrigin, name, originCard, setCards, setMoveSuccessful, setOriginCard]);

  const handleClick = (event) => {
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
      setCardIndex(null);
    }
  }
  // console.log(name, cardPosition);
  return (
    <div 
      className={cards.length > 0 ? "tableau" : "tableau empty"} 
      onClick={(event) => handleClick(event)}
    >
      {cards.length > 0 && (
        <div className="tableau">
          {cards.map((card, index) => {
            if (index >= cardPosition) {
              return (
                <Card 
                  cards={cards}
                  card={cards[index]} 
                  isOrigin={isOrigin} 
                  setIsOrigin={setIsOrigin}
                  originCard={originCard}
                  setOriginCard={setOriginCard}
                  key={index} 
                  index={index}
                  cardIndex={cardIndex}
                  setCardIndex={setCardIndex}
                  name={index === cardPosition ? "tableau top" : index > cardPosition && "tableau bottom"}
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