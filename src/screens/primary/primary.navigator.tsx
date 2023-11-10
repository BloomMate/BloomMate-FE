import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { PrimaryCommunityScreen } from './primary-community';
import { PrimaryMyPageScreen } from './primary-my-page';
import { PrimaryPlantListScreen } from './primary-plant-list';

import { palette } from '@/utils';

export type PrimaryNavigatorParamLists = {
  PrimaryPlantListScreen: undefined;
  PrimaryCommunityScreen: undefined;
  PrimaryMyPageScreen: undefined;
  PrimaryMyPageInformationScreen: undefined;
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
          height: 80,
          paddingBottom: 20,
          backgroundColor: palette['white'],
        },
        tabBarActiveTintColor: palette['primary'],
        tabBarInactiveTintColor: palette['primary'],
        headerShown: false,
      }}
      initialRouteName="PrimaryPlantListScreen">
      <Tab.Screen
        name="PrimaryPlantListScreen"
        component={PrimaryPlantListScreen}
        options={{ tabBarLabel: '식물리스트' }}
      />
      <Tab.Screen
        name="PrimaryCommunityScreen"
        component={PrimaryCommunityScreen}
        options={{ tabBarLabel: '커뮤니티' }}
      />
      <Tab.Screen
        name="PrimaryMyPageScreen"
        component={PrimaryMyPageScreen}
        options={{ tabBarLabel: '마이페이지' }}
      />
    </Tab.Navigator>
  );
};
