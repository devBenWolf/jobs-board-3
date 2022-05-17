import styled from 'styled-components'

export const CreateJobsMain = styled.div`
    display: grid;
    place-items: center;
    border: solid red;
`
export const PageTitle = styled.h1`
color: ${(props) => props.themeBoolean ? "black" : "white"};
`
export const CompanyDiv = styled.div`
    display: grid;
    place-items: center;
    width: 80%;
`
export const CompanyTitle = styled.h4`
color: ${(props) => props.themeBoolean ? "black" : "white"};`

export const CompanyInput = styled.input.attrs({type: "text"})`
border-radius: 10px;
border: none;
    width: 20%;
    height: 3rem;
`
export const DescriptionDiv = styled.div`
display: grid;
place-items: center;
width: 80%;
`
export const DescriptionTitle = styled.h4`
color: ${(props) => props.themeBoolean ? "black" : "white"};
`
export const DescriptionInput = styled.textarea`
    border-radius: 10px;
    border: none;
    width: 80%;
    font-size: 2rem;
`

export const Submit = styled.button`

`
