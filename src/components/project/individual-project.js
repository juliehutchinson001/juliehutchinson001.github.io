import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import imgUrls from './constants';
import slugify from '../helpers/slugify';

const Project = ({ match }) => {
  const { id } = match.params;
  const project = imgUrls.find(
    eachProject => slugify(eachProject.projectName) === id
  );
  return (
    <section
      className="carousel__outer-wrapper"
      data-test-carousel-outer-wrapper
    >
      <p>{project.projectName}</p>
      <p>{project.description}</p>
    </section>
  );
};

Project.propTypes = {
  match: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default withRouter(Project);
