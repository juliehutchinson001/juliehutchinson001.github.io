import React, { Component } from 'react';
import Arrow from './carousel-arrows';
import Carousel from './carousel-container';
import BottomButtonsSlider from './bottom-buttons';
import getImages, { imgUrls } from '../helpers/images-urls';
import isWithinBoundry from '../helpers/is-index-within';
// import PropTypes from 'prop-types';

class ProjectsContainer extends Component {
  constructor(props) {
    super(props);

    this.widthImage = 400;
    this.state = {
      activeImageIdx: 0,
      pixelsToMove: 0,
    };
  }

  slideTo(idx) {
    const pixelsToMove = idx * this.widthImage * -1;
    this.setState({ pixelsToMove, activeImageIdx: idx });
  }

  goToImage(direction) {
    const { activeImageIdx } = this.state;
    const isGoingNext = direction === 'next';
    const nextIdx = isGoingNext ? activeImageIdx + 1 : activeImageIdx - 1;

    if (isWithinBoundry(nextIdx)) {
      const pixelsToMove = nextIdx * this.widthImage * -1;
      this.setState({ pixelsToMove, activeImageIdx: nextIdx });
    }
  }

  render() {
    const { activeImageIdx, pixelsToMove } = this.state;

    return (
      <main className="App">
        <Arrow
          handleSlide={() => this.goToImage('prev')}
          direct="prev"
          symbolCode="&#12296;"
        />

        <Carousel pixelsToMove={pixelsToMove} headerOfProject="blah">
          {getImages()}
        </Carousel>

        <Arrow
          handleSlide={() => this.goToImage('next')}
          direct="next"
          symbolCode="&#12297;"
        />

        <BottomButtonsSlider
          imgUrls={imgUrls}
          activeButton={activeImageIdx}
          slideTo={idx => this.slideTo(idx)}
        />
      </main>
    );
  }
}

export default ProjectsContainer;
