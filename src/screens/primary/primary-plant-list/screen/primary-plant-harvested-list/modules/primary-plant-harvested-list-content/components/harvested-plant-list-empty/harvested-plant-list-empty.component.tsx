import { Box } from '@mobily/stacks';

import { Text } from '@/atoms';

export const HarvestedPlantListEmpty = () => {
  return (
    <Box alignX="center" alignY="center" style={{ height: '100%' }}>
      <Text
        variants="labelLarge"
        fontWeight="Medium"
        color="gray-900"
        textAlignment="center">
        {
          '수확된 식물이 없어요.\n스마트 코티지 텃밭에서 BloomMate와\n함께 식물을 키워봐요!'
        }
      </Text>
    </Box>
  );
};
