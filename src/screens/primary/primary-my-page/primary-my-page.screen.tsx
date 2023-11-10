import { Stack } from '@mobily/stacks';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

import {
  PrimaryNavigatorParamLists,
  PrimaryNavigatorProps,
} from '../primary.navigator';

import { PrimaryMyPageContentModule } from './module/primary-mypage-content';
import { PrimaryMyPageHeaderModule } from './module/primary-mypage-header';

import { palette } from '@/utils';

type PrimaryMyPageScreenProps = {};

export type PrimaryMyPageScreenNavigatorProp = CompositeNavigationProp<
  PrimaryNavigatorProps,
  BottomTabNavigationProp<PrimaryNavigatorParamLists, 'PrimaryMyPageScreen'>
>;

export type PrimaryMyPageScreenRouteProp = RouteProp<
  PrimaryNavigatorParamLists,
  'PrimaryMyPageScreen'
>;

export const PrimaryMyPageScreen = ({}: PrimaryMyPageScreenProps) => {
  return (
    <Stack
      paddingX={24}
      paddingY={32}
      style={{ backgroundColor: palette['gray-100'], flex: 1 }}
      space={48}>
      <PrimaryMyPageHeaderModule />
      <PrimaryMyPageContentModule />
    </Stack>
  );
};
