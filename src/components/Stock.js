import React from 'react';
import LoopIcon from '@material-ui/icons/Loop';

const Stock = ({ stock, setStock, waste, setWaste }) => {

  const handleClick = () => {
    if (stock.length === 0) {
      let newWaste = waste;
      newWaste.reverse();
      setStock(stock => stock = newWaste);
      setWaste(waste => waste = []);
    } else {
      let newStock = stock;
      setWaste([...waste, newStock.splice(stock.length - 1, 1)[0]]);
    }
  }

  return (
    <div 
      className={stock.length > 0 ? "stock" : "stock stock-empty"} 
      onClick={handleClick}>
        {stock.length === 0 && (
          <LoopIcon className="loop" style={{fontSize: "100px"}} />
        )}
    </div>
  )
}

export default Stock;