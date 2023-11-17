import { Stack } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import { isUndefined } from 'lodash';
import { View, Image } from 'react-native';

import { PlantDetailEditScreenNavigationRouteProps } from '../../plant-detail-edit.screen';

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
  };
