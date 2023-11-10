import { Box } from '@mobily/stacks';
import { Suspense, memo } from 'react';

import { PrimaryPlantHarvestedListContentModule } from './modules';

import { LoadingPage } from '@/layouts';
import { palette } from '@/utils';

type PrimaryPlantHarvestedListScreenProps = {};

export const PrimaryPlantHarvestedListScreen =
  memo<PrimaryPlantHarvestedListScreenProps>(() => {
    return (
      <Suspense fallback={<LoadingPage />}>
        <Box
          paddingTop={24}
          paddingBottom={52}
          style={{ backgroundColor: palette['gray-100'], height: '100%' }}>
          <PrimaryPlantHarvestedListContentModule />
        </Box>
      </Suspense>
    );
  });
