import {FooterMain, Text, LogoutButton} from "./styles/footerStyles"

const Footer = ({children, ...props}) => {
    return ( 
        <FooterMain {...props}>{children}</FooterMain>
     );
}

Footer.Text = function FooterText({children, ...props}) {
    return (
        <Text {...props}>{children}</Text>
    )
}

Footer.LogoutButton = function FooterLogoutButton({children, ...props}) {
    return (
        <LogoutButton {...props}>{children}</LogoutButton>
    )
}
 
export default Footer;