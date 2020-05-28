import React, { useState } from 'react';
import './App.css';
import Solitaire from './components/Solitaire';

function App() {
  const [deck, setDeck] = useState([]);

  useState(() => {
    setDeck(deck => deck = deckBuilder());
  })

  const deckBuilder = () => {
    let buildDeck = [];
    let suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
    let ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    for (let i = 0; i < suits.length; i++) {
      let card = {};
      let suit;
      suit = suits[i];
      for (let j = 0; j < ranks.length; j++) {
        card = {};
        card.rank = ranks[j];
        card.suit = suit;
        buildDeck.push(card);
      }
    }
    return buildDeck;
  }
  // console.log(deck);
  return (
    <div className="App">
      <Solitaire deck={deck} />
    </div>
  );
}

export default App;
