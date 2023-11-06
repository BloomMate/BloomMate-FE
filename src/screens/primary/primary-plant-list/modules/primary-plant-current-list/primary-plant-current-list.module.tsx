import { Box } from '@mobily/stacks';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type PrimaryPlantCurrentListModuleProps = {};

export const PrimaryPlantCurrentListModule =
  ({}: PrimaryPlantCurrentListModuleProps) => {
    return (
      <Box
        paddingTop={24}
        style={{ backgroundColor: palette['gray-100'], height: '100%' }}>
        <Text variants="displayLarge" fontWeight="Light" color="gray-900">
          재배중인 식물
        </Text>
      </Box>
    );
  };
