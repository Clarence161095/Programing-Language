import AxiosClient from './AxiosClient';


const PaginateApi = {
  get: async (params: any) => {
    const url = '/paginate';
    return await AxiosClient.post(url, { ...params });
  }
}

export default PaginateApi;