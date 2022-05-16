import Login from "../components/HomeComponents/Login";
import { LoginMain } from "../components/HomeComponents/Login/styles/loginStyles";
import {auth, provider} from "../firebase"
import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


const LoginContainer = () => {
    const {setIsAuth} = useContext(AuthContext)
    let navigate = useNavigate()

    const signIn = () => {
        signInWithPopup(auth, provider).then((result) => {
            // set auth in local storage
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            navigate("/create-job")
        })
    }

    return ( 
        <LoginMain>
            <Login.Div>
                <Login.Text>log in with the thing</Login.Text>
                <Login.Button onClick = {signIn}>sign in</Login.Button>
            </Login.Div>
        </LoginMain>

     );
}
 
export default LoginContainer;