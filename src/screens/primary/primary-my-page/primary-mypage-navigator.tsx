// PrimaryMyPageScreen.tsx
import { createStackNavigator } from '@react-navigation/stack';

import { PrimaryMyPageInformationScreen } from './screen/mypage-information';
import { PrimaryMyPageScreen } from './screen/primary-mypage';
// 실제 경로에 따라 수정해주세요.

const Stack = createStackNavigator();
type PrimaryMypageNavigatorProps = {};

export const PrimaryMypageNavigator = ({}: PrimaryMypageNavigatorProps) => {
  return (
    <Stack.Navigator
      initialRouteName="MyPage"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyPage" component={PrimaryMyPageScreen} />
      <Stack.Screen
        name="PrimaryMyPageInformationScreen"
        component={PrimaryMyPageInformationScreen}
      />
    </Stack.Navigator>
  );
};
