import React from 'react';
import { Link, Route } from 'react-router-dom';
import ProjectsContainer from './home/projects-container';
import BlogDashboard from './blogs/blog-dashboard';
import ContactContainer from './about/contact-container';
import julie from '../styles/assets/images/julie_final.jpg';

const Header = () => {
  return (
    <div className="navigation__top--container">
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
              Blogs
            </Link>
          </li>
          <li className="navigation__list--links">
            <Link to="/about" className="navigation__link">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Route path="/projects" exact component={ProjectsContainer} />
      <Route path="/blogs" component={BlogDashboard} />
      <Route path="/about" component={ContactContainer} />
    </div>
  );
};

export default Header;
