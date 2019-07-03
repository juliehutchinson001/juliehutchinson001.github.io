import React from 'react';
import PropTypes from 'prop-types';
import imgUrls from '../project/constants';

const BottomButtonsSlider = ({ activeButton, children, slideTo }) => {
  const multipleButtons = imgUrls.map((image, idx) => (
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
      {children}
      <div className="slider__nav--dots">{multipleButtons}</div>
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
