import {
    RequirementSkillsSection,
    Title,
    Input,
    PushButton,
    InputDiv,
    DisplayDiv
} from "./style/requirementSkillsStyles.js"

const RequirementSkills = ({children, ...props}) => {
    return ( 
        <RequirementSkillsSection {...props}>{children}</RequirementSkillsSection>
     );
}

RequirementSkills.InputDiv = function RequirementSkillsInputDiv({children, ...props}) {
    return (
        <InputDiv {...props}>{children}</InputDiv>
    )
}
RequirementSkills.DisplayDiv = function RequirementSkillsDisplayDiv({children, ...props}) {
    return (
        <DisplayDiv {...props}>{children}</DisplayDiv>
    )
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