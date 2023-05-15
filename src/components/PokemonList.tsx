import { PokemonListStyled } from '../styles/PokemonList.styles'
import { useSelector } from 'react-redux'
import { selectAllMyPokemons } from '../redux/MyPokemonsSlice'
import PokemonCard from './PokemonCard'
import { nanoid } from "@reduxjs/toolkit";
import { Center } from '../styles/Center.styles';
import { useEffect } from 'react';

function PokemonList() {
    const myPokemons = useSelector(selectAllMyPokemons)

    return (
        <>
            {myPokemons.length === 0 ? 
            <Center>
                <h3>You don't have any pokemons yet..</h3>
            </Center> :
            <PokemonListStyled>
                {myPokemons.map((pokemon: any) => (
                    <PokemonCard pokemon={pokemon} key={nanoid()} />
                ))}
            </PokemonListStyled>}
        </>
    )
}

export default PokemonList