import { atom } from 'recoil';


const PaginateState = atom({
  key: 'paginateState',
  default: {
    data: [],
    pagination: {},
    loading: false,
  }
})

export default PaginateState;