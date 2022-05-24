import Login from "../components/HomeComponents/Login";
import { LoginMain } from "../components/HomeComponents/Login/styles/loginStyles";
import {auth, provider} from "../firebase"
import { signInWithPopup } from "firebase/auth";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";


const LoginContainer = () => {
    const {setIsAuth} = useContext(AuthContext)
    const {jobs} = useContext(DataContext)
    console.log(jobs)
    let navigate = useNavigate()

  
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
        <LoginMain>
            <Login.Div>
                {jobs.map((item) => (
                    <div>{item.company}</div>
                ))}
            </Login.Div>
        </LoginMain>

     );
}
 
export default LoginContainer;