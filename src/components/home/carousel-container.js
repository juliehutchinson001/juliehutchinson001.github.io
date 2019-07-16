import React from 'react';
import PropTypes from 'prop-types';
import Images from '../project/project-list';

const Carousel = ({ pixelsToMove }) => (
  <section className="carousel__outer-wrapper" data-test-carousel-outer-wrapper>
    <div
      style={{ transform: `translateY(${pixelsToMove}px)` }}
      className="carousel__inner-wrapper"
      data-test-carousel-inner-wrapper
    >
      <Images />
    </div>
  </section>
);

Carousel.propTypes = {
  pixelsToMove: PropTypes.number.isRequired,
};

export default Carousel;
