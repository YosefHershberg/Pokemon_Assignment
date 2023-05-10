import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'

export const fetchPokemons = createAsyncThunk(
    "allPokemons/fetchPokemons",
    async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

interface initStateType {
    pokemons: [],
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | undefined,
};

const initialState: initStateType = {
    pokemons: [],
    status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
    error: undefined,
};

const allPokemonSlice = createSlice({
    name: 'allPokemons',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPokemons.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.pokemons = action.payload.results;
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    },
})

export const selectAllPokemons = (state: {allPokemons: initStateType}) => state.allPokemons.pokemons;
export const selectAllPokemonsStatus = (state: {allPokemons: initStateType}) => state.allPokemons.status;
export const selectAllPokemonsError = (state: {allPokemons: initStateType}) => state.allPokemons.error;

export default allPokemonSlice.reducer;

