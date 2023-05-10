import { useEffect } from 'react';
import { selectAllPokemons, selectAllPokemonsStatus, selectAllPokemonsError } from '../redux/AllPokemonSlice'
import { fetchPokemons } from '../redux/AllPokemonSlice'
import { useSelector, useDispatch } from 'react-redux';

function useGetPokemons() {
  const dispatch = useDispatch<any>()
  const allPokemons = useSelector(selectAllPokemons)
  const status = useSelector(selectAllPokemonsStatus)
  const error = useSelector(selectAllPokemonsError)

  useEffect(() => {
    dispatch(fetchPokemons())
  }, [dispatch]);

  return {
    allPokemons, status, error
  }
}

export default useGetPokemons