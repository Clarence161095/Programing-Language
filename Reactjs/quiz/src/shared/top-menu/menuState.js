import { atom } from "recoil";

export const menuState = atom({
  key: 'menuState',
  default: [
    {
      href: '/Home', text: 'Home',
    },
    {
      href: '/Studio', text: 'Studio',
    },
  ],
});