import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header';
import ProjectsContainer from './components/home/projects-container';
import Project from './components/project/individual-project';
import BioContainer from './components/about/about-me';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from="/projects" to="/" />
        <Route path="/" exact component={ProjectsContainer} />
        <Route path="/projects/:id" component={Project} />
        <Route path="/about" component={BioContainer} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
