import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header';
import ProjectsComponent from './components/projects';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={ProjectsComponent} />
      <Footer />
    </div>
  );
}

export default App;
