import {
    RequirementSkillsSection,
    Title,
    Input,
    PushButton
} from "./style/requirementSkillsStyles.js"

const RequirementSkills = ({children, ...props}) => {
    return ( 
        <RequirementSkillsSection {...props}>{children}</RequirementSkillsSection>
     );
}

RequirementSkills.Title = function RequirementSkillsTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}
RequirementSkills.Input = function RequirementSkillsInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}
RequirementSkills.PushButton = function RequirementSkillsPushButton({children, ...props}) {
    return (
        <PushButton {...props}>{children}</PushButton>
    )
}


 
export default RequirementSkills;