import React from 'react';
import './App.scss';

import Header from './components/header/header';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
