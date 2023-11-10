import {
  NavigationContainer,
  DefaultTheme,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LandingScreen } from './landing';
import { LoginScreen } from './login';
import { PlantChatScreen } from './plant-chat';
import { PlantDetailScreen } from './plant-detail';
import { PlantDiagnosisIntroScreen } from './plant-diagnosis-intro';
import { PlantDiagnosisListScreen } from './plant-diagnosis-list';
import { PlantDiagnosisResultScreen } from './plant-diagnosis-result';
import { PrimaryNavigator, PrimaryNavigatorParamLists } from './primary';
import { SignUpScreen } from './signup';
import { UserInfoScreen } from './user-info';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  LandingScreen: undefined;
  PlantChatScreen: { id: string };
  PlantDetailScreen: { id: string };
  PlantDiagnosisIntroScreen: { id: string };
  PlantDiagnosisResultScreen: { id: string; photo_url: string };
  PlantDiagnosisListScreen: { id: string };
  PlantDiagnosisLogScreen: { diagnosis_id: string };
  UserInfoScreen: undefined;
  PrimaryStack: NavigatorScreenParams<PrimaryNavigatorParamLists>;
};

type RootNavigatorProps = {};

const Stack = createStackNavigator<RootStackParamList>();

//TODO: 아래에서 튀어나오는 거 확인

export const RootNavigator = ({}: RootNavigatorProps) => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: 'white' },
      }}>
      <Stack.Navigator
        initialRouteName="LandingScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="PlantChatScreen" component={PlantChatScreen} />
        <Stack.Screen name="PlantDetailScreen" component={PlantDetailScreen} />

        <Stack.Screen
          name="PlantDiagnosisIntroScreen"
          component={PlantDiagnosisIntroScreen}
        />
        <Stack.Screen
          name="PlantDiagnosisResultScreen"
          component={PlantDiagnosisResultScreen}
        />
        <Stack.Screen
          name="PlantDiagnosisListScreen"
          component={PlantDiagnosisListScreen}
        />
        <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} />
        <Stack.Screen name="PrimaryStack" component={PrimaryNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
