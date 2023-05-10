import { nanoid } from '@reduxjs/toolkit'
import { PokemonListStyled } from '../styles/PokemonList.styles'
import PokemonCard from './PokemonCard'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllMyPokemons } from '../redux/MyPokemonsSlice';

function FilteredPokemonList({ type }: { type: string }) {
    const [filteredPokemons, setFilteredPokemons] = useState<any>()
    const myPokemons = useSelector(selectAllMyPokemons)

    useEffect(() => {
        const tempfilteredPokemons: any = []
        myPokemons.forEach((pokemon: any) => {
            pokemon.types.forEach((type1: any) => {
                if (type1.type.name === type) {
                    tempfilteredPokemons.push(pokemon)
                }
            })
        })
        setFilteredPokemons(tempfilteredPokemons)
    }, []);

    return (
        <PokemonListStyled>
            {filteredPokemons?.map((pokemon: any) => (
                <PokemonCard pokemon={pokemon} key={nanoid()} />
            ))}
        </PokemonListStyled>
    )
}

export default FilteredPokemonList