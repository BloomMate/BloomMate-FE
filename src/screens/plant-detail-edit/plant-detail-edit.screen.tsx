import { Stack } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { isUndefined } from 'lodash';
import { useEffect } from 'react';

import { RootStackParamList } from '../root.navigator';

import { usePlantDetailEditForm } from './hooks';
import { PlantDetailEditNickNameInputModule } from './module';
import { DetailEditContentPictureModule } from './module/detail-edit-content-picture';
import { PlantDetailEditHeaderModule } from './module/plant-detail-edit-header';

import { useGetPlantDetailQuery } from '@/hooks';
import { BasicLayout } from '@/layouts';

export type PlantDetailEditScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PlantDetailEditScreen'
>;

export type PlantDetailEditScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'PlantDetailEditScreen'
>;

export const PlantDetailEditScreen = () => {
  const methods = usePlantDetailEditForm();
  const { setValue } = methods;

  const {
    params: { id },
  } = useRoute<PlantDetailEditScreenNavigationRouteProps>();
  const { data } = useGetPlantDetailQuery({ plant_id: id });

  useEffect(() => {
    if (!isUndefined(data)) {
      setValue('plant_nickname', data.plant_nickname);
      setValue('plant_picture_url', data.plant_picture_url);
    }
  }, [data]);

  if (isUndefined(data)) {
    return null;
  }

  return (
    <BasicLayout backgroundColor="gray-100">
      <PlantDetailEditHeaderModule />
      <Stack space={100}>
        <PlantDetailEditNickNameInputModule />
        <DetailEditContentPictureModule />
      </Stack>
    </BasicLayout>
  );
};
