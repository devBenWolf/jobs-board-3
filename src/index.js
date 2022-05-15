import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Job from "./routes/job"
import Layout from './components/Layout';
import { GlobalStyles } from './globalStyles';
import HomeContainer from './containers/HomeContainer';
import ThemeContextProvider from './contexts/ThemeContext';
import DataContextProvider from './contexts/DataContext';
import InputContextProvider from './contexts/InputContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

