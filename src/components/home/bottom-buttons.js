import React from 'react';
import PropTypes from 'prop-types';
import { imgUrls } from '../helpers/images-urls';

const BottomButtonsSlider = ({ activeButton, slideTo }) => {
  const multipleButtons = imgUrls.map((ima, idx) => (
    <button
      type="button"
      className={activeButton === idx ? 'button-act' : 'button-no-act'}
      key={`${ima.urlProject}idx`}
      onClick={() => slideTo(idx)}
    />
  ));
  return (
    <section className="slider__bottom-buttons">{multipleButtons}</section>
  );
};

BottomButtonsSlider.propTypes = {
  slideTo: PropTypes.oneOfType([PropTypes.func]).isRequired,
  activeButton: PropTypes.number.isRequired,
};

export default BottomButtonsSlider;
