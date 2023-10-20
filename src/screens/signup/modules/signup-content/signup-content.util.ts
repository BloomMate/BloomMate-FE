import { ESignUpStep } from '../../signup.state';

export const getInfoByScreenStep = (screenStep: ESignUpStep) => {
  switch (screenStep) {
    case 'NAME_INPUT':
      return '이름을 알려주세요.';

    case 'ID_INPUT':
      return '아이디를 입력해주세요.';

    case 'PW_INPUT':
      return '비밀번호를 입력해주세요.';

    case 'TIIUN_INPUT':
      return '틔운 일련번호를 알려주세요.';

    case 'TURF_INPUT':
      return '밭의 크기를 알려주세요.';

    case 'ADDRESS_INPUT':
      return '주소를 알려주세요.';

    default:
      throw new Error('NOT A SIGN UP STEP');
  }
};
