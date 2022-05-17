import styled from 'styled-components'


export const CompanySection = styled.section`
display: grid;
place-items: center;
width: 80%;
`
export const CompanyTitle = styled.h3`
color: ${(props) => props.themeBoolean ? "black" : "white"};`

export const CompanyInput = styled.input.attrs({type: "text"})`
border-radius: 10px;
border: none;
width: 20%;
height: 3rem;
`