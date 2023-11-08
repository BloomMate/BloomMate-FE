import { Stack } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import { isUndefined } from 'lodash';
import React, { memo } from 'react';

import {
  PlantDetailScreenNavigationProps,
  PlantDetailScreenNavigationRouteProps,
} from '../../../plant-detail.screen';

import { Icon, Text } from '@/atoms';
import { PLANT_DETAIL_DUMMY_DATA } from '@/dummy-data';
import { palette } from '@/utils';

type PlantDetailDetailsModule = {};

export const PlantDetailDetailsModule = memo<PlantDetailDetailsModule>(() => {
  const navigation = useNavigation<PlantDetailScreenNavigationProps>();
  const {
    params: { id },
  } = useRoute<PlantDetailScreenNavigationRouteProps>();

  const currentPlant = PLANT_DETAIL_DUMMY_DATA.find(v => v.id === id);

  if (isUndefined(currentPlant)) {
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
  } = currentPlant;

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

  const DetailItem = ({
    detail,
  }: {
    detail: { title: string; content: string | undefined };
  }) => (
    <Stack horizontal>
      <Text
        style={{ minWidth: 81 }}
        variants="bodySmall"
        fontWeight={'Medium'}
        color={'gray-900'}>
        {detail.title}
      </Text>
      <Text variants={'bodySmall'} fontWeight={'Light'} color={'gray-900'}>
        {detail.content}
      </Text>
    </Stack>
  );

  return (
    <>
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
    </>
  );
});
