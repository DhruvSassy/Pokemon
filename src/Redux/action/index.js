import axiosInstance from '../../Config/axios';
import { DISPLAY_BERRIES_SUCCESS } from './constant';

export const displayPokemon = (idOrName) => {
  return (dispatch) => {
    return axiosInstance
      .get(`/berry`)
      .then((response) => {
        if (response?.status === 200) {
          const {results,count,previous,next} = response?.data;
          console.log("response:",response?.data);
          dispatch({
            type: DISPLAY_BERRIES_SUCCESS, 
            data: results,
            count:count,
            previous:previous,
            next:next
          });
          return Promise.resolve(response);
        }
      })
      .catch((err) => {
        return Promise.reject(err); 
      });
  };
};
