import {FooterMain, Text, LogoutButton, Div, CreateJobsButton, ButtonText, LoginButton} from "./styles/footerStyles"

const Footer = ({children, ...props}) => {
    return ( 
        <FooterMain {...props}>{children}</FooterMain>
     );
}

Footer.Div = function FooterDiv({children, ...props}) {
    return (
        <Div {...props}>{children}</Div>
    )
}

Footer.Text = function FooterText({children, ...props}) {
    return (
        <Text {...props}>{children}</Text>
    )
}
Footer.ButtonText = function FooterButtonText({children, ...props}) {
    return (
        <ButtonText {...props}>{children}</ButtonText>
    )
}

Footer.LogoutButton = function FooterLogoutButton({children, ...props}) {
    return (
        <LogoutButton {...props}>{children}</LogoutButton>
    )
}
Footer.LoginButton = function FooterLoginButton({children, ...props}) {
    return (
        <LoginButton {...props}>{children}</LoginButton>
    )
}
Footer.CreateJobsButton = function FooterCreateJobsButton({children, ...props}) {
    return (
        <CreateJobsButton {...props}>{children}</CreateJobsButton>
    )
}

 
export default Footer;