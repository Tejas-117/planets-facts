import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { PlanetProvider } from './utils/ContextProvider';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <PlanetProvider>
      <App />
    </PlanetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
