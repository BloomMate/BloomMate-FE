import { Stack } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import { isUndefined } from 'lodash';
import { memo } from 'react';

import {
  PlantDetailScreenNavigationProps,
  PlantDetailScreenNavigationRouteProps,
} from '../../../plant-detail.screen';

import { Icon, Text } from '@/atoms';
import { PLANT_DETAIL_DUMMY_DATA } from '@/dummy-data';
import { calculateDaysDifference, palette } from '@/utils';

type PlantDetailGrowthModule = {};

export const PlantDetailGrowthModule = memo<PlantDetailGrowthModule>(() => {
  const navigation = useNavigation<PlantDetailScreenNavigationProps>();
  const {
    params: { id },
  } = useRoute<PlantDetailScreenNavigationRouteProps>();

  const currentPlant = PLANT_DETAIL_DUMMY_DATA.find(v => v.id === id);

  if (isUndefined(currentPlant)) {
    return null;
  }

  const { planted_at, harvest_period_start, harvest_period_end } = currentPlant;

  return (
    <Stack space={12}>
      <Stack space={4} horizontal>
        <Icon
          color={palette['primary']}
          size={16}
          name={'energy-savings-leaf'}></Icon>
        <Text variants={'bodyMedium'} fontWeight={'Medium'} color={'primary'}>
          성장정보
        </Text>
      </Stack>
      <Stack space={4}>
        <Stack space={12} horizontal>
          <Text variants={'bodySmall'} fontWeight={'Medium'} color={'gray-900'}>
            {calculateDaysDifference(planted_at)} 일차
          </Text>
          <Text variants={'bodySmall'} fontWeight={'Light'} color={'gray-900'}>
            {`수확 예상 시기 : ${dayjs(planted_at)
              .add(harvest_period_start, 'd')
              .format('MM.DD')} ~  ${dayjs(planted_at)
              .add(harvest_period_end, 'd')
              .format('MM.DD')}`}
          </Text>
        </Stack>
        <Text variants={'bodySmall'} fontWeight={'Medium'} color={'primary'}>
          수확기입니다. 상태를 확인 후 수확해주세요.
        </Text>
      </Stack>
    </Stack>
  );
});
