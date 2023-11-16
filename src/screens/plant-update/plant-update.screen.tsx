import { Stack } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { PlantUpdateHeaderModule } from './module/plant-update-header/plant-update-header.module';

import { BasicLayout } from '@/layouts';

type PlantUpdateScreenProps = {};

export type PlantUpdateScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PlantUpdateScreen'
>;

export type PlantUpdateScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'PlantUpdateScreen'
>;

export const PlantUpdateScreen = ({}: PlantUpdateScreenProps) => {
  return (
    <BasicLayout backgroundColor="gray-100">
      <Stack>
        <PlantUpdateHeaderModule />
      </Stack>
    </BasicLayout>
  );
};
