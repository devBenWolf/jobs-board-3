import {TextInputSection, Title, Input} from "./style/textInputStyles"

// --------------------------------------------------
// --------- Company info input section ---------
// --------------------------------------------------
const TextInput = ({children, ...props}) => {
    return ( 
        <TextInputSection {...props}>{children}</TextInputSection>
     );
}
 

TextInput.Title = function TextInputTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}
TextInput.Input = function TextInputInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}

export default TextInput; 