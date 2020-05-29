import React from 'react';
import Card from './Card';

const Topmost = ({ topmost }) => {
  console.log('Topmost', topmost);
  return (
    <div className="topmost">
      <Card card={topmost} />
    </div>
  )
}

export default Topmost;