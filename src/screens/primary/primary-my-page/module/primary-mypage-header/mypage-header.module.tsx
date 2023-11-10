import { Stack } from '@mobily/stacks';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

import {
  PrimaryNavigatorProps,
  PrimaryNavigatorParamLists,
} from '../../../primary.navigator';

import { Text } from '@/atoms';

export type PrimaryMyPageScreenNavigatorProp = CompositeNavigationProp<
  PrimaryNavigatorProps,
  BottomTabNavigationProp<PrimaryNavigatorParamLists, 'PrimaryMyPageScreen'>
>;

export type PrimaryMyPageScreenRouteProp = RouteProp<
  PrimaryNavigatorParamLists,
  'PrimaryMyPageScreen'
>;

type PrimaryMyPageHeaderModuleProps = {};

export const PrimaryMyPageHeaderModule =
  ({}: PrimaryMyPageHeaderModuleProps) => {
    return (
      <Stack>
        <Text fontWeight="Medium" variants="titleLarge" color="gray-900">
          마이 페이지
        </Text>
      </Stack>
    );
  };
