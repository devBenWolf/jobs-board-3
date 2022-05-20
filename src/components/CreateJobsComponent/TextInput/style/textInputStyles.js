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
width: 30rem;
padding: 2rem;
font-size: 2rem;
height: 3rem;
text-align: center;
color: darkred;
margin-bottom: 3rem;
color: ${(props) => props.color};
background-color: ${(props) => props.background};

@media (width < 45rem) {
    width: 20rem;
}
`