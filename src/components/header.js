import React from 'react';
import { Link, Route } from 'react-router-dom';
import ProjectsContainer from './home/projects-container';
import BlogDashboard from './blogs/blog-dashboard';
import ContactContainer from './about/contact-container';

const Header = () => {
  return (
    <div className="portfolio__navigation">
      <nav>
        <ul>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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
