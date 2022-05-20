import styled from 'styled-components'

export const CreateJobsMain = styled.div`
    display: grid;
    border: solid blue;
    place-items: center;
`

export const TopSubDiv = styled.main`
display: grid;
width: 100vw;
grid-template-columns: 1fr 1fr 1fr;
place-items: center;
border: solid red;

@media (width < 65rem) {
    grid-template-columns: 1fr;
    width: 70rem;
}

@media (width < 45rem) {
    width: 50rem;
}

@media (width < 35rem) {
    width: 40rem;

}
`

export const BottomSubDiv = styled.main`

`

export const PageTitle = styled.h1`
color: ${(props) => props.themeBoolean ? "black" : "white"};
`

export const Submit = styled.button`

`
