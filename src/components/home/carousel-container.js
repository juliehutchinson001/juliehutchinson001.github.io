import React from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ children, pixelsToMove }) => (
  <section className="carousel__outer-wrapper" data-test-carousel-outer-wrapper>
    <div
      style={{ transform: `translateX(${pixelsToMove}px)` }}
      className="carousel__inner-wrapper"
      data-test-carousel-inner-wrapper
    >
      {children}
    </div>
  </section>
);

Carousel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  pixelsToMove: PropTypes.number.isRequired,
};

export default Carousel;
