import { ESignUpStep } from '../../signup.state';

export const getInfoByScreenStep = (screenStep: ESignUpStep) => {
  switch (screenStep) {
    case 'NAME_INPUT':
      return '이름을\n알려주세요';

    case 'ID_INPUT':
      return '아이디를\n설정해주세요';

    case 'PW_INPUT':
      return '비밀번호를\n설정해주세요';

    case 'TIIUN_INPUT':
      return '틔운 제품키를\n입력해주세요';

    case 'TURF_INPUT':
      return '텃밭의 크기를\n알려주세요';

    case 'ADDRESS_INPUT':
      return '주소를\n입력해주세요';

    default:
      throw new Error('NOT A SIGN UP STEP');
  }
};
