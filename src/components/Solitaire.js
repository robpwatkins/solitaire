import React, { useState, useEffect } from 'react';
import Stock from './Stock';
import Waste from './Waste';
import Foundation from './Foundation';
import Tableau from './Tableau';

const Solitaire = ({ deck, setDeck }) => {
  const [tableau1, setTableau1] = useState([]);
  const [tableau2, setTableau2] = useState([]);
  const [tableau3, setTableau3] = useState([]);
  const [tableau4, setTableau4] = useState([]);
  const [tableau5, setTableau5] = useState([]);
  const [tableau6, setTableau6] = useState([]);
  const [tableau7, setTableau7] = useState([]);
  const [foundation1, setFoundation1] = useState([]);
  const [foundation2, setFoundation2] = useState([]);
  const [foundation3, setFoundation3] = useState([]);
  const [foundation4, setFoundation4] = useState([]);
  const [stock, setStock] = useState([]);
  const [waste, setWaste] = useState([]);
  const [originCard, setOriginCard] = useState(null);
  const [destinationCard, setDestinationCard] = useState(null);
  const [destination, setDestination] = useState(null);
  const [moveSuccessful, setMoveSuccessful] = useState(false);
  
  useEffect(() => {
    let pile1 = [];
    let pile2 = [];
    let pile3 = [];
    let pile4 = [];
    let pile5 = [];
    let pile6 = [];
    let pile7 = [];
    let stockStack = [];
    for (let i = 0; i < 1; i++) {
      pile1.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
    }
    for (let i = 0; i < 2; i++) {
      pile2.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
    }
    for (let i = 0; i < 3; i++) {
      pile3.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);  
    }
    for (let i = 0; i < 4; i++) {
      pile4.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);  
    }
    for (let i = 0; i < 5; i++) {
      pile5.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);  
    }
    for (let i = 0; i < 6; i++) {
      pile6.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);  
    }
    for (let i = 0; i < 7; i++) {
      pile7.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);  
    }
    for (let i = 0; i < 24; i++) {
      stockStack.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]); 
    }
    setTableau1(tableau1 => tableau1 = pile1);
    setTableau2(tableau2 => tableau2 = pile2);
    setTableau3(tableau3 => tableau3 = pile3);
    setTableau4(tableau4 => tableau4 = pile4);
    setTableau5(tableau5 => tableau5 = pile5);
    setTableau6(tableau6 => tableau6 = pile6);
    setTableau7(tableau7 => tableau7 = pile7);
    setStock(stock => stock = stockStack);
  }, [deck]);

  useEffect(() => {
    if (originCard && !destinationCard) {
      if (destination === 'foundation-empty') {
        if (originCard[0].rank === 'A') {
          setMoveSuccessful(true);
          setDestination(null);
        } else {
          setDestination(null);
        }
      } else
      if (destination === 'tableau-empty') {
        if (originCard[0].rank === 'K') {
          setMoveSuccessful(true);
          setDestination(null);
        } else {
          setDestination(null);
        }
      }
    } else
    if (originCard && destinationCard) {
      if (destination === 'foundation') {
        if ((originCard[0].rank === 2 && destinationCard.rank === 'A') ||
        (originCard[0].rank === 'J' && destinationCard.rank === 10) ||
        (originCard[0].rank === 'Q' && destinationCard.rank === 'J') ||
        (originCard[0].rank === 'K' && destinationCard.rank === 'Q') ||
        (originCard[0].rank === destinationCard.rank + 1)) {
          let originColor, destinationColor;
          if (originCard[0].suit === 'Hearts' || originCard[0].suit === 'Diamonds') {
            originColor = 'r';
          } else originColor = 'b';
          if (destinationCard.suit === 'Hearts' || destinationCard.suit === 'Diamonds') {
            destinationColor = 'r';
          } else destinationColor = 'b';
          if (originColor === destinationColor) {
            setMoveSuccessful(true);
            setDestinationCard(null);
            setDestination(null);
          } else {
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
        if ((originCard[0].rank === 10 && destinationCard.rank === 'J') ||
        (originCard[0].rank === 'J' && destinationCard.rank === 'Q') ||
        (originCard[0].rank === 'Q' && destinationCard.rank === 'K') || 
        (originCard[0].rank === destinationCard.rank - 1)) {
          let originColor, destinationColor;
          if (originCard[0].suit === 'Hearts' || originCard[0].suit === 'Diamonds') {
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
    if (foundation1.length === 13 && 
      foundation2.length === 13 && 
      foundation3.length ===13 &&
      foundation4.length === 13) {
        alert('You have won.');
      }
  }, [originCard, destination, destinationCard]);

  return (
    <div className="gameboard">
      <div className="solitaire">
        <Stock 
          stock={stock}
          setStock={setStock}
          waste={waste}
          setWaste={setWaste}
        />
        <Waste 
          cards={waste}
          setCards={setWaste}
          originCard={originCard}
          setOriginCard={setOriginCard}
          moveSuccessful={moveSuccessful}
          setMoveSuccessful={setMoveSuccessful}
        />
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
          cardsLength={0}
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
          cardsLength={1}
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
          cardsLength={2}
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
          cardsLength={3}
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
          cardsLength={4}
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
          cardsLength={5}
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
          cardsLength={6}
          setDestination={setDestination}
          setDestinationCard={setDestinationCard}
          moveSuccessful={moveSuccessful}
          setMoveSuccessful={setMoveSuccessful}
        />
      </div>
    </div>
  )
}

export default Solitaire;