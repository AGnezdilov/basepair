import React from 'react';
import logo from './logo.svg';

import './styles/index.css';

const App = () => (
  <div className="App">
    {console.log(process.env.REACT_APP_VANTAGE_API_KEY)}
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
