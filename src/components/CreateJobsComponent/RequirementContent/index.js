import {
    RequirementContentSection,
    Title,
    Input
} from "./style/requirementContentStyles.js"

const RequirementContent = ({children, ...props}) => {
    return ( 
        <RequirementContentSection {...props}>{children}</RequirementContentSection>
     );
}

RequirementContent.Title = function RequirementContentTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}
RequirementContent.Input = function RequirementContentInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}
 
export default RequirementContent;