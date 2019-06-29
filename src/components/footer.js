import React from 'react';

const Footer = () => (
  <footer className="portfolio__footer" data-test-portfolio-footer-wrapper>
    <small className="footer__additional-info" data-test-footer-additional-info>
      Click on the image for project details
    </small>
    <a
      className="footer__contact-link"
      data-test-portfolio-contact-link
      href="mailto:julie.hutchinson001@outlook.com"
    >
      EMAIL
    </a>
    <a
      className="footer__contact-link"
      data-test-portfolio-contact-link
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/juliehutchinson001"
    >
      GITHUB
    </a>
    <a
      className="footer__contact-link"
      data-test-portfolio-contact-link
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/julie-hutchinson/"
    >
      LINKEDIN
    </a>
  </footer>
);

export default Footer;
