import { DISPLAY_POKEMON_SUCCESS } from '../action/constant';

// Modify your initial state in pokemonReducer.js
const initialState = {
  count: 0,
  pokemonData: [],
  prev: null,
  next: null,
  currentPage: 1, // Add currentPage to keep track of the current page
};


const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_POKEMON_SUCCESS:
      return {
        ...state,
        count: action.count,
        prev: action.previous,
        next: action.next,
        pokemonData: action.data,
        currentPage: action.currentPage, 
      };

    default:
      return state;
  }
};

export default pokemonReducer;
