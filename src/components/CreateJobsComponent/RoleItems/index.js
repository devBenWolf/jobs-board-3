import {
    RoleItemsSection,
    Title,
    Input,
    PushButton,
    InputDiv,
    UL,
    LI,
    DeleteButton,
    Div
} from "./style/roleItemsStyles.js"

const RoleItems = ({children, ...props}) => {
    return ( 
        <RoleItemsSection {...props}>{children}</RoleItemsSection>
     );
}

RoleItems.InputDiv = function RoleItemsInputDiv({children, ...props}) {
    return (
        <InputDiv {...props}>{children}</InputDiv>
    )
}
RoleItems.Div = function RoleItemsDiv({children, ...props}) {
    return (
        <Div {...props}>{children}</Div>
    )
}
RoleItems.UL = function RoleItemsUL({children, ...props}) {
    return (
        <UL {...props}>{children}</UL>
    )
}

RoleItems.LI = function RoleItemsLI({children, ...props}) {
    return (
        <LI {...props}>{children}</LI>
    )
}

RoleItems.Title = function RoleItemsTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}

RoleItems.Input = function RoleItemsInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}
RoleItems.PushButton = function RoleItemsPushButton({children, ...props}) {
    return (
        <PushButton {...props}>{children}</PushButton>
    )
}
RoleItems.DeleteButton = function RoleItemsDeleteButton({children, ...props}) {
    return (
        <DeleteButton {...props}>{children}</DeleteButton>
    )
}

export default RoleItems