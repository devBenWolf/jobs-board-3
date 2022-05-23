import {
    TextAreaSection,
    Title,
    Input,
    InputDiv
} from "./style/textAreaStyles"

function TextArea({children, ...props}) {
    return (
        <TextAreaSection {...props}>{children}</TextAreaSection>
    )
}
TextArea.Title = function TextAreaTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}
TextArea.Input = function TextAreaInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}
TextArea.InputDiv = function TextAreaInputDiv({children, ...props}) {
    return (
        <InputDiv {...props}>{children}</InputDiv>
    )
}




export default TextArea