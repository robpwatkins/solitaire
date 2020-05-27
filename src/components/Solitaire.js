import React, { useState, useEffect } from 'react';
import Deck from '../components/Deck';
import Waste from '../components/Waste';
import Foundation from '../components/Foundation';
import Tableau from '../components/Tableau';

const Solitaire = ({ deck }) => {
  const [tableau1, setTableau1] = useState([deck[0]]);
  const [tbl1TopCard, setTbl1TopCard] = useState(tableau1[tableau1.length - 1]);
  // const [tableau2, setTableau2] = useState([deck[1], deck[7]]);
  // const [tableau3, setTableau3] = useState([deck[2], deck[8], deck[13]]);
  // const [tableau4, setTableau4] = useState([deck[3], deck[9], deck[14], deck[18]]);
  // const [tableau5, setTableau5] = useState([deck[4], deck[10], deck[15], deck[19], deck[22]]);
  // const [tableau6, setTableau6] = useState([deck[5], deck[11], deck[16], deck[20], deck[23], deck[25]]);
  // const [tableau7, setTableau7] = useState([deck[6], deck[12], deck[17], deck[21], deck[24], deck[26], deck[27]]);
  // console.log(deck[0].rank);
  return (
    <div className="solitaire">
      <Deck />
      <Waste />
      <Foundation />
      <Foundation />
      <Foundation />
      <Foundation />
      <Tableau 
        cards={tableau1} 
        topCard={tbl1TopCard}
      />
      {/* <Tableau cards={tableau2} />
      <Tableau cards={tableau3} />
      <Tableau cards={tableau4} />
      <Tableau cards={tableau5} />
      <Tableau cards={tableau6} />
      <Tableau cards={tableau7} /> */}
    </div>
  )
}

export default Solitaire;