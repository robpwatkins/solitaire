import React, { useState, useEffect } from 'react';
import Stock from './Stock';
import Waste from './Waste';
import Foundation from './Foundation';
import Tableau from './Tableau';

const Solitaire = ({ deck }) => {
  const [tableau1, setTableau1] = useState([deck[0]]);
  const [tbl1TopCard, setTbl1TopCard] = useState(tableau1[tableau1.length - 1]);
  const [tableau2, setTableau2] = useState([deck[1], deck[7]]);
  const [tbl2TopCard, setTbl2TopCard] = useState(tableau2[tableau2.length - 1]);
  const [tableau3, setTableau3] = useState([deck[2], deck[8], deck[13]]);
  const [tbl3TopCard, setTbl3TopCard] = useState(tableau3[tableau3.length - 1]);
  const [tableau4, setTableau4] = useState([deck[3], deck[9], deck[14], deck[18]]);
  const [tbl4TopCard, setTbl4TopCard] = useState(tableau4[tableau4.length - 1]);
  const [tableau5, setTableau5] = useState([deck[4], deck[10], deck[15], deck[19], deck[22]]);
  const [tbl5TopCard, setTbl5TopCard] = useState(tableau5[tableau5.length - 1]);
  const [tableau6, setTableau6] = useState([deck[5], deck[11], deck[16], deck[20], deck[23], deck[25]]);
  const [tbl6TopCard, setTbl6TopCard] = useState(tableau6[tableau6.length - 1]);
  const [tableau7, setTableau7] = useState([deck[6], deck[12], deck[17], deck[21], deck[24], deck[26], deck[27]]);
  const [tbl7TopCard, setTbl7TopCard] = useState(tableau7[tableau7.length - 1]);
  const [clickedCards, setClickedCards] = useState([]);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  
  useEffect(() => {
    if (origin === destination) {
    }
  }, [setClickedCards]);

  const handleClick = event => {
    let targetVal = event.target.getAttribute('value');
    if (!origin) {
      setOrigin(targetVal);
    } else {
      setDestination(targetVal);
    }
  }
  console.log(origin);
  return (
    <div className="solitaire" onClick={event => handleClick(event)}>
      <Stock />
      <Waste />
      <Foundation />
      <Foundation />
      <Foundation />
      <Foundation />
      <Tableau 
        name="tableau1"
        // cards={tableau1} 
        topCard={tbl1TopCard}
        origin={origin}
        setOrigin={setOrigin}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
      />
      <Tableau 
        name="tableau2"
        // cards={tableau2} 
        topCard={tbl2TopCard}
        origin={origin}
        setOrigin={setOrigin}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
      />
      <Tableau 
        name="tableau3"
        // cards={tableau3}
        topCard={tbl3TopCard}
        origin={origin}
        setOrigin={setOrigin}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
      />
      <Tableau 
        name="tableau4"
        // cards={tableau4} 
        topCard={tbl4TopCard}
        origin={origin}
        setOrigin={setOrigin}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
      />
      <Tableau 
        name="tableau5"
        // cards={tableau5} 
        topCard={tbl5TopCard}
        origin={origin}
        setOrigin={setOrigin}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
      />
      <Tableau 
        name="tableau6"
        // cards={tableau6} 
        topCard={tbl6TopCard}
        origin={origin}
        setOrigin={setOrigin}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
      />
      <Tableau 
        name="tableau7"
        // cards={tableau7}
        topCard={tbl7TopCard}
        origin={origin}
        setOrigin={setOrigin}
        clickedCards={clickedCards}
        setClickedCards={setClickedCards}
      />
    </div>
  )
}

export default Solitaire;