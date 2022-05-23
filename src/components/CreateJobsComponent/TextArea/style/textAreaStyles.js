import styled from 'styled-components'
import {FaUndo} from "react-icons/fa"

export const TextAreaSection = styled.section`
display: grid;
position: relative;
place-items: center;
`
export const Title = styled.h3`
color: ${(props) => props.themeBoolean ? "black" : "white"};
background-color: #5964e0;
`
export const Input = styled.textarea`
    border-radius: 10px;
    border: none;
    font-size: 1.2rem; 
    height: 15rem;
    width: 20rem;
    color: ${(props) => props.color};
    background-color: ${(props) => props.background};

    &::placeholder {
        opacity: 1;
    }

    @media(width > 20rem) {
        width: 25rem;
    }
    
    @media(width > 30rem) {
        width: 30rem;
    }
    
    @media(width > 35rem) {
        width: 40rem;
        height: 18rem;
    }
    
    @media(width > 45rem) {
        width: 50rem;
        font-size: 1.6rem;
    }

    @media(width > 55rem) {
        width: 60rem;
        font-size: 1.6rem;
        height: 20rem;
    }
`

export const InputDiv = styled.div`
display: flex;
flex-direction: column;
align-self: start;
background-color: ${(props) => props.background};
border-radius: 10px;
`