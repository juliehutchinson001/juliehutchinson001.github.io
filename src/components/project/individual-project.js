import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import projectsDB from './constants';
import slugify from '../helpers/slugify';
import NotFoundContainer from '../not-found';

const Project = ({ match }) => {
  const { id } = match.params;
  const project = projectsDB.find(
    eachProject => slugify(eachProject.projectName) === id
  );

  if (!project) {
    return <NotFoundContainer />;
  }
  const { projectName, technologies, links, pictureUrl, description } = project;

  const projectLinks = links.map(({ link, name }) => (
    <li className="project__links" key={name} data-test-project-links>
      <a
        href={link}
        className="project__link--github"
        data-test-project-link-github
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    </li>
  ));

  return (
    <main className="project__outer-wrapper" data-test-project-outer-wrapper>
      <figure
        className="project__image-wrapper"
        data-test-project-image-wrapper
      >
        <img
          src={pictureUrl}
          alt={projectName}
          className="project__image"
          data-test-project-image
        />
      </figure>

      <section
        className="project__information-wrapper"
        data-test-project-information-wrapper
      >
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
        <ul className="project__links-wrapper" data-test-project-links-wrapper>
          {projectLinks}
        </ul>
      </section>
    </main>
  );
};

Project.propTypes = {
  match: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default withRouter(Project);
