import { ESignUpStep } from '../../../../plant-add.state';

export const mapLabelByScreenStep: Partial<
  Record<
    ESignUpStep,
    { label: string; placeholder: string; rightIconName?: string }
  >
> = {
  [ESignUpStep.ALIAS_INPUT]: {
    label: '별명',
    placeholder: '별명을 입력해주세요',
  },
  [ESignUpStep.VARIETY]: {
    label: '품종',
    placeholder: '품종을 선택해주세요',
    rightIconName: 'arrow-down',
  },
  [ESignUpStep.DATE_INPUT]: {
    label: '날짜',
    placeholder: '심은 날짜를 선택해주세요',
    rightIconName: 'calendar-month',
  },
};
