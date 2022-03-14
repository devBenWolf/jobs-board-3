import styled from 'styled-components'

export const SearchDiv = styled.div`
    transform: translateY(-40%);
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Wrapper = styled.div`
    border-radius: 5px;
    display: flex;
    align-items: center;
    width: 85%;
    background-color: ${(props) => props.themeBoolean ? "white" : "hsl(var(--clr-dark-blue))"};
    transition: .4s;
    
    @media (min-width: 35rem) {
        width: 85%;
    }

    @media (min-width: 50rem) {
        width: 65%;
    }
`
export const Input = styled.input.attrs({type: "text"})`
    margin-left: 1rem;
    width: 85%;
    padding: 2rem 0;
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: ${(props) => props.themeBoolean ? "white" : "hsl(var(--clr-dark-blue))"};
    color: ${(props) => props.themeBoolean ? "none" : "white"};
    transition: .4s;

    @media (min-width: 35rem) {
        border-right: solid 1px hsl(var(--clr-grey));
        border-radius: 0px;
        width: 40%;

        ::placeholder {
            font-size: 12px;
        }
    }
`
export const Reset = styled.button.attrs({type: "submit"})`
    margin-right: 1rem;
    background-color: #5964e0;
    border: none;
    padding: 0.6rem;
    border-radius: 5px;
    cursor: pointer;
`
export const InputSwitch = styled.img`
    margin-right: 1rem;
    cursor: pointer;
`
export const TimeFilterDiv = styled.div`
    background-color: ${(props) => props.themeBoolean ? "white" : "hsl(var(--clr-dark-blue))"};
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.themeBoolean ? "hsl(var(--clr-midnight))" : "white"};
    transition: .4s;
`
export const TimeFilterLabel = styled.label`

    background-color: ${(props) => props.themeBoolean ? "white" : "hsl(var(--clr-dark-blue))"};
    transition: .4s;
    padding-right: 2rem;
`
export const TimeFilterInput = styled.input.attrs({type: "checkbox"})`
    margin-right: 1rem;
`