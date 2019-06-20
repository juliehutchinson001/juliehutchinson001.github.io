import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="portfolio__footer">
      <small className="footer__additional-info">
        Click on the image for project details
      </small>
      <Link className="footer__contact-link" to="/contact">
        GET IN TOUCH
      </Link>
    </footer>
  );
};

export default Footer;
