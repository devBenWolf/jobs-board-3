import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DataContextProvider from './contexts/DataContext';


ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

