import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { PrimaryCommunityScreen } from './primary-community';
import { PrimaryMyPageScreen } from './primary-my-page';
import { PrimaryPlantListScreen } from './primary-plant-list';

import { Icon } from '@/atoms';
import { palette } from '@/utils';

export type PrimaryNavigatorParamLists = {
  PrimaryPlantListScreen: undefined;
  PrimaryCommunityScreen: undefined;
  PrimaryMyPageScreen: undefined;
};

const Tab = createBottomTabNavigator<PrimaryNavigatorParamLists>();

export type PrimaryNavigatorProps = StackNavigationProp<
  RootStackParamList,
  'PrimaryStack'
>;
type PrimaryNavigatorRouteProps = RouteProp<RootStackParamList, 'PrimaryStack'>;

export const PrimaryNavigator = () => {
  const navigation = useNavigation<PrimaryNavigatorProps>();
  const route = useRoute<PrimaryNavigatorRouteProps>();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 76,
          paddingBottom: 16,
          paddingTop: 16,
          backgroundColor: palette['white'],
        },
        tabBarActiveTintColor: palette['primary'],
        tabBarInactiveTintColor: palette['gray-400'],
        headerShown: false,
      }}
      initialRouteName="PrimaryPlantListScreen">
      <Tab.Screen
        name="PrimaryPlantListScreen"
        component={PrimaryPlantListScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => {
            return <Icon color={color} size={28} name="list" />;
          },
        }}
      />
      <Tab.Screen
        name="PrimaryCommunityScreen"
        component={PrimaryCommunityScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => {
            return <Icon color={color} size={28} name="note-alt" />;
          },
        }}
      />
      <Tab.Screen
        name="PrimaryMyPageScreen"
        component={PrimaryMyPageScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => {
            return <Icon color={color} size={28} name="person-outline" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
