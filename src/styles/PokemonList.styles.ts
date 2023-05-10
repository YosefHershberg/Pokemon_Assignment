import { styled, Card, keyframes } from "@mui/material";

export const PokemonListStyled = styled('div')`
    margin: 1em 0;
    display: flex;
    padding: 0 1em;
    flex-wrap: wrap;
    gap: 1em;

    @media (max-width: 640px) {
    justify-content: center;
  }
`

const scaleInCenter = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

export const SyledPokemonCard = styled(Card)`
  animation: ${scaleInCenter} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;;
`