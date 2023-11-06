import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

import {
  PrimaryNavigatorParamLists,
  PrimaryNavigatorProps,
} from '../primary.navigator';

import { Text } from '@/atoms';

export type PrimaryPlantListScreenNavigatorProp = CompositeNavigationProp<
  PrimaryNavigatorProps,
  BottomTabNavigationProp<PrimaryNavigatorParamLists, 'PrimaryPlantListScreen'>
>;

export type PrimaryPlantListScreenRouteProp = RouteProp<
  PrimaryNavigatorParamLists,
  'PrimaryPlantListScreen'
>;

type PrimaryPlantListScreenProps = {};

export const PrimaryPlantListScreen = ({}: PrimaryPlantListScreenProps) => {
  return (
    <Text fontWeight="Medium" variants="bodyLarge" color="black">
      식물 리스트
    </Text>
  );
};
