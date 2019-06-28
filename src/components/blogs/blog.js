import React from 'react';
import PropTypes from 'prop-types';

const Blog = props => {
  const { match } = props;
  return (
    <div>
      <p>this is the first blog with the id {match.params.id}</p>
    </div>
  );
};

Blog.propTypes = {
  match: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

export default Blog;
