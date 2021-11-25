import { atom } from 'recoil';

export const ActiveMenu = atom({
  key: 'activeMenu',
  default: 'home',
});

export const UserState = atom({
  key: 'UserState',
  default: {
    uid: '',
    displayName: '',
    email: '',
    photoURL: '',
  },
});

export const IsSignedIn = atom({
  key: 'IsSignedIn',
  default: false,
});
