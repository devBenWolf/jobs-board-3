import {
    LogoSection,
    Title,
    Input
} from "./style/logoStyles.js"

const Logo = ({children, ...props}) => {
    return ( 
        <LogoSection {...props}>{children}</LogoSection>
     );
}

Logo.Title = function LogoText({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}
Logo.Input = function LogoInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}
 
export default Logo;