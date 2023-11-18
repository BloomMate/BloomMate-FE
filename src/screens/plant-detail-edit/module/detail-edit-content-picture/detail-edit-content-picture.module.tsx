import { Box, Stack } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import { isUndefined } from 'lodash';
import { View, Image, TouchableOpacity } from 'react-native';

import { PlantDetailEditScreenNavigationRouteProps } from '../../plant-detail-edit.screen';

import { Icon, Text } from '@/atoms';
import { useGetPlantDetailQuery } from '@/hooks';
import { palette } from '@/utils';

type DetailEditContentPictureModuleProps = {};

export const DetailEditContentPictureModule =
  ({}: DetailEditContentPictureModuleProps) => {
    const {
      params: { id },
    } = useRoute<PlantDetailEditScreenNavigationRouteProps>();
    const { data } = useGetPlantDetailQuery({ plant_id: id });

    if (isUndefined(data)) {
      return null;
    }

    const { plant_picture_url } = data;

    return (
      <Stack>
        <Stack space={8}>
          <Box alignX="between" direction="row" alignY="center">
            <Text variants={'titleLarge'} fontWeight={'Bold'} color={'black'}>
              사진 업데이트
            </Text>
            <TouchableOpacity>
              <Box direction="row" alignX="center" alignY="center">
                <Text variants="bodySmall" fontWeight="Bold" color="primary">
                  {'촬영하기'}
                </Text>
                <Icon
                  name="photo-camera"
                  size={16}
                  color={palette['primary']}
                />
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
              resizeMode="cover"
            />
          </View>
        </Stack>
      </Stack>
    );
  };