import {
    WebsiteSection,
    Title,
    Input
} from "./style/websiteStyles.js"

const Website = ({children, ...props}) => {
    return ( 
        <WebsiteSection {...props}>{children}</WebsiteSection>
     );
}

Website.Title = function WebsiteTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}
Website.Input = function WebsiteInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}
 
export default Website;