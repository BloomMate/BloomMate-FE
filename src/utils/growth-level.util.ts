export const getCopyByGrowthLevel = (
  growth_level: 'germination' | 'growth' | 'harvest',
) => {
  switch (growth_level) {
    case 'germination':
      return '발아기';
    case 'growth':
      return '성장기';
    case 'harvest':
      return '수확기';
  }
};
