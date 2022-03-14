import {ThemeDiv, Label, Button, Span} from "./styles/themeInputStyles"

const ThemeInput = ({children, ...props}) => {
    return ( 
        <ThemeDiv {...props}>{children}</ThemeDiv>
     );
}

ThemeInput.Label = function ThemeInputLabel({children, ...props}) {
    return (
        <Label {...props}>{children}</Label>
    )
}

ThemeInput.Button = function ThemeInputButton({children, ...props}) {
    return (
        <Button type="button" {...props} />
    )
}

ThemeInput.Span = function ThemeInputSpan({children, ...props}) {
    return (
        <Span {...props}>{children}</Span>
    )
}
 
export default ThemeInput;