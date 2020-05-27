import React, { useState } from 'react';
import Card from './Card';

const Tableau = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    props.setOrigin(props.topCard);
  }

  // console.log(isClicked);
  return (
    <div 
      className={!isClicked ? "tableau" : "tableau clicked"}
      onClick={handleClick}
    >
      <Card 
        name={props.name}  
        card={props.topCard} 
        clickedCards={props.clickedCards}
        setClickedCards={props.setClickedCards}
      />
    </div>
  )
}

export default Tableau;