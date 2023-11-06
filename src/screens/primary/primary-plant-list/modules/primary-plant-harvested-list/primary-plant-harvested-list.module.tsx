import { Box } from '@mobily/stacks';
import { memo } from 'react';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type PrimaryPlantHarvestedListModuleProps = {};

export const PrimaryPlantHarvestedListModule =
  memo<PrimaryPlantHarvestedListModuleProps>(() => {
    return (
      <Box
        paddingTop={24}
        style={{ backgroundColor: palette['gray-100'], height: '100%' }}>
        <Text variants="displayLarge" fontWeight="Light" color="gray-900">
          수확 완료 식물
        </Text>
      </Box>
    );
  });
