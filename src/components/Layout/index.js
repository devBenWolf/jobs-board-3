import {useContext} from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { AuthContext } from "../../contexts/AuthContext"
import Header from "../HomeComponents/Header"
import { HeaderDiv } from "../HomeComponents/Header/styles/headerStyles"
import {Main} from "../HomeComponents/PrimaryDiv/styles/primaryDivStyles"
import { ThemeDiv } from "../HomeComponents/ThemeInput/styles/themeInputStyles"
import {FaMoon, FaSun} from "react-icons/fa"
import ThemeInput from "../HomeComponents/ThemeInput"
import { Link, useNavigate } from "react-router-dom"
import { FooterMain } from "../HomeComponents/Footer/styles/footerStyles"
import Footer from "../HomeComponents/Footer"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase"



const Layout = ({children}) => {
    const {themeBoolean, setThemeBoolean} = useContext(ThemeContext)
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()

    const signout = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false)
            navigate("/login")
        })
    }

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
            <FooterMain>
                <Footer.Text>
                    {!isAuth ? <Link to="/login" style={{textDecoration: "none", color: "white"}}>login</Link> 
                    : <Link to="/login" style={{textDecoration: "none", color: "white"}} onClick = {signout}>logout</Link>}
                </Footer.Text>
            </FooterMain>
        </Main>
    )
}

export default Layout