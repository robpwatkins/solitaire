import React from 'react';

const Tableau = (props) => {
  return (
    <div className={props.cards ? "tableau" : "tableau empty"}>

    </div>
  )
}

export default Tableau;