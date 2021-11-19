import { atom } from 'recoil';

const UserState = atom({
  key: 'UserState',
  default: {
    uid: "",
    displayName: "",
    email: "",
    photoURL: "",
  }
})

export const IsSignedIn = atom({
  key: 'IsSignedIn',
  default: false
})

export const Role = atom({
  key: 'Role',
  default: 'normal'
})

export default UserState;