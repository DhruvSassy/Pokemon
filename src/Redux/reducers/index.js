import { DISPLAY_BERRIES_SUCCESS } from '../action/constant';

const initialState = {
  pokemonData: [],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_BERRIES_SUCCESS:
      return {
        ...state,
        pokemonData: action.payload,
      };

    default:
      return state;
  }
};

export default pokemonReducer;
