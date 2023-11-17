import { Stack } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { isUndefined } from 'lodash';
import { useState } from 'react';

import { RootStackParamList } from '../root.navigator';

import { DetailEditContentInputModule } from './module/detail-edit-content-input';
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

  const plantDetails = [{ title: '품종', content: plant_nickname }];

  const [value, setValue] = useState('');

  const handleChange = (text: string) => {
    setValue(text);
  };

  return (
    <BasicLayout backgroundColor="gray-100">
      <Stack space={48}>
        <DetailEditHeaderModule />
        <DetailEditContentInputModule
          value={value}
          onChange={handleChange}
          placeholder={plantDetails}
        />
      </Stack>
    </BasicLayout>
  );
};
