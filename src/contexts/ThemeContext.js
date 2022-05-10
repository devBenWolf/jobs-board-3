import {useState, createContext} from "react"

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

    const [themeBoolean, setThemeBoolean] = useState(true)
    const [test, setTest] = useState(false)
    return ( 
        <ThemeContext.Provider value={{themeBoolean, setThemeBoolean, test, setTest}}>
            {children}
        </ThemeContext.Provider>

     );
}
 
export default ThemeContextProvider;