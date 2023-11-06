import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';

import {
  PrimaryNavigatorParamLists,
  PrimaryNavigatorProps,
} from '../primary.navigator';

import {
  PrimaryPlantCurrentListModule,
  PrimaryPlantHarvestedListModule,
} from './modules';

import { BasicLayout, ModalHeaderLayout } from '@/layouts';

export type PrimaryPlantListScreenNavigatorProp = CompositeNavigationProp<
  PrimaryNavigatorProps,
  BottomTabNavigationProp<PrimaryNavigatorParamLists, 'PrimaryPlantListScreen'>
>;

export type PrimaryPlantListScreenRouteProp = RouteProp<
  PrimaryNavigatorParamLists,
  'PrimaryPlantListScreen'
>;

type PrimaryPlantListScreenProps = {};

export type PrimaryPlantListScreenTabParamList = {
  PrimaryPlantCurrentList: undefined;
  PrimaryPlantHarvestedList: undefined;
};

const Tab = createMaterialTopTabNavigator<PrimaryPlantListScreenTabParamList>();

export const PrimaryPlantListScreen = ({}: PrimaryPlantListScreenProps) => {
  const navigation = useNavigation<PrimaryPlantListScreenNavigatorProp>();

  return (
    <BasicLayout backgroundColor="gray-100">
      <ModalHeaderLayout
        left={{ type: 'string', title: '식물 리스트' }}
        onPressExit={() => navigation.goBack()}
      />
      <Tab.Navigator>
        <Tab.Screen
          name="PrimaryPlantCurrentList"
          component={PrimaryPlantCurrentListModule}
        />
        <Tab.Screen
          name="PrimaryPlantHarvestedList"
          component={PrimaryPlantHarvestedListModule}
        />
      </Tab.Navigator>
    </BasicLayout>
  );
};
