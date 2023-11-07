import { Box } from '@mobily/stacks';

import {
  PrimaryPlantCurrentListExistModule,
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
        {/** 2개를 계속 해서 테스트 할 것 */}
        {/* <PrimaryPlantCurrentListEmptyModule /> */}
        <PrimaryPlantCurrentListExistModule />
        <PrimaryPlantCurrentListFloatingModule isEmptyList={false} />
      </Box>
    );
  };
