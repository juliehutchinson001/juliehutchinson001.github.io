import React from 'react';
import PropTypes from 'prop-types';
import projectsDB from '../project/constants';

const BottomButtonsSlider = ({ activeButton, children, slideTo }) => {
  const multipleButtons = projectsDB.map((image, idx) => (
    <button
      type="button"
      className={activeButton === idx ? 'button-act' : 'button-no-act'}
      key={`${image.pictureUrl}idx`}
      data-test-slider-buttons-bottom
      onClick={() => slideTo(idx)}
    />
  ));
  return (
    <section
      data-test-slider-buttons-bottom-wrapper
      className="slider__buttons-container--bottom"
    >
      <small
        className="legend__additional-info"
        data-test-legend-additional-info
      >
        Click on the image for project details
      </small>
      <div className="slider__nav--dots">{multipleButtons}</div>
      <div className="slider__nav--arrows">{children}</div>
    </section>
  );
};

BottomButtonsSlider.propTypes = {
  slideTo: PropTypes.oneOfType([PropTypes.func]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
  activeButton: PropTypes.number.isRequired,
};

export default BottomButtonsSlider;
