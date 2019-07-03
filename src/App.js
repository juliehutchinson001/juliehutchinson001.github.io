import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header';
import ProjectsContainer from './components/home/projects-container';
import BlogDashboard from './components/blogs/blog-dashboard';
import Blog from './components/blogs/blog';
import BioContainer from './components/about/about-me';
import Footer from './components/footer';
import NotFound from './components/not-found';
import singleProject from './components/project/individual-project';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect exact from="/" to="/projects" />
        <Route path="/projects" exact component={ProjectsContainer} />
        <Route path="/projects/:id" component={singleProject} />
        <Route path="/blogs" exact component={BlogDashboard} />
        <Route path="/blogs/:id" component={Blog} />
        <Route path="/about" component={BioContainer} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
