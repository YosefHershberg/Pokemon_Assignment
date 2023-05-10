import { configureStore } from "@reduxjs/toolkit";
import allPokemonSlice from './AllPokemonSlice'
import myPokemonsSlice from "./MyPokemonsSlice";

const store = configureStore({
  reducer: {
    allPokemons: allPokemonSlice,
    myPokemons: myPokemonsSlice,
  },
});

export default store;