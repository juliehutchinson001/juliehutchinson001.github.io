import React from 'react';
import { Link } from 'react-router-dom';

const BlogDashboard = () => (
  <div>
    <p>this is the blog dashboard</p>
    <Link to="/blogs/id1">First Post</Link>
    <Link to="/blogs/id2">Second Post</Link>
  </div>
);

export default BlogDashboard;
