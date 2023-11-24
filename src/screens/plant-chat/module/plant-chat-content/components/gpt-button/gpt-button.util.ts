import {
  CORN_SEED_IMG,
  POTATO_SEED_IMG,
  STRAWBERRY_SEED_IMG,
  TOMATO_SEED_IMG,
} from '@/assets';

export const getSeedImgByPlantName = (name: string) => {
  switch (name) {
    case '토마토':
      return TOMATO_SEED_IMG;
    case '딸기':
      return STRAWBERRY_SEED_IMG;
    case '감자':
      return POTATO_SEED_IMG;
    case '옥수수':
      return CORN_SEED_IMG;
    default:
      return STRAWBERRY_SEED_IMG;
  }
};
