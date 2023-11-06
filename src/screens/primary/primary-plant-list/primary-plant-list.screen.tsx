import { useWindowDimensions } from '@mobily/stacks';
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

import { getVariantsStyle } from '@/atoms';
import { BasicLayout, ModalHeaderLayout } from '@/layouts';
import { palette } from '@/utils';

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
  const { width: deviceWidth } = useWindowDimensions();

  return (
    <BasicLayout backgroundColor="gray-100" tabBar>
      <ModalHeaderLayout
        left={{ type: 'string', title: '식물 리스트' }}
        onPressExit={() => navigation.goBack()}
      />
      <Tab.Navigator
        initialRouteName="PrimaryPlantCurrentList"
        screenOptions={{
          tabBarActiveTintColor: palette['primary'],
          tabBarInactiveTintColor: palette['gray-400'],
          tabBarLabelStyle: {
            fontFamily: 'GmarketSansTTFBold',
            ...getVariantsStyle('bodySmall'),
            marginBottom: 16,
          },
          tabBarIndicatorContainerStyle: {
            position: 'absolute',
            top: 32,
            height: 2,
            backgroundColor: palette['gray-400'],
          },
          tabBarIndicatorStyle: {
            height: 2,
            backgroundColor: palette['primary'],
          },
          tabBarContentContainerStyle: {},
          tabBarItemStyle: {
            flex: 1,
            paddingVertical: 0,
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarStyle: {
            elevation: 0,
            backgroundColor: palette['gray-100'],
            width: deviceWidth - 48,
            height: 32,
          },
          tabBarAllowFontScaling: false,
          swipeEnabled: false,
        }}>
        <Tab.Screen
          name="PrimaryPlantCurrentList"
          options={{ tabBarLabel: '성장중' }}
          component={PrimaryPlantCurrentListModule}
        />
        <Tab.Screen
          name="PrimaryPlantHarvestedList"
          options={{ tabBarLabel: '수확 완료' }}
          component={PrimaryPlantHarvestedListModule}
        />
      </Tab.Navigator>
    </BasicLayout>
  );
};
