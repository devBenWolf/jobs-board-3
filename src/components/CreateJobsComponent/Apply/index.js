import {
    ApplySection,
    Title,
    Input
} from "./style/applyStyles.js"

const Apply = ({children, ...props}) => {
    return ( 
        <ApplySection {...props}>{children}</ApplySection>
     );
}

Apply.Title = function ApplyTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}
Apply.Input = function ApplyInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}
 
export default Apply;