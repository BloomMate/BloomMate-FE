import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { Text } from '@/atoms';
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
  return (
    <BasicLayout backgroundColor="gray-100">
      <Text variants="bodyMedium" fontWeight="Medium" color="gray-900">
        Plant Detail Edit Screen
      </Text>
    </BasicLayout>
  );
};
