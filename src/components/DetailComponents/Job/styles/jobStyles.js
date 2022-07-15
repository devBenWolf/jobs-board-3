import styled from 'styled-components'

export const JobDiv = styled.section`
`
export const OuterDiv = styled.div`
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
    margin: 0 auto;

    @media (min-width: 45rem) {
        max-width: 60%;
    }

    @media (min-width: 55rem) {
        max-width: 50%;
    }
`
export const InfoDiv = styled.article`
    text-align: left;
`
export const Heading = styled.h1`
    font-size: 16px;
    color: #6e8098;
    display: flex;
    align-items: center;
`
export const HeadingSpan = styled.span`
    height: 5px;
    width: 5px;
    display: inline-block;
    background-color: hsl(var(--clr-dark-grey));
    border-radius: 50%;
    margin: 0 1rem;
`
export const HeadingDiv = styled.div`
    display: grid;
    place-items: left;
    width: 100%;

    @media (min-width: 35rem) {
        display: flex;
        justify-content: space-between;
        
        > * {
            margin: 0 2rem;
        }
        
    }
`
export const Title = styled.p`
    color: ${(props) => props.themeBoolean ? "black" : "white"};
    font-size: 20px;
    font-weight: bold;
    transition: .4s;
`
export const Location = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: #5964e0;
`
export const Apply = styled.a`
    display: grid;
    text-decoration: none;
    margin-top: 3rem;
    position: relative;
    padding: 1rem 0;
    place-items: center;
    transition: 0.4s;
    width: 100%;
    border-radius: 5px;
    background-color: #5964E0;
    color: white;
    border: none;

    @media (min-width: 35rem) {
        width: 150px;
        margin-top:  0;
        
    }
`
export const ApplyDiv = styled.div`
    width: 100%;
    border-radius: 5px;
    background-color: ${(props) => props.themeBoolean ? "white" : "hsl(var(--clr-dark-blue))"};
    transition: .4s;

    @media (min-width: 35rem) {

        width: min-content;
        display: grid;
        place-items: center;      
    }
`
export const BodyDiv = styled.div``
export const BodyText = styled.p`
    line-height: 26px;
    color: #6e8098;
`
export const SectionTitle = styled.p`
    color: ${(props) => props.themeBoolean ? "black" : "white"};
    font-size: 20px;
    font-weight: bold;
    transition: .4s;
`
export const UList = styled.ul`
    line-height: 26px;
    color: #6e8098;
`
export const OList = styled.ol`
    line-height: 26px;
    color: #6e8098;
`
export const ListItem = styled.li``
export const Foot = styled.footer`
    width: 100%;

    display: grid;
    place-items: center;
    padding: 2rem 0;
    margin-top: 4rem;
    background-color: ${(props) => props.themeBoolean ? "white" : "hsl(var(--clr-dark-blue))"};

    @media (min-width: 35rem) {
        display: flex;
        justify-content: space-between;
        padding: 0 4rem;
    }

    @media (min-width: 45rem) {
        padding: 0 10rem;
    }

    @media (min-width: 55rem) {
        padding: 0 20rem;
    }
`
export const FootDiv = styled.div`
    width: 80%;

    @media (min-width: 35rem) {
        width: min-content;
    }

`
export const FootApply = styled.button`
    display: grid;
    padding: 1rem 0;
    place-items: center;
    transition: 0.4s;
    width: 100%;
    border-radius: 5px;
    background-color: #5964E0;
    color: white;
    border: none;

    @media (min-width: 35rem) {
        width: 150px;
    }
`

export const FootInfoDiv = styled.div`
    display: none;

    @media (min-width: 35rem) {
        display: block;
    }
`
export const FootTitle = styled.p`
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => props.themeBoolean ? "black" : "white"};
`
export const FootName = styled.p`
    color: #6E8098;
    
`