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
    justify-content: space-evenly;
    background-color: ${(props) => props.themeBoolean ? "white" : "hsl(var(--clr-dark-blue))"};
    transition: .4s;
    
    @media (min-width: 35rem) {
        width: 85%;
    }

    @media (min-width: 45rem) {
        width: 65%;
    }

    @media (min-width: 55rem) {
        width: 55%;
    }
`
export const GeneralInput = styled.input.attrs({type: "text"})`
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
        width: 35%;

        ::placeholder {
            font-size: 12px;
        }
    }

    @media (min-width: 45rem) {
        width: 30%;
    }
`
export const LocationInput = styled.input.attrs({type: "text"})`
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
        width: 35%;

        ::placeholder {
            font-size: 12px;
        }
    }

    @media (min-width: 45rem) {
        width: 30%;
    }
`

export const Reset = styled.button.attrs({type: "submit"})`
    margin-right: 6px;
    background-color: #5964e0;
    border: none;
    padding: 0.6rem;
    border-radius: 5px;
    cursor: pointer;

    @media (min-width: 55rem) {
        margin: 0;
    }
`
export const InputSwitch = styled.img`
    margin-right: 1rem;
    cursor: pointer;
`
export const TimeFilterDiv = styled.div`
    background-color: ${(props) => props.themeBoolean ? "white" : "hsl(var(--clr-dark-blue))"};
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.themeBoolean ? "hsl(var(--clr-midnight))" : "white"};
    transition: .4s;


    @media (min-width: 45rem) {
        width: 25%;
    }

    @media (min-width: 55rem) {
    }

`
export const TimeFilterLabel = styled.label`

    background-color: ${(props) => props.themeBoolean ? "white" : "hsl(var(--clr-dark-blue))"};
    transition: .4s;
    
    font-size: 14px;
`
export const TimeFilterInput = styled.input.attrs({type: "checkbox"})`
    margin-right: 8px;
`