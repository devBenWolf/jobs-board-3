import {
    ListDisplaySection,
    Title,
    Input,
    PushButton,
    InputDiv,
    UL,
    LI,
    DeleteButton,
    SkillDiv
} from "./style/ListDisplayStyles.js"

const ListDisplay = ({children, ...props}) => {
    return ( 
        <ListDisplaySection {...props}>{children}</ListDisplaySection>
     );
}

ListDisplay.InputDiv = function ListDisplayInputDiv({children, ...props}) {
    return (
        <InputDiv {...props}>{children}</InputDiv>
    )
}
ListDisplay.SkillDiv = function ListDisplaySkillDiv({children, ...props}) {
    return (
        <SkillDiv {...props}>{children}</SkillDiv>
    )
}
ListDisplay.UL = function ListDisplayUL({children, ...props}) {
    return (
        <UL {...props}>{children}</UL>
    )
}

ListDisplay.LI = function ListDisplayLI({children, ...props}) {
    return (
        <LI {...props}>{children}</LI>
    )
}

ListDisplay.Title = function RequirementSkillsTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}

ListDisplay.Input = function ListDisplayInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}
ListDisplay.PushButton = function ListDisplayPushButton({children, ...props}) {
    return (
        <PushButton {...props}>{children}</PushButton>
    )
}
ListDisplay.DeleteButton = function ListDisplayDeleteButton({children, ...props}) {
    return (
        <DeleteButton {...props}>{children}</DeleteButton>
    )
}


 
export default ListDisplay;