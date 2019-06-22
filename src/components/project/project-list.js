import React from 'react';
import { Link, Route } from 'react-router-dom';
import IndividualProject from './individual-project';
import imgUrls from '../helpers/images-info';

const Images = () => {
  const allImages = imgUrls.map(eachImg => (
    <div key={eachImg.projectName}>
      <h1
        className="carousel__slide--project-header"
        data-test-carousel-slide-project-header
      >
        {eachImg.projectName}
      </h1>
      <Link
        className="carousel__slide--thumbnail-link"
        to={`/projects/${eachImg.sluggedName}`}
        data-test-carousel-slide-link
      >
        <img
          className="carousel__slide-image"
          data-test-carousel-slide-image
          src={eachImg.url}
          alt={eachImg.url}
        />
      </Link>
      <Route path="/" component={IndividualProject} />
    </div>
  ));
  return allImages;

  // <Route path={`${match.path}/:topicId`} component={<div>{'IndividualProject'}</div>
};

export default Images;
