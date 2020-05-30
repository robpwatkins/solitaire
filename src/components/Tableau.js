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
    // if (!originCard && isOrigin) {
    //   setIsOrigin(false);
    //   setCardIndex(null);
    // }
    if (!originCard && isDestination) {
      setIsDestination(false);
      setCardIndex(null);
    }
    if (moveSuccessful && isOrigin) {
      let newCards = cards.slice();
      console.log(cardIndex);
      newCards.splice(cardIndex);
      setCards(newCards);
      setMoveSuccessful(false);
      setIsOrigin(false);
      // if (cardPosition > cards.length) return;
      setCardPosition(cardPosition => cardPosition - 1);
      setCardIndex(null);
    } else
    if (moveSuccessful && isDestination) {
      console.log(originCard);
      setCards([...cards, ...originCard]);
      setOriginCard(null);
      setMoveSuccessful(false);
      setCardIndex(null);
    }
  }, [moveSuccessful, cards, isDestination, isOrigin, name, originCard, setCards, setMoveSuccessful, setOriginCard]);

  const handleClick = (event) => {
    // console.log(event.target.getAttribute('value'))
    // if (!originCard) {
    //   setOriginCard(cards[cards.length - 1]);
    //   setIsOrigin(true);
    // } else
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
  // console.log(name, cardIndex);
  return (
    <div 
      className={cards.length > 0 ? "tableau" : "tableau empty"} 
      onClick={(event) => handleClick(event)}
    >
      {cards.length > 0 && (
        <div className="tableau">
          {cards.map((card, index) => {
            // console.log(name, cardPosition)
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