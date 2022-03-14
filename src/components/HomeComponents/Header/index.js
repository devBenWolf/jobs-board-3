import {HeaderDiv, Text} from "./styles/headerStyles"

const Header = ({children, ...props}) => {
    return ( 
        <HeaderDiv {...props}>{children}</HeaderDiv>
     );
}

Header.Text = function HeaderText({children, ...props}) {
    return (
        <Text {...props}>{children}</Text>
    )
}
 
export default Header;