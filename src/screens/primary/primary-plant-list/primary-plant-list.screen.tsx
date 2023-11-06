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

import { Text } from '@/atoms';
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

const Tab = createMaterialTopTabNavigator();

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
          name="Home"
          component={() => (
            <Text variants="displayLarge" fontWeight="Light" color="gray-600">
              Home
            </Text>
          )}
        />
        <Tab.Screen
          name="Settings"
          component={() => (
            <Text variants="displayLarge" fontWeight="Light" color="gray-600">
              Settings
            </Text>
          )}
        />
      </Tab.Navigator>
    </BasicLayout>
  );
};
