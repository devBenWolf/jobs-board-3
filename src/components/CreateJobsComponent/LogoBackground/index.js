import {
    LogoBackgroundSection,
    Title,
    Input
} from "./style/logoBackgroundStyles.js"

const LogoBackground = ({children, ...props}) => {
    return ( 
        <LogoBackgroundSection {...props}>{children}</LogoBackgroundSection>
     );
}

LogoBackground.Title = function LogoBackgroundTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}
LogoBackground.Input = function LogoBackgroundInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}
 
export default LogoBackground;