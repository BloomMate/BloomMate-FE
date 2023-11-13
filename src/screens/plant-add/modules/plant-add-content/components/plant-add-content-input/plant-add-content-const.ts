import { EPlantAddStep } from '../../../../plant-add.state';

export const mapLabelByScreenStep: Partial<
  Record<
    EPlantAddStep,
    { label: string; placeholder: string; rightIconName?: string }
  >
> = {
  [EPlantAddStep.ALIAS_INPUT]: {
    label: '별명',
    placeholder: '별명을 입력해주세요',
  },
  [EPlantAddStep.VARIETY]: {
    label: '품종',
    placeholder: '품종을 선택해주세요',
    rightIconName: 'menu-down',
  },
  [EPlantAddStep.DATE_INPUT]: {
    label: '날짜',
    placeholder: '심은 날짜를 선택해주세요',
    rightIconName: 'calendar-month-outline',
  },
};
