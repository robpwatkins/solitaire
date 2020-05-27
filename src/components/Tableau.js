import React, { useState, useEffect } from 'react';
import Card from './Card';

const Tableau = (props) => {
  const [isOrigin, setIsOrigin] = useState(false);
  const [/* isDestination */, setIsDestination] = useState(false);
  const {
    originCard,
    setOriginCard,
    cards,
    setDestination,
    setDestinationCard    
  } = props;

  useEffect(() => {

  })

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
  // console.log(name, isDestination);
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