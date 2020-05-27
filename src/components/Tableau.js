import React from 'react';
import Card from '../components/Card';

const Tableau = (props) => {
  console.log(props.topCard.rank);
  return (
    <div className={props.cards ? "tableau" : "tableau empty"}>
      <Card card={props.topCard} />
    </div>
  )
}

export default Tableau;