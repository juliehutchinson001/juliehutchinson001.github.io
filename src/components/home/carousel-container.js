import React from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ pixelsToMove, children, direction }) => {
  const carouselStyle = direction === 'down' ? -pixelsToMove : pixelsToMove;
  return (
    <section
      className="carousel__outer-wrapper"
      data-test-carousel-outer-wrapper
    >
      <div
        style={{ transform: `translateY(${carouselStyle}px)` }}
        className="carousel__inner-wrapper"
        data-test-carousel-inner-wrapper
      >
        {children}
      </div>
    </section>
  );
};

Carousel.propTypes = {
  pixelsToMove: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
};

export default Carousel;
