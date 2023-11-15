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

import { PrimaryPlantListTabLabel } from './components';
import { MATERIAL_TOP_TAB_NAVIGATOR_SCREEN_OPTIONS } from './primary-plant-list.const';
import {
  PrimaryPlantCurrentListScreen,
  PrimaryPlantHarvestedListScreen,
} from './screen';

import { BasicLayout, ModalHeader } from '@/layouts';

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
    <BasicLayout backgroundColor="gray-100" tabBar>
      <ModalHeader
        left={{ type: 'string', title: '식물리스트' }}
        onPressExit={() => navigation.goBack()}
      />
      <Tab.Navigator
        style={{ marginTop: 24 }}
        initialRouteName="PrimaryPlantCurrentList"
        screenOptions={MATERIAL_TOP_TAB_NAVIGATOR_SCREEN_OPTIONS}>
        <Tab.Screen
          name="PrimaryPlantCurrentList"
          options={() => ({
            tabBarLabel: props => (
              <PrimaryPlantListTabLabel {...props} label="성장중" />
            ),
          })}
          component={PrimaryPlantCurrentListScreen}
        />
        <Tab.Screen
          name="PrimaryPlantHarvestedList"
          options={() => ({
            tabBarLabel: props => (
              <PrimaryPlantListTabLabel {...props} label="수확완료" />
            ),
          })}
          component={PrimaryPlantHarvestedListScreen}
        />
      </Tab.Navigator>
    </BasicLayout>
  );
};
