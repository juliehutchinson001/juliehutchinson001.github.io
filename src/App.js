import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header';
import ProjectsContainer from './components/home/projects-container';
import BlogDashboard from './components/blogs/blog-dashboard';
import ContactContainer from './components/about/contact-container';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from="/projects" to="/" />
        <Route path="/" exact component={ProjectsContainer} />
        <Route path="/blogs" component={BlogDashboard} />
        <Route path="/about" component={ContactContainer} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
