import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import slugify from '../helpers/slugify';
import blogs from './constants';
import ComingSoonSVG from '../../styles/assets/images/coming-soon';

const BlogDashboard = ({ match }) => {
  {
    /*
    const allBlogs = blogs.map(({ blogName, blogAbstract }) => (
    <li
      key={blogName}
      className="individual-blog__section--wrapper"
      data-test-individual-blog-section-wrapper
    >
      <Link
        className="individual-blog__header--link"
        to={`${match.url}/${slugify(blogName)}`}
        data-test-blog-header-link
      >
        <h1
          className="individual-blog__header"
          data-test-blog-header-project-header
        >
          {blogName}
        </h1>
      </Link>
      <p className="individual-blog__abstract" data-test-blog-abstract>
        {blogAbstract}
      </p>
    </li>
  ));

  return (
    <main className="main-blog__section" data-test-main-blog-section>
      <h1
        className="main-blog__section--header"
        data-test-main-blog-section-header
      >
        this is the blog dashboard title
      </h1>
      <h2
        className="main-blog__section--subheader"
        data-test-main-blog-section-subheader
      >
        this is the blog dashboard subtitle
      </h2>
      <ul className="main-blog__section--list" data-test-main-blog-section-list>
        {allBlogs}
      </ul>
    </main>
  );
   */
  }

  return (
    <div className="main-blog__section">
      <ComingSoonSVG />
      <p className="main-blog__section-header">Coming soon</p>
    </div>
  );
};

BlogDashboard.propTypes = {
  match: PropTypes.objectOf([PropTypes.string]).isRequired,
};

export default withRouter(BlogDashboard);
