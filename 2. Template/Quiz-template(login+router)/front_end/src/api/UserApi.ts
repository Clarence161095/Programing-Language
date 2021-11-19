import AxiosClient from './AxiosClient';

const UserApi = {
  login: (local_user: any) => {
    const url = '/login';
    return AxiosClient.post(url, local_user);
  }
}

export default UserApi;