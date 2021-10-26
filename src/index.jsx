import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { rootStore, StoresContextProvider } from './contexts';

ReactDOM.render(
  <React.StrictMode>
    <StoresContextProvider value={rootStore}>
      <App />
    </StoresContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);