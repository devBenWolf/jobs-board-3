import styled from 'styled-components'


export const TextInputSection = styled.section`
display: grid;
place-items: center;
width: 80%;
`
export const Title = styled.h3`
color: white;
font-size: 2rem;
font-weight: bold;
margin-bottom: 1rem;
background-color: hsl(235, 69%, 61%);
padding: 1rem;
border-radius: 5px;
`


export const Input = styled.input.attrs({type: "text"})`
border-radius: 10px;
border: hsl(235, 69%, 61%) solid;
width: 20rem;
padding: 2rem;
font-size: 1.2rem;
height: 3rem;
text-align: center;
margin-bottom: 3rem;
color: ${(props) => props.color};
background-color: ${(props) => props.background};

&::placeholder {
    opacity: 1;
    color: ${(props) => props.color};
}

@media(min-width: 20rem) {
    width: 25rem;
}

@media(min-width: 30rem) {
    width: 35rem;
}

@media(min-width: 35rem) {
    width: 25rem;
}

@media(min-width: 45rem) {
    width: 25rem;
    font-size: 1.3rem;
}

@media(min-width: 65rem) {
    width: 35rem;
    font-size: 1.6rem;

    &::placeholder {
        font-size: 1.6rem;
    }
}

`