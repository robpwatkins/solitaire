import React, { useState, useEffect } from 'react';
import Stock from './Stock';
import Waste from './Waste';
import Foundation from './Foundation';
import Tableau from './Tableau';

const Solitaire = ({ deck }) => {
  const [tableau1, setTableau1] = useState([deck[0]]);
  const [tableau2, setTableau2] = useState([deck[1], /* deck[7] */{rank: 2, suit: 'Clubs'}]);
  const [tableau3, setTableau3] = useState([deck[2], deck[8], deck[13]]);
  const [tableau4, setTableau4] = useState([deck[3], deck[9], deck[14], deck[18]]);
  const [tableau5, setTableau5] = useState([deck[4], deck[10], deck[15], deck[19], deck[22]]);
  const [tableau6, setTableau6] = useState([deck[5], deck[11], deck[16], deck[20], deck[23], deck[25]]);
  const [tableau7, setTableau7] = useState([deck[6], deck[12], deck[17], deck[21], deck[24], deck[26], deck[27]]);
  const [foundation1, setFoundation1] = useState([]);
  const [foundation2, setFoundation2] = useState([]);
  const [foundation3, setFoundation3] = useState([]);
  const [foundation4, setFoundation4] = useState([]);
  const [originCard, setOriginCard] = useState(null);
  const [destinationCard, setDestinationCard] = useState(null);
  const [destination, setDestination] = useState(null);
  const [moveSuccessful, setMoveSuccessful] = useState(false);
  
  useEffect(() => {
    if (originCard && !destinationCard) {
      if (destination === 'foundation-empty') {
        if (originCard.rank === 'A') {
          setMoveSuccessful(true);
          // setOriginCard(null);
          setDestination(null);
        } else {
          // setOriginCard(null);
          setDestination(null);
        }
      } else
      if (destination === 'tableau-empty') {
        if (originCard.rank === 'K') {
          setMoveSuccessful(true);
          // setOriginCard(null);
          setDestination(null);
        } else {
          // setOriginCard(null);
          setDestination(null);
        }
      }
    } else
    if (originCard && destinationCard) {
      if (destination === 'foundation') {
        console.log(originCard.rank, destinationCard.rank);
        if ((originCard.rank === 2 && destinationCard.rank === 'A') ||
        (originCard.rank === 'Q' && destinationCard.rank === 'J') ||
        (originCard.rank === 'K' && destinationCard.rank === 'Q') ||
        (originCard.rank === destinationCard.rank + 1)) {
          let originColor, destinationColor;
          if (originCard.suit === 'Hearts' || originCard.suit === 'Diamonds') {
            originColor = 'r';
          } else originColor = 'b';
          if (destinationCard.suit === 'Hearts' || destinationCard.suit === 'Diamonds') {
            destinationColor = 'r';
          } else destinationColor = 'b';
          if (originColor === destinationColor) {
            setMoveSuccessful(true);
            // setOriginCard(null);
            setDestinationCard(null);
            setDestination(null);
          } else {
            // setOriginCard(null);
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
        if ((originCard.rank === 'J' && destinationCard.rank === 'Q') ||
        (originCard.rank === 'Q' && destinationCard.rank === 'K') || 
        (originCard.rank === destinationCard.rank - 1)) {
          let originColor, destinationColor;
          if (originCard.suit === 'Hearts' || originCard.suit === 'Diamonds') {
            originColor = 'r';
          } else originColor = 'b';
          if (destinationCard.suit === 'Hearts' || destinationCard.suit === 'Diamonds') {
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

  // console.log(originCard, destinationCard, destination, moveSuccessful);
  return (
    <div className="solitaire">
      <Stock />
      <Waste />
      <Foundation 
        name="foundation1"
        originCard={originCard}
        setOriginCard={setOriginCard}
        cards={foundation1}
        setCards={setFoundation1}
        setDestination={setDestination}
        setDestinationCard={setDestinationCard}
        moveSuccessful={moveSuccessful}
        setMoveSuccessful={setMoveSuccessful}
      />
      <Foundation 
        name="foundation2"
        originCard={originCard}
        setOriginCard={setOriginCard}
        cards={foundation2}
        setCards={setFoundation2}
        setDestination={setDestination}
        setDestinationCard={setDestinationCard}
        moveSuccessful={moveSuccessful}
        setMoveSuccessful={setMoveSuccessful}
      />
      <Foundation 
        name="foundation3"
        originCard={originCard}
        setOriginCard={setOriginCard}
        cards={foundation3}
        setCards={setFoundation3}
        setDestination={setDestination}
        setDestinationCard={setDestinationCard}
        moveSuccessful={moveSuccessful}
        setMoveSuccessful={setMoveSuccessful}
      />
      <Foundation 
        name="foundation4"
        originCard={originCard}
        setOriginCard={setOriginCard}
        cards={foundation4}
        setCards={setFoundation4}
        setDestination={setDestination}
        setDestinationCard={setDestinationCard}
        moveSuccessful={moveSuccessful}
        setMoveSuccessful={setMoveSuccessful}
      />
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
      />
      <Tableau 
        name="tableau4"
        originCard={originCard}
        setOriginCard={setOriginCard}
        cards={tableau4}
        setCards={setTableau4}
        setDestination={setDestination}
        setDestinationCard={setDestinationCard}
        moveSuccessful={moveSuccessful}
        setMoveSuccessful={setMoveSuccessful}
      />
      <Tableau 
        name="tableau5"
        originCard={originCard}
        setOriginCard={setOriginCard}
        cards={tableau5}
        setCards={setTableau5}
        setDestination={setDestination}
        setDestinationCard={setDestinationCard}
        moveSuccessful={moveSuccessful}
        setMoveSuccessful={setMoveSuccessful}
      />
      <Tableau 
        name="tableau6"
        originCard={originCard}
        setOriginCard={setOriginCard}
        cards={tableau6}
        setCards={setTableau6}
        setDestination={setDestination}
        setDestinationCard={setDestinationCard}
        moveSuccessful={moveSuccessful}
        setMoveSuccessful={setMoveSuccessful}
      />
      <Tableau 
        name="tableau7"
        originCard={originCard}
        setOriginCard={setOriginCard}
        cards={tableau7}
        setCards={setTableau7}
        setDestination={setDestination}
        setDestinationCard={setDestinationCard}
        moveSuccessful={moveSuccessful}
        setMoveSuccessful={setMoveSuccessful}
      />
    </div>
  )
}

export default Solitaire;