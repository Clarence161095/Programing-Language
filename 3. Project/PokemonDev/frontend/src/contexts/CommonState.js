import { atom } from 'recoil';

export const currentCommandState = atom({
  key: 'currentCommandState',
  default: '',
});

export const responseCommandState = atom({
  key: 'responseCommandState',
  default: () => <div></div>,
});

export const languageState = atom({
  key: 'languageState',
  default: 'vn',
});
