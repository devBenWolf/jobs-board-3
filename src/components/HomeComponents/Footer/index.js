import {FooterMain, Text} from "./styles/footerStyles"

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
 
export default Footer;