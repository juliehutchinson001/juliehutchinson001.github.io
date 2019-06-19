import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header';
import ProjectsContainer from './components/home/projects-container';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from="/" to="/projects" />
        <Route path="/projects" exact component={ProjectsContainer} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
