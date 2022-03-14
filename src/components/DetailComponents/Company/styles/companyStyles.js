import styled from "styled-components"

export const OuterDiv = styled.section`
    position: relative;
    top: -10%;

    @media (min-width: 35rem) {
        top: -20%;
    }
`
export const InnerDiv = styled.div`
    display: flex;  
    flex-direction: column;
    width: 80%;
    background-color: ${(props) => props.themeBoolean ? "white" : "hsl(var(--clr-dark-blue))"};
    transition: .4s;
    align-items: center;
    border-radius: 5px;
    margin: 0 auto;
    padding: 2rem 0;
    height: 100%;

    @media (min-width: 35rem) {
        flex-direction: row;
        height: 100px;
        padding: 0;
        max-width: 60%;
        justify-content: space-between;
    }

    @media (min-width: 55rem) {
        max-width: 50%;
    }
}
`
export const IconBackground = styled.div`
    display: grid;
    padding: 0.2rem;
    place-items: center;
    background-color: ${(props) => props.backgroundColor }; 
    width: 40px;
    height: 40px;
    border-radius: 5px;

    @media (min-width: 35rem) {
        height: 100%;
        width: 100px;
        border-radius: 5px 0 0 5px;
    }
`
export const Icon = styled.img``
export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 35rem) {
        align-items: normal;
        margin-left: 1rem;
    }
`
export const Name = styled.h1`
    color: ${(props) => props.themeBoolean ? "black" : "white"};
    font-size: 20px;
    font-weight: bold; 
    transition: .4s;
    margin-top: 2rem;

    @media (min-width: 35rem) {
        margin: 0;
    }
`
export const URL = styled.h2`
    font-size: 16px;
    color: #6E8098;
    margin: 1rem 0;
`
export const Site = styled.a`
    margin-top: 1rem;
    background-color: #e8eafa;
    color: #5964e0;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    cursor: pointer;
    text-decoration: none;

    @media (min-width: 35rem) {
        margin 0 2rem 0 0;
    }
`