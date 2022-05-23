import styled from 'styled-components'

export const ListDisplaySection = styled.section`
display: grid;
place-items: center;
grid-template-columns: 1fr 1fr;
grid-gap: 1rem;
margin-top: 5rem;
border: solid red;
`
export const Title = styled.h3`
color: ${(props) => props.themeBoolean ? "black" : "white"};
text-align: center;
`

export const Input = styled.textarea`
border-radius: 10px;
border: none;
height: 15rem;
font-size: 1.5rem;
`

export const AddButton = styled.button`
display: grid;
place-items: center;
border: ${(props) => props.border};
border-top: ${(props) => props.borderTop};
width: 100%;
height: 2.2rem;
background-color: ${(props) => props.background};
cursor: pointer;
border-radius: 0 0 10px 10px;
color: white;
font-weight: bold;
&:hover {
    background-color: red;
    transition: 1s;
}
`

export const PseudoButton = styled.div`
border: ${(props) => props.border};
border-top: ${(props) => props.borderTop};
width: 100%;
height: 2.2rem;
background-color: ${(props) => props.background};
cursor: pointer;
border-radius: 0 0 10px 10px;

`

export const DeleteButton = styled.button`
display: grid;
place-items: center;
width: 8rem;
height: 2.2rem;
align-self: center;
background-color: red;
border-radius: 10px;
font-weight: bold;
color: white; 
text-transform: uppercase;
`

export const InputDiv = styled.div`
display: grid;
width: 60rem;
`

export const TextAndListDiv = styled.div`

`
export const MapDiv = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`

export const UL = styled.ul`
display: grid;
place-items: center;
margin-top: 0;
border-radius: 5px;
width: 100%;

`

export const LI = styled.li`
line-height: 1.5;
font-size: 1.5rem;
color: ${(props) => props.themeBoolean ? "black" : "white"};
`