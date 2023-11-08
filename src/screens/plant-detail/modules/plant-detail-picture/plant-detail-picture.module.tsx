import { Stack } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import { isUndefined } from 'lodash';
import { memo } from 'react';
import { Image, View } from 'react-native';

import {
  PlantDetailScreenNavigationProps,
  PlantDetailScreenNavigationRouteProps,
} from '../../plant-detail.screen';

import { Text } from '@/atoms';
import { PLANT_DETAIL_DUMMY_DATA } from '@/dummy-data';
import { palette } from '@/utils';

type PlantDetailPictureModule = {};

export const PlantDetailPictureModule = memo<PlantDetailPictureModule>(() => {
  const navigation = useNavigation<PlantDetailScreenNavigationProps>();
  const {
    params: { id },
  } = useRoute<PlantDetailScreenNavigationRouteProps>();

  const currentPlant = PLANT_DETAIL_DUMMY_DATA.find(v => v.id === id);

  if (isUndefined(currentPlant)) {
    return null;
  }

  const { plant_picture_url, plant_nickname } = currentPlant;

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
