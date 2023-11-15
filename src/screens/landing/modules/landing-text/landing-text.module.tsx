import { memo } from 'react';

import { Text } from '@/atoms';

type LandingTextModuleProps = {};

export const LandingTextModule = memo<LandingTextModuleProps>(() => {
  return (
    <Text variants="titleLarge" fontWeight="Medium" color="black">
      식집사를 위한 친구
    </Text>
  );
});
