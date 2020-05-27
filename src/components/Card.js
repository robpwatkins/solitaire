import React from 'react';

const Card = (props) => {
  // console.log(props.card);
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