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

  render() {
    const { activeImageIdx, pixelsToMove } = this.state;

    return <main className="App">this is the projects dashboard</main>;
  }
}

export default ProjectsContainer;
