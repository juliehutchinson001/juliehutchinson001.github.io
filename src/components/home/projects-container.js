/* eslint-disable react/jsx-curly-brace-presence */
import React, { Component } from 'react';
import Carousel from './carousel-container';
import BottomButtonsSlider from './bottom-buttons';
import Arrow from './carousel-arrows';
import isWithinBoundry from '../helpers/is-index-within';

class ProjectsContainer extends Component {
  constructor(props) {
    super(props);

    this.imageHeight = 392;
    this.state = {
      activeImageIdx: 0,
      pixelsToMove: 0,
    };
  }

  slideTo(idx) {
    const pixelsToMove = idx * this.imageHeight * -1;
    this.setState({ pixelsToMove, activeImageIdx: idx });
  }

  goToImage(direction) {
    const { activeImageIdx } = this.state;
    const isGoingNext = direction === 'next';
    const nextIdx = isGoingNext ? activeImageIdx + 1 : activeImageIdx - 1;

    if (isWithinBoundry(nextIdx)) {
      const pixelsToMove = nextIdx * this.imageHeight * -1;
      this.setState({ pixelsToMove, activeImageIdx: nextIdx });
    }
  }

  render() {
    const { activeImageIdx, pixelsToMove } = this.state;

    return (
      <main className="projects__main-container" data-test-project-container>
        <section
          className="welcome__section--message"
          data-test-welcome-message-section
        >
          <h1
            className="welcome__section--header-message"
            data-test-welcome-header-message-section
          >
            JULIE HUTCHINSON&#x2019;S SITE
          </h1>
          <h4
            className="welcome__section--subheader-message"
            data-test-welcome-subjeader-message-section
          >
            I am a Frontend Engineer at the Bay Area
          </h4>
        </section>
        <Carousel pixelsToMove={pixelsToMove} />
        <BottomButtonsSlider
          activeButton={activeImageIdx}
          slideTo={idx => this.slideTo(idx)}
        >
          <Arrow
            handleSlide={() => this.goToImage('prev')}
            direction="prev"
            symbolCode="&#8592;"
          />
          <Arrow
            handleSlide={() => this.goToImage('next')}
            direction="next"
            symbolCode="&#8594;"
          />
        </BottomButtonsSlider>
      </main>
    );
  }
}

export default ProjectsContainer;
