import {useContext} from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import Header from "../HomeComponents/Header"
import { HeaderDiv } from "../HomeComponents/Header/styles/headerStyles"
import {Main} from "../HomeComponents/PrimaryDiv/styles/primaryDivStyles"
import { ThemeDiv } from "../HomeComponents/ThemeInput/styles/themeInputStyles"
import {FaMoon, FaSun} from "react-icons/fa"
import ThemeInput from "../HomeComponents/ThemeInput"
import { Link } from "react-router-dom"


const Layout = ({children}) => {
    const {themeBoolean, setThemeBoolean} = useContext(ThemeContext)

    return (
        <Main themeBoolean={themeBoolean}>
            <HeaderDiv>
                {/* Make sure component from which you're linking is within the BrowserRouter context */}
                
                <Link to="/" style={{textDecoration: "none"}}><Header.Text>devjobs</Header.Text></Link>
                <ThemeDiv>
                    <FaSun style={{color: "hsl(var(--clr-white))"}} size="20" />
                    <ThemeInput.Label className = "switch">
                        <ThemeInput.Button onClick={() => setThemeBoolean(!themeBoolean)}/>
                        <ThemeInput.Span className = "slider round"></ThemeInput.Span>
                    </ThemeInput.Label>
                    <FaMoon style={{color: "hsl(var(--clr-white))"}} size="20" />
                </ThemeDiv>
            </HeaderDiv>
            {children}
        </Main>
    )
}

export default Layout