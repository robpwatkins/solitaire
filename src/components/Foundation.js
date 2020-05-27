import React from 'react';

const Foundation = (props) => {
  return (
    <div className={props.cards ? "foundation" : "foundation empty"}>

    </div>
  )
}

export default Foundation;