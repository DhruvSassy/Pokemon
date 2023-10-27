import {
  DETAIL_POKEMON_SUCCESS,
  DISPLAY_POKEMON_SUCCESS,
  SEARCH_POKEMON_ERROR,
  SEARCH_POKEMON_SUCCESS,
} from '../action/constant';

const initialState = {
  count: 0,
  pokemonData: [],
  pokemonDetailsData: [],
  prev: null,
  next: null,
  currentPage: 1,
  error: '',
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
        error: '',
      };

    case DETAIL_POKEMON_SUCCESS:
      return {
        ...state,
        pokemonDetailsData: action.payload,
        error: '',
      };

    case SEARCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemonData: [action.payload],
        error: '',
      };

    case SEARCH_POKEMON_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
