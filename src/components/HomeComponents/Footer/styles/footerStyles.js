import styled from "styled-components"

export const FooterMain = styled.footer`
    display: grid;
    place-items: center;
    background-color: #5964e0;
    position: relative;
    bottom: 0;
`

export const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const Text = styled.p`
    font-weight: bold;
    font-size: clamp(18px, 6vw, 28px);
    color: hsl(var(--clr-white));
    margin-inline: 1rem;
    cursor: pointer;
    
`

export const LogoutButton = styled.button`
background-color: ${(props) => props.themeBoolean ? "white" : "hsl(var(--clr-dark-blue))"};
background-color: #5964e0;
`

export const CreateJobsButton = styled.button`
background-color: #5964e0;
border: none;


`
export const LoginButton = styled.button`
background-color: ${(props) => props.themeBoolean ? "white" : "hsl(var(--clr-dark-blue))"};
background-color: #5964e0;
`

export const ButtonText = styled.p`
color: ${(props) => props.themeBoolean ? "black" : "white"};
`