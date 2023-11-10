import { Stack } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import { isUndefined } from 'lodash';
import { memo } from 'react';
import { Image, View } from 'react-native';

import { PlantDetailScreenNavigationRouteProps } from '../../../plant-detail.screen';

import { Text } from '@/atoms';
import { useGetPlantDetailQuery } from '@/hooks';
import { palette } from '@/utils';

type PlantDetailPictureModule = {};

export const PlantDetailPictureModule = memo<PlantDetailPictureModule>(() => {
  const {
    params: { id },
  } = useRoute<PlantDetailScreenNavigationRouteProps>();
  const { data } = useGetPlantDetailQuery({ plant_id: id });

  if (isUndefined(data)) {
    return null;
  }

  const { plant_picture_url, plant_nickname } = data;

  return (
    <Stack space={8}>
      <Text variants={'titleLarge'} fontWeight={'Medium'} color={'gray-900'}>
        {plant_nickname}
      </Text>
      <View
        style={{
          borderRadius: 8,
          height: 180,
          backgroundColor: palette['white'],
          elevation: 4,
        }}>
        <Image
          source={{ uri: plant_picture_url }}
          style={{ width: '100%', height: '100%', borderRadius: 8 }}
          resizeMode="cover"
        />
      </View>
    </Stack>
  );
});
