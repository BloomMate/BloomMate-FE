import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

import {
  PrimaryNavigatorParamLists,
  PrimaryNavigatorProps,
} from '../primary.navigator';

import { Text } from '@/atoms';

export type PrimaryCommunityScreenNavigatorProp = CompositeNavigationProp<
  PrimaryNavigatorProps,
  BottomTabNavigationProp<PrimaryNavigatorParamLists, 'PrimaryCommunityScreen'>
>;

export type PrimaryCommunityScreenRouteProp = RouteProp<
  PrimaryNavigatorParamLists,
  'PrimaryCommunityScreen'
>;

type PrimaryCommunityScreenProps = {};

export const PrimaryCommunityScreen = ({}: PrimaryCommunityScreenProps) => {
  return (
    <Text fontWeight="Medium" variants="bodyLarge" color="black">
      식집사 커뮤니티
    </Text>
  );
};
