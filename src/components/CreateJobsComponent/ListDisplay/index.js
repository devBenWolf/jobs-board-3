import {
    ListDisplaySection,
    Title,
    Input,
    AddButton,
    InputDiv,
    UL,
    LI,
    DeleteButton,
    SkillDiv,
    MapDiv
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
ListDisplay.MapDiv = function ListDisplayMapDiv({children, ...props}) {
    return (
        <MapDiv {...props}>{children}</MapDiv>
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
ListDisplay.AddButton = function ListDisplayAddButton({children, ...props}) {
    return (
        <AddButton {...props}>{children}</AddButton>
    )
}
ListDisplay.DeleteButton = function ListDisplayDeleteButton({children, ...props}) {
    return (
        <DeleteButton {...props}>{children}</DeleteButton>
    )
}


 
export default ListDisplay;