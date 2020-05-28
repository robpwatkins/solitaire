import React, { useState, useEffect } from 'react';
import Card from './Card';

const Waste = ({ stockIsClicked, cards, stockLength }) => {
  const [wasteCard, setWasteCard] = useState();
  const [cardPosition, setCardPosition] = useState(null);
  // const [stockLength, setStockLength] = useState(23);

  useEffect(() => {
    setCardPosition(stockLength - 1);
  }, [stockLength]);

  useEffect(() => {
    if (stockIsClicked) {
      console.log(cards[cardPosition]);
      // setWasteCard(cards[cardPosition]);
    }
  }, [stockIsClicked, stockLength])
  // console.log(cards.length, stockLength)
  return (
    <div className="waste">
      {wasteCard && (
        <Card card={wasteCard} />
      )}
    </div>
  )
}

export default Waste;