import {
    RequirementSkillsSection,
    Title,
    Input,
    PushButton,
    InputDiv,
    UL,
    LI,
    DeleteButton,
    SkillDiv
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
RequirementSkills.SkillDiv = function RequirementSkillsSkillDiv({children, ...props}) {
    return (
        <SkillDiv {...props}>{children}</SkillDiv>
    )
}
RequirementSkills.UL = function RequirementSkillsUL({children, ...props}) {
    return (
        <UL {...props}>{children}</UL>
    )
}

RequirementSkills.LI = function RequirementSkillsLI({children, ...props}) {
    return (
        <LI {...props}>{children}</LI>
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
RequirementSkills.DeleteButton = function RequirementSkillsDeleteButton({children, ...props}) {
    return (
        <DeleteButton {...props}>{children}</DeleteButton>
    )
}


 
export default RequirementSkills;