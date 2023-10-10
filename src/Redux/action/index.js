import axiosInstance from '../../Config/axios';
import {
  DETAIL_POKEMON_SUCCESS,
  DISPLAY_POKEMON_SUCCESS,
  SEARCH_POKEMON_SUCCESS,
} from './constant';

export const displayPokemon = (limit, page) => {
  const offset = (page - 1) * limit;

  return (dispatch) => {
    return axiosInstance
      .get(`/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => {
        if (response?.status === 200) {
          const { results, count, previous, next } = response.data;
          dispatch({
            type: DISPLAY_POKEMON_SUCCESS,
            data: results,
            count: count,
            previous: previous,
            next: next,
          });
          return Promise.resolve(response);
        }
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
};

export const displayDetailsPokemon = (id) => {
  return (dispatch) => {
    return axiosInstance
      .get(`/pokemon/${id}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: DETAIL_POKEMON_SUCCESS,
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

export const searchpokemon = (name) => {
  return (dispatch) => {
    return axiosInstance
      .get(`/pokemon/${name}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: SEARCH_POKEMON_SUCCESS,
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
