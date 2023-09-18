import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FormProvider } from 'react-hook-form';
import { Button } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { useLoginForm } from './hooks';
import {
  LoginConfirmButtonModule,
  LoginIdInputModule,
  LoginPasswordInputModule,
} from './modules';

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
  const methods = useLoginForm();
  const handlePressSignUpButton = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <FormProvider {...methods}>
      <BasicLayout>
        <LoginIdInputModule />
        <LoginPasswordInputModule />
        <LoginConfirmButtonModule />
        <Button title="회원가입" onPress={handlePressSignUpButton} />
      </BasicLayout>
    </FormProvider>
  );
};
