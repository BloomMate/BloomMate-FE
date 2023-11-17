import { Stack } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';

import { RootStackParamList } from '../root.navigator';

import { DetailEditHeaderModule } from './module/detail-edit-header';

import { BasicLayout } from '@/layouts';

type PlantDetailEditScreenProps = {};

export type PlantDetailEditScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PlantDetailEditScreen'
>;

export type PlantDetailEditScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'PlantDetailEditScreen'
>;

export const PlantDetailEditScreen = ({}: PlantDetailEditScreenProps) => {
  const [value, setValue] = useState('');

  const handleChange = (text: string) => {
    setValue(text);
  };

  return (
    <BasicLayout backgroundColor="gray-100">
      <Stack space={48}>
        <DetailEditHeaderModule />
      </Stack>
    </BasicLayout>
  );
};
