import { styled } from '@mui/material';
import bgLight from '../assets/bg-light.jpg'
import bgDark from '../assets/bg-dark.jpg'

export const AppStyled = styled('div')`
    border: 1px solid gray;
    border-radius: 10px;
    padding: 0 1em;
    min-height: 95vh;
    margin: 1em;
    width: 37.5em;
    /* background-color: ${({ theme }) => theme.palette.background.default}; */
    color: ${({ theme }) => theme.palette.text.primary};
    position: relative;
    background-image: url(${({theme}) => theme.palette.mode === 'dark' ? bgDark : bgLight});
    background-repeat: no-repeat;
    background-size: cover;

    .color-mode-btn {
        position: absolute;
        top: 2px;
        right: 1em;
    }

    h1 {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 640px) {
        max-width: 20em;
    }
`