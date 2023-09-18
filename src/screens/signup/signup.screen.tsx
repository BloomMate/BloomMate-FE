import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FormProvider } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { RootStackParamList } from '../root.navigator';

import { useSignUpForm } from './hooks';
import {
  SignUpConfirmButtonModule,
  SignUpIdInputModule,
  SignUpNameInputModule,
  SignUpPwCheckInputModule,
  SignUpPwInputModule,
} from './modules';

import { Text } from '@/atoms';
import { BasicLayout } from '@/layouts';

type SignUpScreenProps = {};

export type SignUpScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'SignUpScreen'
>;

export type SignUpScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'SignUpScreen'
>;
export const SignUpScreen = ({}: SignUpScreenProps) => {
  const navigation = useNavigation<SignUpScreenNavigationProps>();
  const route = useRoute<SignUpScreenNavigationRouteProps>();
  const methods = useSignUpForm();

  return (
    <FormProvider {...methods}>
      <BasicLayout>
        <KeyboardAwareScrollView>
          <Text fontSize="24" fontWeight="600" color="green">
            회원가입
          </Text>
          <SignUpNameInputModule />
          <SignUpIdInputModule />
          <SignUpPwInputModule />
          <SignUpPwCheckInputModule />
          <SignUpConfirmButtonModule />
        </KeyboardAwareScrollView>
      </BasicLayout>
    </FormProvider>
  );
};
