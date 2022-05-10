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

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeContextProvider>
    <DataContextProvider>
    <InputContextProvider>
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path = "/" element={<HomeContainer />} />
          <Route path = ":jobId" element = {<Job />} />
        </Routes>
        </Layout>
      </BrowserRouter>
    </InputContextProvider>
    </DataContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

