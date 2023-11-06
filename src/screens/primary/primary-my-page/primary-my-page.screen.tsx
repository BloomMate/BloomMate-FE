import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

import {
  PrimaryNavigatorParamLists,
  PrimaryNavigatorProps,
} from '../primary.navigator';

import { Text } from '@/atoms';

export type PrimaryMyPageScreenNavigatorProp = CompositeNavigationProp<
  PrimaryNavigatorProps,
  BottomTabNavigationProp<PrimaryNavigatorParamLists, 'PrimaryMyPageScreen'>
>;

export type PrimaryMyPageScreenRouteProp = RouteProp<
  PrimaryNavigatorParamLists,
  'PrimaryMyPageScreen'
>;

type PrimaryMyPageScreenProps = {};

export const PrimaryMyPageScreen = ({}: PrimaryMyPageScreenProps) => {
  return (
    <Text fontWeight="Medium" variants="bodyLarge" color="black">
      마이 페이지
    </Text>
  );
};
