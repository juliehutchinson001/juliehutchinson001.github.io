import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import julie from '../styles/assets/images/julie_final.jpg';

const Header = ({ location }) => {
  return (
    <nav className="navigation__top" data-test-navigation-container>
      <ul className="navigation__list" data-test-navigation-list>
        <li
          className="navigation__list--home-links"
          data-test-navigation-home-link-wrapper
        >
          <NavLink
            to="/"
            className="navigation__link--home"
            data-test-navigation-home-link
            activeClassName="active-section"
            exact
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
              {location.pathname !== '/projects' ? 'Home' : 'JH'}
            </span>
          </NavLink>
        </li>
        <li
          className="navigation__list--links"
          data-test-navigation-blogs-link-wrapper
        >
          <NavLink
            to="/blogs"
            exact
            className="navigation__link"
            data-test-navigation-blogs-link
            activeClassName="active-section"
          >
            BLOG
          </NavLink>
        </li>
        <li
          className="navigation__list--links about"
          data-test-navigation-about-link-wrapper
        >
          <NavLink
            to="/about"
            className="navigation__link"
            data-test-navigation-about-link
            activeClassName="active-section"
          >
            ABOUT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Header.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withRouter(Header);
