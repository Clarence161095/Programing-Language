import AxiosClient from './AxiosClient';

const HomeAPI = {
  get: async (params) => {
    const url = '/home/get';
    return await AxiosClient.post(url, { ...params });
  },
}

export default HomeAPI;