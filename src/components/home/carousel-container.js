import React from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ children, headerOfProject, pixelsToMove }) => (
  <div className="window">
    <h1>{headerOfProject}</h1>
    <section
      style={{ transform: `translateX(${pixelsToMove}px)` }}
      className="app__carousel"
    >
      {children}
    </section>
  </div>
);

Carousel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  headerOfProject: PropTypes.string.isRequired,
  pixelsToMove: PropTypes.number.isRequired,
};

export default Carousel;
