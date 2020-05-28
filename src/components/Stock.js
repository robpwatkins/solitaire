import React, { useEffect } from 'react';

const Stock = ({ cards, waste, setWaste }) => {

  // useEffect(() => {
  //   if (isClicked) {
  //     setIsClicked(false);
  //   }
  // })

  const handleClick = () => {
    if (cards.length === 0) return;
    let newStock = cards;
    setWaste([...waste, newStock.splice(cards.length - 1, 1)[0]]);
  }

  return (
    <div 
      className={cards.length > 0 ? "stock" : "stock stock-empty"} 
      onClick={handleClick}>
    </div>
  )
}

export default Stock;