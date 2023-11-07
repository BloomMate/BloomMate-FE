export const getPlantListItemCopyByGrowthLevel = (
  growth_level: 'germination' | 'growth' | 'harvest',
) => {
  switch (growth_level) {
    case 'germination':
      return '발아기입니다. 틔운 텃밭이 매일 물을 주고 있어요!';
    case 'growth':
      return '성장기입니다. 틔운이 잘 자랄 수 있도록 도와드릴게요.';
    case 'harvest':
      return '수확기입니다. 텃밭에서 수확을 하고, 맛있는 요리를 만들어보세요.';
  }
};
