import React, { useState, useEffect } from 'react';

const Card = (props) => {
  // console.log(origin, destination, props.clickedCards);
  return (
    <div 
      className="card"
      value={props.name}
    >
      {props.card.rank} of {props.card.suit}
    </div>
  )
}

export default Card;