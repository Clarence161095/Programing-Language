import AxiosClient from './AxiosClient';

const UserApi = {
  login: async (local_user: any) => {
    const url = '/login';
    return await AxiosClient.post(url, local_user);
  },
  getUser: async (params: any) => {
    const url = '/users/getUser';
    return await AxiosClient.post(url, { ...params });
  },
  updateUser: async (params: any) => {
    const url = '/users/';
    return await AxiosClient.patch(url, { ...params })
  },
  deleteUser: async (params: any) => {
    const url = '/users/deleteUser';
    return await AxiosClient.patch(url, { ...params })
  }
}

export default UserApi;