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
    const [unfilteredJobs, setUnfilteredJobs] = useState([])
    
    const jobsCollectionRef = collection(db, "jobs")

    useEffect(() => {
      const getJobs = async () => {
        const data = await getDocs(jobsCollectionRef)
        setJobs(data.docs.map((item) => ({...item.data(), id: item.id})))
        setUnfilteredJobs(data.docs.map((item) => ({...item.data(), id: item.id})))
        localStorage.setItem("localJobs", JSON.stringify(data.docs.map((item) => ({...item.data(), id: item.id}))))
      }
      getJobs()
      
    }, [])
    
    const localObject = localStorage.getItem("localJobs")
    const localJobs = JSON.parse(localObject)

    return ( 
        <DataContext.Provider 
            value={{currentData, setCurrentData, mainInputData, setMainInputData, localJobs,
                locationInputData, setLocationInputData, jobs, setJobs, unfilteredJobs
            }}
        >
            {children}
        </DataContext.Provider>

     );
}
 
export default DataContextProvider;