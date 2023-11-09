import { Box } from '@mobily/stacks';

import { Text } from '@/atoms';

export const EmptyList = () => (
  <Box flex="fluid">
    <Text
      variants="labelLarge"
      fontWeight="Medium"
      color="gray-900"
      textAlignment="center">
      아직 진단 기록이 없습니다.
    </Text>
  </Box>
);
