import axios from 'axios'

const axiosUtil = {
    initalise: () => {
      axios.defaults.baseURL = "https://pokeapi.co/api/v2";
      axios.interceptors.request.use(
        (axiosConfig) => {
          axiosConfig.headers['Content-Type'] = 'application/json';
          return axiosConfig;
        },
        (error) => {
          Promise.reject(error);
        },
      );
  
      axios.interceptors.response.use(
        (response) => {
          return response;
        },
        function (error) {
         
          return Promise.reject(error.response);
        },
      );
    },
  };
  
  export default axiosUtil;