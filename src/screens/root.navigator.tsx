import {
  NavigationContainer,
  DefaultTheme,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LandingScreen } from './landing';
import { LoginScreen } from './login';
import { PlantAddScreen } from './plant-add';
import { PlantChatScreen } from './plant-chat';
import { PlantDetailScreen } from './plant-detail';
import { PlantDetailEditScreen } from './plant-detail-edit';
import { PlantDiagnosisIntroScreen } from './plant-diagnosis-intro';
import { PlantDiagnosisListScreen } from './plant-diagnosis-list';
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
  PlantDiagnosisResultScreen: { id: number };
  PlantDiagnosisListScreen: { id: number };
  PlantDiagnosisLogScreen: { diagnosis_id: number };
  UserInfoScreen: undefined;
  PrimaryStack: NavigatorScreenParams<PrimaryNavigatorParamLists>;
  PlantAddScreen: undefined;
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
        <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} />
        <Stack.Screen name="PrimaryStack" component={PrimaryNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
