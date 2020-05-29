import React from 'react';
import Card from './Card';

const Topmost = ({ topmost, isOrigin, name }) => {

  let topClass = [
    "topmost",
    isOrigin && "origin",
    name === "top" && name,
    name ==="bottom" && name
  ];
  topClass = topClass.join(' ');
  // console.log('Topmost', topmost);
  return (
    <div className={topClass}>
      <Card card={topmost} />
    </div>
  )
}

export default Topmost;