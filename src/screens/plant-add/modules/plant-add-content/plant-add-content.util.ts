import { ESignUpStep } from '../../plant-add.state';

export const getInfoByScreenStep = (screenStep: ESignUpStep) => {
  switch (screenStep) {
    case 'PICTURE':
      return '사진을\n등록해주세요';

    case 'PICTURE_COMPLETE':
      return '찍은 사진을\n확인해주세요';

    case 'VARIETY':
      return '품종을\n선택해주세요';

    case 'ALIAS_INPUT':
      return '별명을\n지어주세요';

    case 'DATE_INPUT':
      return '심은 날짜를\n알려주세요';

    default:
      throw new Error('NOT A PLANT ADD STEP');
  }
};
