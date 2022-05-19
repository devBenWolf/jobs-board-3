import styled from 'styled-components'

export const LocationSection = styled.section`
display: grid;
place-items: center;
width: 80%;
`
export const Title = styled.h3`
color: ${(props) => props.themeBoolean ? "black" : "white"};
font-size: 2rem;
font-weight: bold;
margin-bottom: 1rem;
`

export const Input = styled.input.attrs({type: "text"})`
border-radius: 10px;
width: 30rem;
padding: 2rem;
font-size: 2rem;
height: 3rem;
text-align: center;
color: darkred;
margin-bottom: 3rem;
@media (width < 45rem) {
    width: 20rem;
}
`