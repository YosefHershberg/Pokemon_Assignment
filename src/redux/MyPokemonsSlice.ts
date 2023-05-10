import { createSlice } from '@reduxjs/toolkit'

const myPokemonsSlice = createSlice({
    name: 'myPokemons',
    initialState: [] as any,
    reducers: {
        addPokemon: (state, action) => {
            state.push(action.payload)
        },
        addAll: (state, action) => {
            return [...action.payload]
        }
    }
})


export const { addPokemon, addAll } = myPokemonsSlice.actions
export const selectAllMyPokemons = (state: {myPokemons: any}) => state.myPokemons;

export default myPokemonsSlice.reducer;