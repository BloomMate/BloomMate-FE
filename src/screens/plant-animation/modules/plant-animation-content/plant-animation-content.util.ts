import {
  PLANT_ADD_LOTTIE,
  PLANT_DELETE_LOTTIE,
  PLANT_HARVEST_LOTTIE,
} from '@/assets';

export const getPlantAnimationContents = (
  type: 'plant-add' | 'harvest' | 'plant-dead',
) => {
  switch (type) {
    case 'plant-add':
      return {
        LOTTIE_FILE: PLANT_ADD_LOTTIE,
        copy: '틔운에 성공적으로 식물을 심으셨군요!\nBloomMate에서 식물과 대화하고 진단해보세요',
      };
    case 'harvest':
      return {
        LOTTIE_FILE: PLANT_HARVEST_LOTTIE,
        copy: '수확을 축하드립니다!\nBloomMate에서 즐거운 식집사 생활을 이어나가세요',
      };
    case 'plant-dead':
      return {
        LOTTIE_FILE: PLANT_DELETE_LOTTIE,
        copy: '새로운 씨앗을 AI 가 주문했어요.\n다음 번에는 소중하게 키워주세요!\n할 수 있어요!',
      };
  }
};
