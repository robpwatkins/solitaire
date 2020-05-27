import React, { useState, useEffect } from 'react';
import './App.css';
import Solitaire from './components/Solitaire';

function App() {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    let buildDeck = [];
    for (let i = 0; i <= 3; i++) {
      let card = {};
      let suit;
      if (i === 0) {
        suit = 'Clubs!';
      }
      if (i === 1) {
        suit = 'Spades!';
      }
      if (i === 2) {
        suit = 'Diamonds!';
      }
      if (i === 3) {
        suit = 'Hearts!';
      }
      for (let j = 1; j <= 13; j++) {
        card.rank = j;
        card.suit = suit;
        buildDeck.push(card);
      }
    }
    setDeck(...deck, buildDeck);
  }, [])
  console.log(deck);
  return (
    <div className="App">
      <Solitaire />
    </div>
  );
}

export default App;
