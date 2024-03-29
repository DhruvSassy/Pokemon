import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../reducers';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
