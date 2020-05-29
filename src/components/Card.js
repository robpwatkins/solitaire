import React from 'react';
import Spades from '../img/Spades.png';
import Clubs from '../img/Clubs.png';
import Diamonds from '../img/Diamonds.png';
import Hearts from '../img/Hearts.png';

const Card = (props) => {


  let cardClass = [
    'card',
    ((props.card.suit === 'Diamonds') || (props.card.suit === 'Hearts')) && 'red'
  ];
  cardClass = cardClass.join(' ');

  return (
    <div className={cardClass}>
      <div className="rank-top">
        <div className="rank-suit">
          <span>{props.card.rank}</span>
          {
            props.card.suit === 'Spades'
            ? <img key="Spades" src={Spades} alt="" className="lil-guy" />
            : [
              props.card.suit === 'Clubs'
              ? <img key="Clubs" src={Clubs} alt="" className="lil-guy" />
              : [
                props.card.suit === 'Diamonds'
                ? <img key="Diamonds" src={Diamonds} alt="" className="lil-guy" />
                : <img key="Hearts" src={Hearts} alt="" className="lil-guy" />
              ]
            ]
          }
        </div>
      </div>
        {
          props.card.suit === 'Spades'
          ? <img key="Spades" src={Spades} alt="" />
          : [
            props.card.suit === 'Clubs'
            ? <img key="Clubs" src={Clubs} alt="" />
            : [
              props.card.suit === 'Diamonds'
              ? <img key="Diamonds" src={Diamonds} alt="" />
              : <img key="Hearts" src={Hearts} alt="" />
            ]
          ]
        }
      <div className="rank-bottom">
        <div className="rank-suit">
          <span>{props.card.rank}</span>
          {
            props.card.suit === 'Spades'
            ? <img key="Spades" src={Spades} alt="" className="lil-guy" />
            : [
              props.card.suit === 'Clubs'
              ? <img key="Clubs" src={Clubs} alt="" className="lil-guy" />
              : [
                props.card.suit === 'Diamonds'
                ? <img key="Diamonds" src={Diamonds} alt="" className="lil-guy" />
                : <img key="Hearts" src={Hearts} alt="" className="lil-guy" />
              ]
            ]
          }
        </div>
      </div>
    </div>
  )
}

export default Card;