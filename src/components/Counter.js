import React from 'react';

const Counter = ({ index, score, changeScore }) => {
  // same as in Header.js 
  // let index = props.index;

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
    </div>
  );
}

export default Counter;