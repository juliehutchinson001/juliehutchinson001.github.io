import React from 'react';
import PropTypes from 'prop-types';

const Arrow = ({ direction, handleSlide, symbolCode }) => (
  <button
    type="button"
    className={`carousel__slide-button--${direction}`}
    data-test-carousel-slide-button-direction
    onClick={handleSlide}
  >
    {symbolCode}
  </button>
);

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  handleSlide: PropTypes.func.isRequired,
  symbolCode: PropTypes.string.isRequired,
};

export default Arrow;
