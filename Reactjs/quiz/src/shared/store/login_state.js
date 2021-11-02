import { atom } from "recoil";

export const loginState = atom({
  key: 'loginState',
  default: [],
});

export const loginToken = atom({
  key: 'loginToken',
  default: [],
});