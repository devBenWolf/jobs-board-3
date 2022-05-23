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
border: none;
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
}

@media(width > 20rem) {
    width: 25rem;
}

@media(width > 30rem) {
    width: 35rem;
}

@media(width > 35rem) {
    width: 25rem;
}

@media(width > 45rem) {
    width: 25rem;
    font-size: 1.3rem;
}

@media(width > 65rem) {
    width: 35rem;
    font-size: 1.6rem;
}

`