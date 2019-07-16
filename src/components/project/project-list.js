import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import imgUrls from './constants';
import slugify from '../helpers/slugify';

const Images = ({ match }) => {
  const allImages = imgUrls.map(({ projectName, pictureUrl }) => (
    <div key={projectName} data-test-carousel-slide-project-wrapper>
      <h1
        className="carousel__slide--project-header"
        data-test-carousel-slide-project-header
      >
        {projectName}
      </h1>
      <Link
        className="carousel__slide--thumbnail-link"
        to={`${match.url}/${slugify(projectName)}`}
        data-test-carousel-slide-link
      >
        <img
          className="carousel__slide-image"
          data-test-carousel-slide-image
          src={pictureUrl}
          alt={pictureUrl}
        />
      </Link>
    </div>
  ));
  return <Fragment>{allImages}</Fragment>;
};

Images.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    isExact: PropTypes.bool.isRequired,
  }).isRequired,
};

export default withRouter(Images);
