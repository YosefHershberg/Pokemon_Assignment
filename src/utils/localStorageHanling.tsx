import { useDispatch, useSelector } from 'react-redux'
import { selectAllMyPokemons } from '../redux/MyPokemonsSlice'
import { useEffect } from 'react'
import { addPokemon } from '../redux/MyPokemonsSlice'

function localStorageHanling() {
    const dispatch = useDispatch()
    const myPokemons = useSelector(selectAllMyPokemons)

    useEffect(() => {
        const storedData = localStorage.getItem('myData');
        if (storedData) {
            dispatch(addPokemon(myPokemons));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('myData', myPokemons);
    }, [myPokemons]);

    return null
}

export default localStorageHanling