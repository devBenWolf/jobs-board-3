import { useEffect, useState, createContext} from "react"
import data from "../data.json"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"
export const DataContext = createContext()

const DataContextProvider = ({children}) => {
    const [currentData, setCurrentData] = useState(data)
    const [mainInputData, setMainInputData] = useState("")
    const [locationInputData, setLocationInputData] = useState("")
    const [jobs, setJobs] = useState([])
    
    const jobsCollectionRef = collection(db, "jobs")

    useEffect(() => {
      const getJobs = async () => {
        const data = await getDocs(jobsCollectionRef)
        //console.log(data.docs.map((item) => ({...item.data(), id: doc.id})))
        setJobs(data.docs.map((item) => ({...item.data(), id: item.id})))
      }
      getJobs()
    }, [])
    console.log(jobs)

    return ( 
        <DataContext.Provider 
            value={{currentData, setCurrentData, mainInputData, setMainInputData,
                locationInputData, setLocationInputData, jobs, setJobs
            }}
        >
            {children}
        </DataContext.Provider>

     );
}
 
export default DataContextProvider;