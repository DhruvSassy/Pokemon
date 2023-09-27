import axios from 'axios';
import { DISPLAY_BERRIES_SUCCESS } from './constant';

export const displayPokemon = (idOrName) => {
  return (dispatch) => {
    return axios
      .get(` https://pokeapi.co/api/v2/berry/${idOrName}`)
      .then((response) => {
        console.log("response:", response.data);
        if (response?.status === 200) {
          dispatch({
            type: DISPLAY_BERRIES_SUCCESS, 
            payload: response.data,
          });
          return Promise.resolve(response);
        }
      })
      .catch((err) => {
        return Promise.reject(err); 
      });
  };
};
