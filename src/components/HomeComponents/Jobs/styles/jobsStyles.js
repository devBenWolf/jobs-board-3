import styled from "styled-components"

export const JobsMain = styled.main`
display: grid;
margin-top: 4rem;
gap: 3rem;
@media (min-width: 40rem) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}



@media (min-width: 80rem) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 0 6rem;
    margin-inline: 10rem;

@media (min-width: 100rem) {
    margin-inline: 20rem;
}

@media (min-width: 110rem) {
    margin-inline: 30rem;
}
`

export const OuterDiv = styled.main`
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    position: relative


`
export const InnerDiv = styled.div`
    display: flex;  
    flex-direction: column;
    width: 80%;
    background-color: ${(props) => props.themeBoolean ? "white" : "hsl(var(--clr-dark-blue))"};
    transition: .4s;
    align-self: center;
    padding: 2rem;
    border-radius: 5px;
    height: 100%;

    @media (min-width: 80rem) {
        width: 80%;
    }
`
export const InfoDiv = styled.div``
export const Heading = styled.h1`
    color: hsl(var(--clr-dark-grey));
    display: flex;
    align-items: center;
    font-size: 16px;
`
export const HeadingSpan = styled.span`
    height: 5px;
    width: 5px;
    display: inline-block;
    background-color: hsl(var(--clr-dark-grey));
    border-radius: 50%;
    margin: 0 1rem;
`
export const InfoText = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.themeBoolean ? "black" : "white"};
    transition: .4s;
`
export const LocationText = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: hsl(var(--clr-violet));
`
export const InfoSubtext = styled.p`
    color: hsl(var(--clr-dark-grey));
`
export const IconBackground = styled.div`
    display: grid;
    padding: 0.2rem;
    place-items: center;
    background-color: ${(props) => props.backgroundColor};
    width: 40px;
    height: 40px;
    border-radius: 10px;
    position: absolute;
    left: 15%;
    top: -9%;
`
export const Icon = styled.img`
border-radius: 10px;
`