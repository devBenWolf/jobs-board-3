import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { GlobalStyles } from './globalStyles';
import ThemeContextProvider from './contexts/ThemeContext';
import DataContextProvider from './contexts/DataContext';
import InputContextProvider from './contexts/InputContext';
import HomeContainer from "./containers/HomeContainer";

import Job from './routes/job';
import Layout from './components/Layout';


function App() {

  return (
    <>
      <GlobalStyles />
      <ThemeContextProvider>
      <DataContextProvider>
      <InputContextProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path = "/" element={<HomeContainer />} />
              <Route path = "/:jobId" element = {<Job />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </InputContextProvider>
      </DataContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
