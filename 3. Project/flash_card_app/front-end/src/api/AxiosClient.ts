import axios from 'axios';

const AxiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_HOST,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => JSON.stringify(params),
});

// Add a request interceptor
AxiosClient.interceptors.request.use(
  function (config: any) {
    // Do something before request is sent
    const token = localStorage.getItem('access-token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  },
  function (error) {
    // Do something with request error
    if (error.message) {
      console.log('interceptors.request', error.message);
    }
    return Promise.reject(error);
  }
);

// Add a response interceptor
AxiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.message) {
      console.log('interceptors.response', error.message);
    }
    return Promise.reject(error);
  }
);

export default AxiosClient;
