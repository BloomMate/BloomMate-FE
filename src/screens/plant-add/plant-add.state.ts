import { atom, selector } from 'recoil';

export enum ESignUpStep {
  'PICTURE' = 'PICTURE',
  'PICTURE_COMPLETE' = 'PICTURE_COMPLETE',
  'VARIETY' = 'VARIETY',
  'ALIAS_INPUT' = 'ALIAS_INPUT',
  'DATE_INPUT' = 'DATE_INPUT',
}

export const plantAddSteps: ESignUpStep[] = [
  ESignUpStep.PICTURE,
  ESignUpStep.PICTURE_COMPLETE,
  ESignUpStep.VARIETY,
  ESignUpStep.ALIAS_INPUT,
  ESignUpStep.DATE_INPUT,
];

export type plantAddState = {
  screenStep: (typeof plantAddSteps)[number];
};

export const $plantAddState = atom<plantAddState>({
  key: 'plantAddState',
  default: {
    screenStep: plantAddSteps[0],
  },
});

export const $currentScreenStepIndexSelector = selector({
  key: 'currentScreenStepIndex',
  get: ({ get }) => {
    const { screenStep } = get($plantAddState);
    const currentScreenStepIndex = plantAddSteps.indexOf(screenStep);

    return currentScreenStepIndex;
  },
});
