import { memo } from 'react';

import { Text } from '@/atoms';

type PrimaryPlantHarvestedListModuleProps = {};

export const PrimaryPlantHarvestedListModule =
  memo<PrimaryPlantHarvestedListModuleProps>(() => {
    return (
      <Text variants="displayLarge" fontWeight="Light" color="gray-600">
        수확 완료 식물
      </Text>
    );
  });
