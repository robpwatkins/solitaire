import React from 'react';
import Card from './Card';

const Topmost = ({ topmost, isOrigin }) => {
  // console.log('Topmost', topmost);
  return (
    <div className={isOrigin ? "topmost origin" : "topmost"}>
      <Card card={topmost} />
    </div>
  )
}

export default Topmost;