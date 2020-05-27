import React from 'react';
import Deck from '../components/Deck';
import Waste from '../components/Waste';
import Foundation from '../components/Foundation';
import Tableau from '../components/Tableau';

const Solitaire = () => {
  return (
    <div className="solitaire">
      <Deck />
      <Waste />
      <Foundation />
      <Foundation />
      <Foundation />
      <Foundation />
      <Tableau />
      <Tableau />
      <Tableau />
      <Tableau />
      <Tableau />
      <Tableau />
      <Tableau />
    </div>
  )
}

export default Solitaire;