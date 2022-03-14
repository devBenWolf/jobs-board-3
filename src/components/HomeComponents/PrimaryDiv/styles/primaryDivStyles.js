import styled from "styled-components"

export const Main = styled.main`
    display: grid;
    background-color: ${props => props.themeBoolean ? "#dce1ea" : "hsl(var(--clr-midnight))"};
    transition: .4s;
`