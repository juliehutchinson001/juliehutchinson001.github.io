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
  const {
    projectName,
    technologies,
    link,
    live,
    pictureUrl,
    description,
  } = project;

  return (
    <section className="project__outer-wrapper" data-test-project-outer-wrapper>
      <img
        className="project__image"
        data-test-project-image
        src={pictureUrl}
        alt={projectName}
      />
      <h1 className="project__header" data-test-project-header>
        {projectName}
      </h1>

      <h3
        className="project__technologies-header"
        data-test-project-technologies-header
      >
        TECHNOLOGIES
      </h3>

      <p
        className="project__technologies-description"
        data-test-project-technologies-description
      >
        {technologies}
      </p>

      <h3
        className="project__description-header"
        data-test-project-description-header
      >
        DESCRIPTION
      </h3>
      <p className="project__description" data-test-project__description>
        {description}
      </p>

      <h3 className="project__links-header" data-test-project-links-header>
        LINKS
      </h3>
      {/* <a href={link} className="project__link--github" data-test-project-link-github>
        source code
  </a> */}
    </section>
  );
};

Project.propTypes = {
  match: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default withRouter(Project);
