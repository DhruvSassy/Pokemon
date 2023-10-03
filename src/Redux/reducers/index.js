import { DISPLAY_BERRIES_SUCCESS } from '../action/constant';

const initialState = {
  count:0,
  pokemonData: [],
  prev: null,
  next: null,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_BERRIES_SUCCESS:
      return {
        ...state,
        count:action.count,
        prev: action.previous,  
        next: action.next,
        pokemonData: action.data,
        
      };

    default:
      return state;
  }
};

export default pokemonReducer;
