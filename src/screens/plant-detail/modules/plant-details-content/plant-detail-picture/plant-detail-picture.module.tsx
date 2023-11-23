import { Box, Stack } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import { isUndefined } from 'lodash';
import { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import {
  PlantDetailScreenNavigationProps,
  PlantDetailScreenNavigationRouteProps,
} from '../../../plant-detail.screen';

import { Icon, Image, Text } from '@/atoms';
import { useGetPlantDetailQuery } from '@/hooks';
import { palette } from '@/utils';

type PlantDetailPictureModule = {};

export const PlantDetailPictureModule = memo<PlantDetailPictureModule>(() => {
  const navigation = useNavigation<PlantDetailScreenNavigationProps>();

  const {
    params: { id },
  } = useRoute<PlantDetailScreenNavigationRouteProps>();
  const { data } = useGetPlantDetailQuery({ plant_id: id });

  const handlePressUpdate = () => {
    navigation.navigate('PlantDetailEditScreen', { id });
  };

  if (isUndefined(data)) {
    return null;
  }

  const { plant_picture_url, plant_nickname } = data;

  return (
    <Stack space={8}>
      <Box alignX="between" direction="row" alignY="center">
        <Text variants={'titleLarge'} fontWeight={'Bold'} color={'black'}>
          {plant_nickname}
        </Text>
        <TouchableOpacity onPress={handlePressUpdate}>
          <Box direction="row" alignX="center" alignY="center">
            <Text variants="bodySmall" fontWeight="Bold" color="primary">
              {'업데이트'}
            </Text>
            <Icon name="update" size={16} color={palette['primary']} />
          </Box>
        </TouchableOpacity>
      </Box>
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
          resizeMode={FastImage.resizeMode.cover}
          skeletonStyle={{ borderRadius: 8 }}
        />
      </View>
    </Stack>
  );
});
