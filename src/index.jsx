import { configure } from 'mobx';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { rootStore, StoresContextProvider } from './contexts';

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  disableErrorBoundaries: true,
});

ReactDOM.render(
  <React.StrictMode>
    <StoresContextProvider value={rootStore}>
      <App />
    </StoresContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);