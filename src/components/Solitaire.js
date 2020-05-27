import React, { useState, useEffect } from 'react';
import Stock from './Stock';
import Waste from './Waste';
import Foundation from './Foundation';
import Tableau from './Tableau';

const Solitaire = ({ deck }) => {
  const [tableau1, setTableau1] = useState([deck[0]]);
  const [tableau2, setTableau2] = useState([deck[1], deck[7]]);
  const [tableau3, setTableau3] = useState([/* deck[2], deck[8], deck[13] */{rank: 7, suit: 'Hearts!'}]);
  // const [tbl3TopCard, setTbl3TopCard] = useState(tableau3[tableau3.length - 1]);
  // const [tableau4, setTableau4] = useState([deck[3], deck[9], deck[14], deck[18]]);
  // const [tbl4TopCard, setTbl4TopCard] = useState(tableau4[tableau4.length - 1]);
  // const [tableau5, setTableau5] = useState([deck[4], deck[10], deck[15], deck[19], deck[22]]);
  // const [tbl5TopCard, setTbl5TopCard] = useState(tableau5[tableau5.length - 1]);
  // const [tableau6, setTableau6] = useState([deck[5], deck[11], deck[16], deck[20], deck[23], deck[25]]);
  // const [tbl6TopCard, setTbl6TopCard] = useState(tableau6[tableau6.length - 1]);
  // const [tableau7, setTableau7] = useState([deck[6], deck[12], deck[17], deck[21], deck[24], deck[26], deck[27]]);
  // const [tbl7TopCard, setTbl7TopCard] = useState(tableau7[tableau7.length - 1]);
  const [foundation1, setFoundation1] = useState([/* {rank: 7, suit: 'Diamonds!'} */]);
  const [originCard, setOriginCard] = useState(null);
  const [destinationCard, setDestinationCard] = useState(null);
  const [destination, setDestination] = useState(null);
  const [moveSuccessful, setMoveSuccessful] = useState(false);
  
  useEffect(() => {
    if (originCard && !destinationCard) {
      if (destination === 'foundation-empty') {
        if (originCard.rank === 1) {
          setMoveSuccessful(true);
          // setOriginCard(null);
          setDestination(null);
        } else {
          setOriginCard(null);
          setDestination(null);
        }
      } else
      if (destination === 'tableau-empty') {
        if (originCard.rank === 13) {
          setMoveSuccessful(true);
          // setOriginCard(null);
          setDestination(null);
        } else {
          setOriginCard(null);
          setDestination(null);
        }
      }
    } else
    if (originCard && destinationCard) {
      if (destination === 'foundation') {
        if (originCard.rank === destinationCard.rank + 1) {
          let originColor, destinationColor;
          if (originCard.suit === 'Hearts!' || originCard.suit === 'Diamonds!') {
            originColor = 'r';
          } else originColor = 'b';
          if (destinationCard.suit === 'Hearts!' || destinationCard.suit === 'Diamonds!') {
            destinationColor = 'r';
          } else destinationColor = 'b';
          if (originColor !== destinationColor) {
            setMoveSuccessful(true);
            // setOriginCard(null);
            setDestinationCard(null);
            setDestination(null);
          } else {
            setOriginCard(null);
            setDestinationCard(null);
            setDestination(null);
          }
        } else {
          setOriginCard(null);
          setDestinationCard(null);
          setDestination(null);
        }
      }
      if (destination === 'tableau') {
        if (originCard.rank === destinationCard.rank - 1) {
          let originColor, destinationColor;
          if (originCard.suit === 'Hearts!' || originCard.suit === 'Diamonds!') {
            originColor = 'r';
          } else originColor = 'b';
          if (destinationCard.suit === 'Hearts!' || destinationCard.suit === 'Diamonds!') {
            destinationColor = 'r';
          } else destinationColor = 'b';
          if (originColor !== destinationColor) {
            setMoveSuccessful(true);
            // setOriginCard(null);
            setDestinationCard(null);
            setDestination(null);
          } else {
            setOriginCard(null);
            setDestinationCard(null);
            setDestination(null);
          }
        } else {
          setOriginCard(null);
          setDestinationCard(null);
          setDestination(null);
        }
      }
    }
  }, [originCard, destination, destinationCard]);

  const handleClick = event => {
  }

  // console.log(originCard, destinationCard, destination, moveSuccessful);
  return (
    <div className="solitaire" onClick={event => handleClick(event)}>
      <Stock />
      <Waste />
      <Foundation 
        cards={foundation1}
        setCards={setFoundation1}
        originCard={originCard}
        setOriginCard={setOriginCard}
        setDestination={setDestination}
        setDestinationCard={setDestinationCard}

      />
      {/* <Foundation />
      <Foundation />
      <Foundation /> */}
      <Tableau
        name="tableau1"
        originCard={originCard}
        setOriginCard={setOriginCard}
        cards={tableau1}
        setCards={setTableau1}
        setDestination={setDestination}
        setDestinationCard={setDestinationCard}
        moveSuccessful={moveSuccessful}
        setMoveSuccessful={setMoveSuccessful}
        // setCards={setTableau1}
        // destinationCard={destinationCard}
        // originCardriginCard
      />
      <Tableau 
        name="tableau2"
        originCard={originCard}
        setOriginCard={setOriginCard}
        cards={tableau2}
        setCards={setTableau2}
        setDestination={setDestination}
        setDestinationCard={setDestinationCard}
        moveSuccessful={moveSuccessful}
        setMoveSuccessful={setMoveSuccessful}
        // setCards={setTableau1}
        // destinationCard={destinationCard}
        // originCardriginCard
      />
      <Tableau 
        name="tableu3"
        originCard={originCard}
        setOriginCard={setOriginCard}
        cards={tableau3}
        setCards={setTableau3}
        setDestination={setDestination}
        setDestinationCard={setDestinationCard}
        moveSuccessful={moveSuccessful}
        setMoveSuccessful={setMoveSuccessful}
        // setCards={setTableau1}
        // destinationCard={destinationCard}
        // originCardriginCard
      />
      {/* <Tableau 
        name="tableau4"
        cards={tableau4} 
        topCard={tbl4TopCard}
        originCard={originCard}
        setOriginCard={setOriginCard}
        originCardriginCard       setClickedCards={setClickedCards}
      />
      <Tableau 
        name="tableau5"
        cards={tableau5} 
        topCard={tbl5TopCard}
        originCard={originCard}
        setOriginCard={setOriginCard}
        originCardriginCard       setClickedCards={setClickedCards}
      />
      <Tableau 
        name="tableau6"
        cards={tableau6} 
        topCard={tbl6TopCard}
        originCard={originCard}
        setOriginCard={setOriginCard}
        originCardriginCard       setClickedCards={setClickedCards}
      />
      <Tableau 
        name="tableau7"
        cards={tableau7}
        topCard={tbl7TopCard}
        originCard={originCard}
        setOriginCard={setOriginCard}
        originCardriginCard       setClickedCards={setClickedCards}
      /> */}
    </div>
  )
}

export default Solitaire;