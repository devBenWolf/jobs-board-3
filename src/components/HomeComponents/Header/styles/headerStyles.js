import styled from 'styled-components'

export const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    background: no-repeat url(/assets/mobile/bg-pattern-header.svg);
    background-size: cover;
    height: 10rem;
    align-items: center;
    > * {
        margin-inline: 1rem;
    }

    @media (min-width: 35rem) {
        > * {
            margin-inline: 2rem;
        }
    }

    @media (min-width: 45rem) {
        > * {
            margin-inline: 10rem;
        }
    }
`

export const Text = styled.p`
    font-weight: bold;
    font-size: clamp(18px, 6vw, 28px);
    color: hsl(var(--clr-white));
`