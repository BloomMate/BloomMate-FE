import { Stack } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import { isUndefined } from 'lodash';
import { memo } from 'react';

import { getPlantListItemCopyByGrowthLevel } from '../../../../primary/primary-plant-list/screen/primary-plant-current-list/modules/primary-plant-current-list-content/components/plant-list-item/plant-list-item.util';
import { PlantDetailScreenNavigationRouteProps } from '../../../plant-detail.screen';

import { Icon, Text } from '@/atoms';
import { useGetPlantDetailQuery } from '@/hooks';
import { calculateDaysDifference, palette } from '@/utils';

type PlantDetailGrowthModule = {};

export const PlantDetailGrowthModule = memo<PlantDetailGrowthModule>(() => {
  const {
    params: { id },
  } = useRoute<PlantDetailScreenNavigationRouteProps>();
  const { data } = useGetPlantDetailQuery({ plant_id: id });

  if (isUndefined(data)) {
    return null;
  }

  const { planted_at, harvest_period_start, harvest_period_end, growth_level } =
    data;

  return (
    <Stack space={12}>
      <Stack space={4} horizontal>
        <Icon
          color={palette['primary']}
          size={24}
          name={'energy-savings-leaf'}></Icon>
        <Text variants={'bodyLarge'} fontWeight={'Bold'} color={'primary'}>
          성장정보
        </Text>
      </Stack>
      <Stack space={4}>
        <Stack space={12} horizontal>
          <Text
            variants={'bodyMedium'}
            fontWeight={'Medium'}
            color={'gray-900'}>
            {calculateDaysDifference(planted_at)} 일차
          </Text>
          <Text
            variants={'bodyMedium'}
            fontWeight={'Medium'}
            color={'gray-700'}>
            {`수확 예상 시기 : ${dayjs(planted_at)
              .add(harvest_period_start, 'd')
              .format('MM.DD')} ~  ${dayjs(planted_at)
              .add(harvest_period_end, 'd')
              .format('MM.DD')}`}
          </Text>
        </Stack>
        <Text variants={'bodyMedium'} fontWeight={'Medium'} color={'primary'}>
          {getPlantListItemCopyByGrowthLevel(growth_level)}
        </Text>
      </Stack>
    </Stack>
  );
});
