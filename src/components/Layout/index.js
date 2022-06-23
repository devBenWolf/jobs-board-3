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
import {auth, provider} from "../../firebase"
import { signInWithPopup } from "firebase/auth";



const Layout = ({children}) => {
    const {themeBoolean, setThemeBoolean} = useContext(ThemeContext)
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const local = localStorage.getItem("isAuth")
    console.log(local)

    const signout = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false)
            navigate("/")
        })
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            // set auth in local storage
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            if (localStorage.getItem("isAuth")) {
                navigate("/create-jobs")
            }
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
                <Footer.Div data-flow="2">
                    {!local ? <Footer.Text onClick={signInWithGoogle}>login</Footer.Text>
                    :         <Link to="/" onClick={signout} style={{textDecoration: "none"}}><Footer.Text>logout</Footer.Text></Link>
                    }
                    {local ? <Link to = "/create-jobs" style={{textDecoration: "none"}}><Footer.Text>create jobs</Footer.Text></Link> : null}
                </Footer.Div>
            </FooterMain>
        </Main>
    )
}

export default Layout