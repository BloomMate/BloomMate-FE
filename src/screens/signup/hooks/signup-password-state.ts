import { atom } from 'recoil';

export type passWordState = {
  passWord: string;
};

export const $passWordState = atom<passWordState>({
  key: 'passWordState',
  default: {
    passWord: '',
  },
});
