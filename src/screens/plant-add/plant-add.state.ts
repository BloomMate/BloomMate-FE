import { atom, selector } from 'recoil';

export enum EPlantAddStep {
  'PICTURE' = 'PICTURE',
  'PICTURE_COMPLETE' = 'PICTURE_COMPLETE',
  'VARIETY' = 'VARIETY',
  'ALIAS_INPUT' = 'ALIAS_INPUT',
  'DATE_INPUT' = 'DATE_INPUT',
}

export const plantAddSteps: EPlantAddStep[] = [
  EPlantAddStep.PICTURE,
  EPlantAddStep.PICTURE_COMPLETE,
  EPlantAddStep.VARIETY,
  EPlantAddStep.ALIAS_INPUT,
  EPlantAddStep.DATE_INPUT,
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

export const $currentPlantAddScreenStepIndexSelector = selector({
  key: 'currentPlantAddScreenStepIndex',
  get: ({ get }) => {
    const { screenStep } = get($plantAddState);
    const currentPlantAddScreenStepIndex = plantAddSteps.indexOf(screenStep);

    return currentPlantAddScreenStepIndex;
  },
});
