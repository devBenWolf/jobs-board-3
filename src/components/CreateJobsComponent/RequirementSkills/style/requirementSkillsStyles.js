import styled from 'styled-components'

export const RequirementSkillsSection = styled.section`
display: grid;
grid-template-areas:
    ". input display";
grid-template-columns: 1fr 1fr 1fr;
width: 80%;
height: 20rem;
grid-gap: 5rem;
border: solid red;
`
export const Title = styled.h3`
color: ${(props) => props.themeBoolean ? "black" : "white"};`

export const Input = styled.input.attrs({type: "text"})`
jusfity-self: center;
border-radius: 10px;
border: none;

height: 3rem;
`

export const PushButton = styled.button`
`

export const InputDiv = styled.div`
grid-area: input;
border: solid red;
`

export const UL = styled.ul`
grid-area: display;
border: solid blue;
`

export const LI = styled.li``