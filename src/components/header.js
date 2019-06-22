import React from 'react';
import { Link } from 'react-router-dom';
import julie from '../styles/assets/images/julie_final.jpg';

const Header = () => {
  return (
    <nav className="navigation__top" data-test-navigation-container>
      <ul className="navigation__list" data-test-navigation-list>
        <li
          className="navigation__list--home-links"
          data-test-navigation-home-link-wrapper
        >
          <Link
            to="/"
            className="navigation__link--home"
            data-test-navigation-home-link
          >
            <img
              src={`${julie}`}
              className="navigation__image-link--home"
              data-test-navigation-home-link-image
              alt="Julie Hutchinson's thumbnail"
            />
            <span
              className="navigation__link-home--text"
              data-test-navigation-home-link-text
            >
              Julie Hutchinson
            </span>
          </Link>
        </li>
        <li
          className="navigation__list--links"
          data-test-navigation-blogs-link-wrapper
        >
          <Link
            to="/blogs"
            className="navigation__link"
            data-test-navigation-blogs-link
          >
            BLOGS
          </Link>
        </li>
        <li
          className="navigation__list--links"
          data-test-navigation-about-link-wrapper
        >
          <Link
            to="/about"
            className="navigation__link"
            data-test-navigation-about-link
          >
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
