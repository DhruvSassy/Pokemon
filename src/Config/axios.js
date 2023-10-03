// import axios from 'axios';

// const axiosUtil = {
//     initalise: () => {
//       axios.defaults.baseURL = "https://pokeapi.co/api/v2";
//       axios.interceptors.request.use(
//         (axiosConfig) => {
//           axiosConfig.headers['Content-Type'] = 'application/json';
//           return axiosConfig;
//         },
//         (error) => {
//           Promise.reject(error);
//         },
//       );
  
//       axios.interceptors.response.use(
//         (response) => {
//           return response;
//         },
//         function (error) {
         
//           return Promise.reject(error.response);
//         },
//       );
//     },
//   };
  
//   export default axiosUtil;


import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

