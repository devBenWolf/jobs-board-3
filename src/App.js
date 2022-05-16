import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { GlobalStyles } from './globalStyles';
import ThemeContextProvider from './contexts/ThemeContext';
import DataContextProvider from './contexts/DataContext';
import InputContextProvider from './contexts/InputContext';
import HomeContainer from "./containers/HomeContainer";
import LoginContainer from './containers/LoginContainer';
import Job from './routes/job';
import Layout from './components/Layout';
import AuthContextProvider from './contexts/AuthContext';
import CreateJobsContainer from './containers/CreateJobsContainer';


function App() {

  return (
    <>
      <GlobalStyles />
      <ThemeContextProvider>
      <DataContextProvider>
      <InputContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path = "/" element={<HomeContainer />} />              
              <Route path = "/login" element={<LoginContainer />} />     
              <Route path = "/create-job" element={<CreateJobsContainer />} />         
              <Route path = "/:jobId" element = {<Job />} />
            </Routes>
          </Layout>
        </BrowserRouter>
        </AuthContextProvider>
      </InputContextProvider>
      </DataContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
