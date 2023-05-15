import { CardMedia, CardContent, Typography } from '@mui/material'
import { SyledPokemonCard } from '../styles/PokemonList.styles'
import { firstLetterToUppercase } from '../utils/firstLetterToUppercase'

function PokemonCard({ pokemon }: any) {
    return (
        <SyledPokemonCard sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
                    {pokemon.nickname ? firstLetterToUppercase(pokemon.nickname) :
                        firstLetterToUppercase(pokemon.name)
                    }
                </Typography>
                <CardMedia
                    sx={{ height: 140 }}
                    image={pokemon.sprites.front_default}
                    title="green iguana"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1em' }}>
                    <Typography>{firstLetterToUppercase(pokemon.types[0].type.name)}</Typography>
                    <Typography>{pokemon.weight} Kg</Typography>
                </div>
            </CardContent>
        </SyledPokemonCard>
    )
}

export default PokemonCard