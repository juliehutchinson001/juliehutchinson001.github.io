import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import imgUrls from './constants';
import slugify from '../helpers/slugify';

const Images = ({ match }) => {
  const allImages = imgUrls.map(({ projectName, pictureUrl }) => (
    <Link
      key={projectName}
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
  ));
  return <Fragment>{allImages}</Fragment>;
};

export const ProjectTitles = withRouter(({ match }) => {
  const allImages = [];
  for (let i = imgUrls.length - 1; i > -1; i -= 1) {
    allImages.push(
      <Link
        className="carousel__slide--header-link"
        key={imgUrls[i].projectName}
        to={`${match.url}/${slugify(imgUrls[i].projectName)}`}
        data-test-carousel-slide-header-link
      >
        <h1
          className="carousel__slide--project-header"
          data-test-carousel-slide-project-header
        >
          {imgUrls[i].projectName}
        </h1>
      </Link>
    );
  }
  return <div className="carousel__header-container">{allImages}</div>;
});

Images.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    isExact: PropTypes.bool.isRequired,
  }).isRequired,
};

export default withRouter(Images);
