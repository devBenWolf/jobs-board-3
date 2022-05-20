import styled from 'styled-components'

export const TextAreaSection = styled.section`
display: grid;
place-items: center;
width: 80%;
`
export const Title = styled.h3`
color: ${(props) => props.themeBoolean ? "black" : "white"};
background-color: #5964e0;
`
export const Input = styled.textarea`
    border-radius: 10px;
    border: none;
    width: 60rem;
    font-size: 1.5rem; 
    height: 15rem;
`

export const InputDiv = styled.div``