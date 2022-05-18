import styled from 'styled-components'

export const RequirementSkillsSection = styled.section`
display: grid;
place-items: center;
width: 80%;
grid-gap: 3rem;
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

export const PushButton = styled.button`
width: 10rem;
justify-self: center;
`

export const DeleteButton = styled.button`
display: grid;
place-items: center;
width: 8rem;
height: 2.2rem;
align-self: center;

`

export const InputDiv = styled.div`
display: grid;
width: 60rem;

`

export const SkillDiv = styled.div`
display: flex;
justify-content: space-between;

`

export const UL = styled.ul`
display: grid;
width: 60rem;

`

export const LI = styled.li`
line-height: 1.5;
font-size: 1.5rem;
width: 55ch;

`