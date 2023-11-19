import { Box } from '@mobily/stacks';
import { Suspense } from 'react';

import {
  PrimaryPlantCurrentListContentModule,
  PrimaryPlantCurrentListFloatingModule,
} from './modules';

import { LoadingPage } from '@/layouts';
import { palette } from '@/utils';

type PrimaryPlantCurrentListScreenProps = {};

export const PrimaryPlantCurrentListScreen =
  ({}: PrimaryPlantCurrentListScreenProps) => {
    return (
      <Suspense fallback={<LoadingPage />}>
        <Box
          paddingTop={24}
          paddingBottom={52}
          style={{ backgroundColor: palette['gray-100'], height: '100%' }}>
          <PrimaryPlantCurrentListContentModule />
          <PrimaryPlantCurrentListFloatingModule />
        </Box>
      </Suspense>
    );
  };
