import React from 'react';
import PropTypes from 'prop-types';
import blog from './constants';
import slugify from '../helpers/slugify';

const Blog = ({ match }) => {
  const { id } = match.params;
  const blogToDisplay = blog.find(
    eachBlog => slugify(eachBlog.blogName) === id
  );
  return (
    <main className="main__blog-content--wrapper" data-test-main-blog-wrapper>
      <h1 className="blog__header" data-test-blog-header>
        {blogToDisplay.blogName}
      </h1>
      <p className="blog__content" data-test-blog-content>
        {blogToDisplay.description}
      </p>
    </main>
  );
};

Blog.propTypes = {
  match: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default Blog;
