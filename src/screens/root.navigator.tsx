import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from './login';

export type RootStackParamList = {
  LoginScreen: undefined;
};

type RootNavigatorProps = {};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = ({}: RootNavigatorProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
