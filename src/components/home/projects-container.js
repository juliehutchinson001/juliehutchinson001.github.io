/* eslint-disable react/jsx-curly-brace-presence */
import React, { Component } from 'react';
import Carousel from './carousel-container';
import BottomButtonsSlider from './bottom-buttons';
import Arrow from './carousel-arrows';
import isWithinBoundry from '../helpers/is-index-within';
import Images, { ProjectTitles } from '../project/project-list';

class ProjectsContainer extends Component {
  constructor(props) {
    super(props);

    this.imageHeight = window.innerHeight > 767 ? 661 : 300;
    this.imageHeightTitle = window.innerHeight > 767 ? 661 : 100;
    this.state = {
      activeImageIdx: 0,
      pixelsToMove: 0,
      pixelsToMoveTitle: 0,
    };
  }

  slideTo(idx) {
    const pixelsToMove = idx * this.imageHeight * -1;
    const pixelsToMoveTitle = idx * this.imageHeightTitle * -1;
    this.setState({ pixelsToMove, activeImageIdx: idx, pixelsToMoveTitle });
  }

  goToImage(direction) {
    const { activeImageIdx } = this.state;
    const isGoingNext = direction === 'next';
    const nextIdx = isGoingNext ? activeImageIdx + 1 : activeImageIdx - 1;

    if (isWithinBoundry(nextIdx)) {
      const pixelsToMove = nextIdx * this.imageHeight * -1;
      const pixelsToMoveTitle = nextIdx * this.imageHeightTitle * -1;
      this.setState({
        pixelsToMove,
        activeImageIdx: nextIdx,
        pixelsToMoveTitle,
      });
    }
  }

  render() {
    const { activeImageIdx, pixelsToMove, pixelsToMoveTitle } = this.state;

    return (
      <main className="projects__main-container" data-test-project-container>
        <div className="carousels__wrapper" data-test-carousels-wrapper>
          <Carousel pixelsToMove={pixelsToMoveTitle} direction="down">
            <ProjectTitles />
          </Carousel>
          <Carousel pixelsToMove={pixelsToMove} direction="up">
            <Images />
          </Carousel>
        </div>

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
