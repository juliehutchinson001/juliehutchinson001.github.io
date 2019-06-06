import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={App} />
    </div>
  );
}

export default App;
