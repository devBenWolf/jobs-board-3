import {
    SearchDiv,
    Wrapper,
    Input,
    Reset,
    InputSwitch,
    TimeFilterDiv,
    TimeFilterLabel,
    TimeFilterInput
} from "./styles/searchStyles"

const Search = ({children, ...props}) => {
    return ( 
        <SearchDiv {...props}>{children}</SearchDiv>
     );
}

Search.Wrapper = function SearchWrapper({children, ...props}) {
    return (
        <Wrapper {...props}>{children}</Wrapper>
    )
}
Search.Input = function SearchInput({children, ...props}) {
    return (
        <Input {...props}>{children}</Input>
    )
}

Search.Reset = function SearchReset({children, ...props}) {
    return (
        <Reset {...props}>{children}</Reset>
    )
}
Search.InputSwitch = function SearchInputSwitch({children, ...props}) {
    return (
        <InputSwitch {...props} />
    )
}
Search.TimeFilterDiv = function SearchTimeFilterDiv({children, ...props}) {
    return (
        <TimeFilterDiv {...props}>{children}</TimeFilterDiv>
    )
}
Search.TimeFilterLabel = function SearchTimeFilterLabel({children, ...props}) {
    return (
        <TimeFilterLabel {...props}>{children}</TimeFilterLabel>
    )
}
Search.TimeFilterInput = function SearchTimeFilterInput({children, ...props}) {
    return (
        <TimeFilterInput {...props} />
    )
}


export default Search;