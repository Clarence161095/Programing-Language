import axios from 'axios';
import queryString from 'querystring';
import { getCurrentUserFirebase } from 'utils/CheckLogin';
import LocalStorageService from 'utils/LocalStorageService';

const AxiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

AxiosClient.interceptors.request.use(async (config: any) => {
  const resFirebase: any = await getCurrentUserFirebase();
  LocalStorageService.setEncode('token', resFirebase['token'])

  const token = LocalStorageService.getDecodeString('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

AxiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }

  return response;
}, (error) => {
  // TODO: handle error 
  if (error.response) {
    if (error.response.status === 498) {
      // TODO: handle error  498   
      console.log(`go to home‚`)
    }
    if (error.response.status === 408) {
      console.log(`Request Timeout`)
    }
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error message', error.message);
  }
});

export default AxiosClient;