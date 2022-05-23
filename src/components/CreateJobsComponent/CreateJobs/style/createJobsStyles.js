import styled from 'styled-components'

export const CreateJobsMain = styled.div`
    display: grid;
    border: solid blue;
    background-color: ${(props) => props.backgroundColor }; 
`

export const TopSubDiv = styled.main`
display: grid;
border: solid red;
place-items: center;
margin-top: 3rem;

@media(width > 35rem) {
    grid-template-columns: 1fr 1fr;
}

@media(width > 50rem) {
    grid-template-columns: repeat(3, 1fr);
}
`

export const BottomSubDiv = styled.main`
display: grid;
place-items: center;
margin-top: 3rem;
border: solid green;
`

export const PageTitle = styled.h1`
color: ${(props) => props.themeBoolean ? "black" : "white"};
text-align: center;
font-size: 40px;
color: ${(props) => props.themeBoolean ? "black" : "white" };
margin-top: 3rem;
font-weight: bold;
`

export const Submit = styled.button`

`
