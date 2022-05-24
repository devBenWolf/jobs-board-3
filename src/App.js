import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { GlobalStyles } from './globalStyles';
import ThemeContextProvider from './contexts/ThemeContext';
import DataContextProvider from './contexts/DataContext';
import InputContextProvider from './contexts/InputContext';
import AuthContextProvider from './contexts/AuthContext';
import HomeContainer from "./containers/HomeContainer";
import LoginContainer from './containers/LoginContainer';
import Job from './routes/job';
import Layout from './components/Layout';
import CreateJobsContainer from './containers/CreateJobsContainer';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';


function App() {
  const [jobs, setJobs] = useState([])

  const jobsCollectionRef = collection(db, "jobs")

  useEffect(() => {
    const getJobs = async () => {
      const data = await getDocs(jobsCollectionRef)
      //console.log(data.docs.map((item) => ({...item.data(), id: doc.id})))
      setJobs(data.docs)
    }
    getJobs()
  }, [])

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
              <Route path = "/" element={<HomeContainer jobs={jobs} />} />              
              <Route path = "/login" element={<LoginContainer />} />                  
              <Route path = "/create-jobs" element={<CreateJobsContainer />} />         
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
