import {
    AltSearchDiv,
    Wrapper,
    Input,
    Reset,
    InputSwitch,
    TimeFilterDiv,
    TimeFilterLabel,
    TimeFilterInput
} from "./styles/altSearchStyles"

const AltSearch = ({children, ...props}) => {
    return ( 
        <AltSearchDiv {...props}>{children}</AltSearchDiv>
     );
}

AltSearch.Wrapper = function SearchWrapper({children, ...props}) {
    return (
        <Wrapper {...props}>{children}</Wrapper>
    )
}
AltSearch.Input = function SearchInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}

AltSearch.Reset = function SearchReset({children, ...props}) {
    return (
        <Reset {...props}>{children}</Reset>
    )
}
AltSearch.InputSwitch = function SearchInputSwitch({children, ...props}) {
    return (
        <InputSwitch {...props} />
    )
}
AltSearch.TimeFilterDiv = function SearchTimeFilterDiv({children, ...props}) {
    return (
        <TimeFilterDiv {...props}>{children}</TimeFilterDiv>
    )
}
AltSearch.TimeFilterLabel = function SearchTimeFilterLabel({children, ...props}) {
    return (
        <TimeFilterLabel {...props}>{children}</TimeFilterLabel>
    )
}
AltSearch.TimeFilterInput = function SearchTimeFilterInput({children, ...props}) {
    return (
        <TimeFilterInput {...props} />
    )
}


export default AltSearch