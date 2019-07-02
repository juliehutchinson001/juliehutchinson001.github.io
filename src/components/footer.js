import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Footer = ({ location }) => (
  <footer className="portfolio__footer" data-test-portfolio-footer-wrapper>
    {location.pathname === '/projects' && (
      <small
        className="footer__additional-info"
        data-test-footer-additional-info
      >
        Click on the image for project details
      </small>
    )}
    <a
      className="footer__contact-link email"
      data-test-portfolio-contact-link
      href="mailto:julie.hutchinson001@outlook.com"
    >
      EMAIL
    </a>
    <a
      className="footer__contact-link github"
      data-test-portfolio-contact-link
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/juliehutchinson001"
    >
      GITHUB
    </a>
    <a
      className="footer__contact-link linkedin"
      data-test-portfolio-contact-link
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/julie-hutchinson/"
    >
      LINKEDIN
    </a>
  </footer>
);

Footer.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withRouter(Footer);
