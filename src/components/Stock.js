import React, { useEffect } from 'react';

const Stock = ({ isClicked, setIsClicked }) => {

  useEffect(() => {
    if (isClicked) {
      setIsClicked(false);
    }
  })

  const handleClick = () => {
    setIsClicked(isClicked => isClicked = true);
  }

  return (
    <div className="stock" onClick={handleClick}>

    </div>
  )
}

export default Stock;