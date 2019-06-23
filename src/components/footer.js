import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="portfolio__footer" data-test-portfolio-footer-wrapper>
    <small className="footer__additional-info" data-test-footer-additional-info>
      Click on the image for project details
    </small>
    <Link
      className="footer__contact-link"
      to="/contact"
      data-test-portfolio-contact-link
    >
      GET IN TOUCH
    </Link>
  </footer>
);

export default Footer;
