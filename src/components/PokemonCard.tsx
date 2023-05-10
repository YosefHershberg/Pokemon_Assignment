import { CardMedia, CardContent, Typography } from '@mui/material'
import { SyledPokemonCard } from '../styles/PokemonList.styles'

function PokemonCard({ pokemon }: any) {
    return (
        <SyledPokemonCard sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
                    {pokemon.nickname ? pokemon.nickname :
                        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
                    }
                </Typography>
                <CardMedia
                    sx={{ height: 140 }}
                    image={pokemon.sprites.front_default}
                    title="green iguana"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1em' }}>
                    <Typography>{pokemon.types[0].type.name}</Typography>
                    <Typography>{pokemon.weight}</Typography>
                </div>
            </CardContent>
        </SyledPokemonCard>
    )
}

export default PokemonCard