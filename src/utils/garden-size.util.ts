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
