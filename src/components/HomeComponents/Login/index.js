import {LoginMain, Div, Text, Button} from "./styles/loginStyles"

const Login = ({children, ...props}) => {
    return ( 
        <LoginMain {...props}>{children}</LoginMain>
     );
}

Login.Div = function LoginDiv({children, ...props}) {
    return (
        <Div {...props}>{children}</Div>
    )
}
Login.Text = function LoginText({children, ...props}) {
    return (
        <Text {...props}>{children}</Text>
    )
}
Login.Button = function LoginButton({children, ...props}) {
    return (
        <Button {...props}>{children}</Button>
    )
}
 
export default Login;