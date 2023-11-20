export const isFullListByGardenSizeAndNumberOfPlant = (
  gardenSize: '0' | '1' | '2',
  numberOfPlant: number,
) => {
  const maxNumberMappingByGardenSize = {
    '0': 3,
    '1': 5,
    '2': 7,
  };

  return maxNumberMappingByGardenSize[gardenSize] === numberOfPlant;
};

export const myPageGardenSize = (gardenSize: '0' | '1' | '2') => {
  switch (gardenSize) {
    case '0':
      return '소형 : 5평 (16.53㎡)';
    case '1':
      return '중형 : 7평 (24.14㎡)';
    case '2':
      return '대형 : 10평 (33.06㎡)';
  }
};
