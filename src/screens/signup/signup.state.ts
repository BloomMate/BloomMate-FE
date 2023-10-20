import { atom } from 'recoil';

export enum ESignUpStep {
  'NAME_INPUT' = 'NAME_INPUT',
  'ID_INPUT' = 'ID_INPUT',
  'PW_INPUT' = 'PW_INPUT',
  'TIIUN_INPUT' = 'TIIUN_INPUT',
  'TURF_INPUT' = 'TURF_INPUT',
  'ADDRESS_INPUT' = 'ADDRESS_INPUT',
}

export const signUpSteps: ESignUpStep[] = [
  ESignUpStep.NAME_INPUT,
  ESignUpStep.ID_INPUT,
  ESignUpStep.PW_INPUT,
  ESignUpStep.TIIUN_INPUT,
  ESignUpStep.TURF_INPUT,
  ESignUpStep.ADDRESS_INPUT,
];

export type SignUpState = {
  screenStep: (typeof signUpSteps)[number];
};

export const $signUpState = atom<SignUpState>({
  key: 'signUpState',
  default: {
    screenStep: signUpSteps[0],
  },
});
