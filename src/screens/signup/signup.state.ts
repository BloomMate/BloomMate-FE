import { atom } from 'recoil';

export type SignUpStep =
  | 'NAME_INPUT'
  | 'ID_INPUT'
  | 'PW_INPUT'
  | 'TIIUN_INPUT'
  | 'TURF_INPUT'
  | 'ADDRESS_INPUT';

export type SignUpState = {
  screenStep: SignUpStep;
};

export const $signUpState = atom<SignUpState>({
  key: 'signUpState',
  default: {
    screenStep: 'NAME_INPUT',
  },
});
