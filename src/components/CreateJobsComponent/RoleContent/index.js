import {
    RoleContentSection,
    Title,
    Input
} from "./style/roleContentStyles.js"

const RoleContent = ({children, ...props}) => {
    return ( 
        <RoleContentSection {...props}>{children}</RoleContentSection>
     );
}

RoleContent.Title = function RoleContentTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}
RoleContent.Input = function RoleContentInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}
 
export default RoleContent;