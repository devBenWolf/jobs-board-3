import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Job from "./routes/job"
import Layout from './components/Layout';
import ContextProvider from './context/ThemeContext';
import { GlobalStyles } from './globalStyles';
import HomeContainer from './containers/HomeContainer';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ContextProvider>
    
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path = "/" element={<HomeContainer />} />
          <Route path = ":jobId" element = {<Job />} />
        </Routes>
        </Layout>
      </BrowserRouter>
    
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

