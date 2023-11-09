import { Box } from '@mobily/stacks';

import { Text } from '@/atoms';

export const DiagnosisListEmpty = () => (
  <Box flex="fluid" alignY="center">
    <Text
      variants="labelLarge"
      fontWeight="Medium"
      color="gray-900"
      textAlignment="center">
      진단 기록이 없습니다.
    </Text>
  </Box>
);
