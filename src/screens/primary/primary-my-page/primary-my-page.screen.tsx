import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

import {
  PrimaryNavigatorParamLists,
  PrimaryNavigatorProps,
} from '../primary.navigator';

import { PrimaryMyPageContentModule } from './module/primary-mypage-content';

import { BasicLayout } from '@/layouts';

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
    <BasicLayout backgroundColor={'gray-100'}>
      <PrimaryMyPageContentModule />
    </BasicLayout>
  );
};
