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

import { PrimaryCommunityTabLabel } from './components';
import { MATERIAL_TOP_TAB_NAVIGATOR_SCREEN_OPTIONS } from './primary-community.const';
import {
  PrimaryCommunityArticleScreen,
  PrimaryCommunityQnaScreen,
} from './screen';

import { BasicLayout, ModalHeader } from '@/layouts';

export type PrimaryCommunityScreenNavigatorProp = CompositeNavigationProp<
  PrimaryNavigatorProps,
  BottomTabNavigationProp<PrimaryNavigatorParamLists, 'PrimaryCommunityScreen'>
>;

export type PrimaryCommunityScreenRouteProp = RouteProp<
  PrimaryNavigatorParamLists,
  'PrimaryCommunityScreen'
>;

export type PrimaryCommunityScreenTabParamList = {
  PrimaryCommunityArticle: undefined;
  PrimaryCommunityQna: undefined;
};

type PrimaryCommunityScreenProps = {};
const Tab = createMaterialTopTabNavigator<PrimaryCommunityScreenTabParamList>();

export const PrimaryCommunityScreen = ({}: PrimaryCommunityScreenProps) => {
  const navigation = useNavigation<PrimaryCommunityScreenNavigatorProp>();
  const handlePressExit = () => {
    navigation.goBack();
  };

  return (
    <BasicLayout backgroundColor="gray-100" tabBar>
      <ModalHeader
        left={{ type: 'string', title: '식집사 커뮤니티' }}
        onPressExit={handlePressExit}
      />
      <Tab.Navigator
        style={{ marginTop: 24 }}
        initialRouteName="PrimaryCommunityQna"
        screenOptions={MATERIAL_TOP_TAB_NAVIGATOR_SCREEN_OPTIONS}>
        <Tab.Screen
          name="PrimaryCommunityQna"
          options={() => ({
            tabBarLabel: props => (
              <PrimaryCommunityTabLabel {...props} label="질의응답" />
            ),
          })}
          component={PrimaryCommunityQnaScreen}
        />
        <Tab.Screen
          name="PrimaryCommunityArticle"
          options={() => ({
            tabBarLabel: props => (
              <PrimaryCommunityTabLabel {...props} label="전문가 아티클" />
            ),
          })}
          component={PrimaryCommunityArticleScreen}
        />
      </Tab.Navigator>
    </BasicLayout>
  );
};
