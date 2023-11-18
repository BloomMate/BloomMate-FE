import { Stack } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { isUndefined } from 'lodash';
import { useState } from 'react';

import { RootStackParamList } from '../root.navigator';

import { DetailEditContentInputModule } from './module/detail-edit-content-input';
import { DetailEditContentPictureModule } from './module/detail-edit-content-picture';
import { DetailEditHeaderModule } from './module/detail-edit-header';

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
  const {
    params: { id },
  } = useRoute<PlantDetailEditScreenNavigationRouteProps>();
  const { data } = useGetPlantDetailQuery({ plant_id: id });

  if (isUndefined(data)) {
    return null;
  }

  const { plant_nickname } = data;

  const [value, setValue] = useState(plant_nickname);

  const handleChange = (text: string) => {
    setValue(text);
  };

  return (
    <BasicLayout backgroundColor="gray-100">
      <Stack space={100}>
        <DetailEditHeaderModule />
        <DetailEditContentInputModule
          value={value}
          onChange={handleChange}
          placeholder={plant_nickname}
        />
        <DetailEditContentPictureModule />
      </Stack>
    </BasicLayout>
  );
};
