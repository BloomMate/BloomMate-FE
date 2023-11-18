import { Stack } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { isUndefined } from 'lodash';
import { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';

import { RootStackParamList } from '../root.navigator';

import { usePlantDetailEditForm } from './hooks';
import {
  PlantDetailEditNickNameInputModule,
  PlantDetailEditHeaderModule,
  PlantDetailEditPictureInputModule,
} from './module';

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
    <FormProvider {...methods}>
      <BasicLayout backgroundColor="gray-100">
        <PlantDetailEditHeaderModule />
        <Stack space={48} paddingTop={48}>
          <PlantDetailEditNickNameInputModule />
          <PlantDetailEditPictureInputModule />
        </Stack>
      </BasicLayout>
    </FormProvider>
  );
};
