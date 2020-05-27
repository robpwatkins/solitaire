import React, { useState, useEffect } from 'react';
import Card from './Card';

const Tableau = ({ origin, setOrigin, destination, setDestination, name, cards, setCards, clickedCards, setClickedCards, topCard }) => {
  const [isOrigin, setIsOrigin] = useState(false);
  const [isDestination, setIsDestination] = useState(false);

  useEffect(() => {

  })

  const handleClick = () => {
    if (!origin) {
      setOrigin(topCard);
      setIsOrigin(true);
    }
    if (origin && !isOrigin) {
      setDestination(topCard);
      setIsDestination(true);
    }
    if (origin && isOrigin) {
      setOrigin(null);
      setIsOrigin(false);
    }
  }
  // console.log(name, isDestination);
  return (
    <div 
      className={!isOrigin ? "tableau" : "tableau clicked"}
      onClick={handleClick}
    >
      <Card 
        name={name}  
        card={cards[cards.length - 1]} 
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
      />
    </div>
  )
}

export default Tableau;