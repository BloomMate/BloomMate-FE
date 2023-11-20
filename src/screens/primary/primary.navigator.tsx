import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { PrimaryCommunityScreen } from './primary-community';
import { PrimaryMyPageScreen } from './primary-my-page';
import { PrimaryPlantListScreen } from './primary-plant-list';

import {
  Icon,
  getFontFamilyByFontWeight,
  getTextAlignStyle,
  getVariantsStyle,
} from '@/atoms';
import { palette } from '@/utils';

export type PrimaryNavigatorParamLists = {
  PrimaryPlantListScreen: undefined;
  PrimaryCommunityScreen: undefined;
  PrimaryMyPageScreen: undefined;
  PrimaryArticleWebviewScreen: { article_content: string };
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
  const fontWeight = 'Medium';
  const variants = 'bodySmall';
  const textAlignment = 'center';

  const fontFamily = getFontFamilyByFontWeight(fontWeight);
  const variantsStyle = getVariantsStyle(variants);

  const textAlignmentStyle = getTextAlignStyle(textAlignment);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          ...fontFamily,
          ...variantsStyle,

          ...textAlignmentStyle,
        },
        tabBarStyle: {
          height: 76,
          paddingBottom: 12,
          paddingTop: 12,
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
          tabBarLabel: '식물리스트',
          tabBarIcon: ({ color }) => {
            return <Icon color={color} size={28} name="list" />;
          },
        }}
      />
      <Tab.Screen
        name="PrimaryCommunityScreen"
        component={PrimaryCommunityScreen}
        options={{
          tabBarLabel: '커뮤니티',
          tabBarIcon: ({ color }) => {
            return <Icon color={color} size={28} name="note-alt" />;
          },
        }}
      />
      <Tab.Screen
        name="PrimaryMyPageScreen"
        component={PrimaryMyPageScreen}
        options={{
          tabBarLabel: '마이페이지',
          tabBarIcon: ({ color }) => {
            return <Icon color={color} size={28} name="person-outline" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
