import { ESignUpStep } from '../../../../signup.state';

export const mapLabelByScreenStep: Partial<
  Record<ESignUpStep, { label: string; placeholder: string }>
> = {
  [ESignUpStep.NAME_INPUT]: {
    label: '이름',
    placeholder: '이름을 입력해주세요',
  },
  [ESignUpStep.TIIUN_INPUT]: {
    label: '제품키',
    placeholder: '제품키를 입력해주세요',
  },
  [ESignUpStep.PW_CHECK_INPUT]: {
    label: '비밀번호 확인',
    placeholder: '비밀번호를 확인해주세요',
  },
  [ESignUpStep.PW_INPUT]: {
    label: '비밀번호',
    placeholder: '비밀번호를 설정해주세요',
  },
  [ESignUpStep.ID_INPUT]: {
    label: '아이디',
    placeholder: '아이디를 입력해주세요',
  },
  [ESignUpStep.ADDRESS_INPUT]: {
    label: '주소',
    placeholder: '주소를 입력해주세요',
  },
};
