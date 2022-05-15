import {useState, createContext} from "react"

export const InputContext = createContext()

const InputContextProvider = ({children}) => {
    const [inputFilter, setInputFilter] = useState(1)
    const [timeFilter, setTimeFilter] = useState(false)
    const [inputFocus, setInputFocus] = useState(1)
    const [desktopInputFocus, setDesktopInputFocus] = useState(true)

    return ( 
        <InputContext.Provider value={{inputFilter, setInputFilter, timeFilter, setTimeFilter, inputFocus, setInputFocus,
            desktopInputFocus, setDesktopInputFocus}}
        >
            {children}
        </InputContext.Provider>

     );
}
 
export default InputContextProvider;