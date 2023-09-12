import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { Text } from '@/atoms';
import { BasicLayout } from '@/layouts';

type LoginScreenProps = {};

export type LoginScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;

export type LoginScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'LoginScreen'
>;

export const LoginScreen = ({}: LoginScreenProps) => {
  // TODO : Use MutationIndicator Properly
  // useMutationIndicator([true])

  const navigation = useNavigation<LoginScreenNavigationProps>();
  const route = useRoute<LoginScreenNavigationRouteProps>();

  const handlePressSignUpButton = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <BasicLayout>
      <Text color="gray-1000" fontSize="14" fontWeight="500">
        gray-1000 / 14 size / 500 weight
      </Text>
      <Text color="gray-800" fontSize="18" fontWeight="500">
        gray-800 / 18 size / 500 weight
      </Text>
      <Text color="error" fontSize="28" fontWeight="400">
        error / 28 size / 500 weight
      </Text>
      <Button title="회원가입" onPress={handlePressSignUpButton} />
    </BasicLayout>
  );
};
