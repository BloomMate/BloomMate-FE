import { Stack } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import { isUndefined } from 'lodash';
import React, { memo } from 'react';

import { PlantDetailScreenNavigationRouteProps } from '../../../plant-detail.screen';

import { DetailItem } from './components';

import { Icon, Text } from '@/atoms';
import { useGetPlantDetailQuery } from '@/hooks';
import { palette } from '@/utils';

type PlantDetailDetailsModule = {};

export const PlantDetailDetailsModule = memo<PlantDetailDetailsModule>(() => {
  const {
    params: { id },
  } = useRoute<PlantDetailScreenNavigationRouteProps>();
  const { data } = useGetPlantDetailQuery({ plant_id: id });

  if (isUndefined(data)) {
    return null;
  }
  const {
    plant_name,
    plant_temperature,
    plant_humidity,
    plant_illuminance,
    plant_bloom_season,
    plant_watering_cycle,
    plant_difficulty,
    plant_caution,
  } = data;

  const plantDetails = [
    { title: '품종', content: plant_name },
    { title: '적정 온도', content: plant_temperature },
    { title: '적정 습도', content: plant_humidity },
    { title: '적정 조도', content: plant_illuminance },
    { title: '개화 시기', content: plant_bloom_season },
    { title: '급수 주기', content: plant_watering_cycle },
    { title: '난이도', content: plant_difficulty },
    { title: '주의사항', content: plant_caution },
  ];

  return (
    <>
      <Stack space={12}>
        <Stack space={4} horizontal>
          <Icon color={palette['primary']} size={16} name={'list-alt'} />
          <Text variants={'bodyMedium'} fontWeight={'Medium'} color={'primary'}>
            상세정보
          </Text>
        </Stack>
        <Stack space={4}>
          {plantDetails.map((detail, index) => (
            <DetailItem key={index} detail={detail} />
          ))}
        </Stack>
      </Stack>
    </>
  );
});
