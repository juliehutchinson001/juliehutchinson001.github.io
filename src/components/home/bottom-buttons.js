import React from 'react';
import PropTypes from 'prop-types';
import Arrow from './carousel-arrows';
import imgUrls from '../helpers/images-info';

const BottomButtonsSlider = ({ activeButton, handleSlide, slideTo }) => {
  const multipleButtons = imgUrls.map((ima, idx) => (
    <button
      type="button"
      className={activeButton === idx ? 'button-act' : 'button-no-act'}
      key={`${ima.url}idx`}
      data-test-slider-buttons-bottom
      onClick={() => slideTo(idx)}
    />
  ));
  return (
    <section
      data-test-slider-buttons-bottom-wrapper
      className="slider__buttons-container--bottom"
    >
      <Arrow
        handleSlide={(a = 'prev') => handleSlide(a)}
        direction="prev"
        symbolCode="&#8592;"
      />
      <Arrow
        handleSlide={(b = 'next') => handleSlide(b)}
        direction="next"
        symbolCode="&#8594;"
      />
      <div className="slider__nav--dots">{multipleButtons}</div>
    </section>
  );
};

BottomButtonsSlider.propTypes = {
  slideTo: PropTypes.oneOfType([PropTypes.func]).isRequired,
  handleSlide: PropTypes.oneOfType([PropTypes.func]).isRequired,
  activeButton: PropTypes.number.isRequired,
};

export default BottomButtonsSlider;
