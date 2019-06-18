import React from 'react';

const Arrow = ({ direction, handleSlide, symbolCode }) => (
  <button
    type="button"
    className={`app__scroller--${direction}`}
    onClick={handleSlide}
  >
    {symbolCode}
  </button>
);

export default Arrow;
