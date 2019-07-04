import React from 'react';

const Footer = () => (
  <footer className="portfolio__footer" data-test-portfolio-footer-wrapper>
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

export default Footer;
