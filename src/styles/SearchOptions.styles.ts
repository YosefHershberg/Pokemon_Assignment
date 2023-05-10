import { styled, MenuList, keyframes } from "@mui/material";

const slideInTop = keyframes`
    0% {
        transform: scaleY(0);
        transform-origin: 100% 0%;
        opacity: 1;
    }

    100% {
        transform: scaleY(1);
        transform-origin: 100% 0%;
        opacity: 1;
    }
`


export const StyledSerach = styled('div')`
    margin-bottom: 1em;
    display: flex;
    justify-content: center;

    .parent {
        position: relative;
        /* background-color: green; */
        width: 70%;
    }
    
    .options-list {
        position: absolute;
        background-color: ${({theme}) => theme.palette.background.default};
        border-left: 1px solid #000;
        border-right: 1px solid #000;
        border-bottom: 1px solid #000;
        border-top: none;
        width: 100%;
        border-radius: 5px;
        animation: ${slideInTop} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        z-index: 100;
    }
`

export const StyledButtons = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1em;
    margin: 0.5em 0;
`

export const StyledMenuList = styled(MenuList)`
    max-height: 20em;
    overflow: auto;
    width: '100%';
`