import React from 'react';
import { Link } from 'react-router-dom';
import julie from '../styles/assets/images/julie_final.jpg';

const Header = () => {
  return (
    <nav className="navigation__top">
      <ul className="navigation__list">
        <li className="navigation__list--home-links">
          <Link to="/" className="navigation__link--home">
            <img
              src={`${julie}`}
              className="navigation__image-link--home"
              alt="Julie Hutchinson's thumbnail"
            />
            <span className="navigation__link-home--text">
              Julie Hutchinson
            </span>
          </Link>
        </li>
        <li className="navigation__list--links">
          <Link to="/blogs" className="navigation__link">
            BLOGS
          </Link>
        </li>
        <li className="navigation__list--links">
          <Link to="/about" className="navigation__link">
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
