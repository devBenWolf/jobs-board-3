import {useState, createContext} from "react"
import data from "../data.json"
export const DataContext = createContext()

const DataContextProvider = ({children}) => {
    const [currentData, setCurrentData] = useState(data)
    const [mainInputData, setMainInputData] = useState("")
    const [locationInputData, setLocationInputData] = useState("")
    
    return ( 
        <DataContext.Provider 
            value={{currentData, setCurrentData, mainInputData, setMainInputData,
                locationInputData, setLocationInputData
            }}
        >
            {children}
        </DataContext.Provider>

     );
}
 
export default DataContextProvider;