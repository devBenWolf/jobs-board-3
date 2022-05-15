import {auth, provider} from "./firebase.js"
import {signinWithPopup} from "firebase/auth"

const Login = () => {

    return (
        <div>
            <p>Sign in with Google</p>
            <button>Sign in with Google</button>
        </div>
     );
}
 
export default Login;