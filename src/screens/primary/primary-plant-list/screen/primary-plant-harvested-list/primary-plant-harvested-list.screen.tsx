import { Box } from '@mobily/stacks';
import { memo } from 'react';

import { PrimaryPlantHarvestedListEmptyModule } from './modules';

import { palette } from '@/utils';

type PrimaryPlantHarvestedListScreenProps = {};

export const PrimaryPlantHarvestedListScreen =
  memo<PrimaryPlantHarvestedListScreenProps>(() => {
    return (
      <Box
        paddingTop={24}
        paddingBottom={52}
        style={{ backgroundColor: palette['gray-100'], height: '100%' }}>
        {/** 2개를 계속 해서 테스트 할 것 */}
        <PrimaryPlantHarvestedListEmptyModule />
        {/* <PrimaryPlantHarvestedListExistModule/> */}
      </Box>
    );
  });
