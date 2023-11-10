import { Box } from '@mobily/stacks';

import {
  PrimaryPlantCurrentListContentModule,
  PrimaryPlantCurrentListFloatingModule,
} from './modules';

import { palette } from '@/utils';

type PrimaryPlantCurrentListScreenProps = {};

export const PrimaryPlantCurrentListScreen =
  ({}: PrimaryPlantCurrentListScreenProps) => {
    return (
      <Box
        paddingTop={24}
        paddingBottom={52}
        style={{ backgroundColor: palette['gray-100'], height: '100%' }}>
        <PrimaryPlantCurrentListContentModule />
        <PrimaryPlantCurrentListFloatingModule
          isEmptyList={false}
          isFullList={false}
        />
      </Box>
    );
  };
