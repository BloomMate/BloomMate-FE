import {
  NavigationContainer,
  DefaultTheme,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AboutBloomMateScreen } from './about-bloom-mate';
import { ArticleWebviewScreen } from './article-webview';
import { CommunityQnaDetailScreen } from './community-qna-detail';
import { CommunityQnaPostScreen } from './community-qna-post';
import { LandingScreen } from './landing';
import { LoginScreen } from './login';
import { PlantAddScreen } from './plant-add';
import { PlantAnimationScreen } from './plant-animation';
import { PlantChatScreen } from './plant-chat';
import { PlantDetailScreen } from './plant-detail';
import { PlantDetailEditScreen } from './plant-detail-edit';
import { PlantDiagnosisIntroScreen } from './plant-diagnosis-intro';
import { PlantDiagnosisListScreen } from './plant-diagnosis-list';
import { PlantDiagnosisLogScreen } from './plant-diagnosis-log';
import { PlantDiagnosisResultScreen } from './plant-diagnosis-result';
import { PrimaryNavigator, PrimaryNavigatorParamLists } from './primary';
import { SignUpScreen } from './signup';
import { UserInfoScreen } from './user-info';

import { LoadingPage } from '@/layouts';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  LandingScreen: undefined;
  PlantChatScreen: { id: number };
  PlantDetailScreen: { id: number };
  PlantDetailEditScreen: { id: number };
  PlantDiagnosisIntroScreen: { id: number };
  PlantDiagnosisResultScreen: {
    plant_id: number;
    id: number;
  };
  PlantDiagnosisListScreen: { id: number };
  PlantAnimationScreen: {
    type: 'plant-add' | 'harvest' | 'plant-dead';
  };
  PlantDiagnosisLogScreen: { diagnosis_id: number };
  UserInfoScreen: undefined;

  PrimaryStack: NavigatorScreenParams<PrimaryNavigatorParamLists>;
  PlantAddScreen: undefined;
  ArticleWebview: { article_content: string };
  CommunityQnaDetailScreen: { id: number };
  CommunityQnaPostScreen: undefined;
  AboutBloomMateScreen: undefined;
};

type RootNavigatorProps = {};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = ({}: RootNavigatorProps) => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: 'white' },
      }}
      fallback={<LoadingPage />}>
      <Stack.Navigator
        initialRouteName="LandingScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="PlantChatScreen" component={PlantChatScreen} />
        <Stack.Screen name="PlantDetailScreen" component={PlantDetailScreen} />
        <Stack.Screen
          name="PlantDetailEditScreen"
          component={PlantDetailEditScreen}
        />
        <Stack.Screen
          name="PlantDiagnosisIntroScreen"
          component={PlantDiagnosisIntroScreen}
        />
        <Stack.Screen name="PlantAddScreen" component={PlantAddScreen} />
        <Stack.Screen
          name="PlantDiagnosisResultScreen"
          component={PlantDiagnosisResultScreen}
        />
        <Stack.Screen
          name="PlantDiagnosisListScreen"
          component={PlantDiagnosisListScreen}
        />
        <Stack.Screen
          name="PlantDiagnosisLogScreen"
          component={PlantDiagnosisLogScreen}
        />
        <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} />
        <Stack.Screen name="PrimaryStack" component={PrimaryNavigator} />
        <Stack.Screen name="ArticleWebview" component={ArticleWebviewScreen} />
        <Stack.Screen
          name="CommunityQnaDetailScreen"
          component={CommunityQnaDetailScreen}
        />
        <Stack.Screen
          name="CommunityQnaPostScreen"
          component={CommunityQnaPostScreen}
        />
        <Stack.Screen
          name="PlantAnimationScreen"
          component={PlantAnimationScreen}
        />
        <Stack.Screen
          name="AboutBloomMateScreen"
          component={AboutBloomMateScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
