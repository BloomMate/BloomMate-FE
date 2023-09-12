import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FormProvider } from 'react-hook-form';

import { RootStackParamList } from '../root.navigator';

import { useSignUpForm } from './hooks';
import {
  SignUpConfirmButtonModule,
  SignUpIdInputModule,
  SignUpNameInputModule,
  SignUpPwCheckInputModule,
  SignUpPwInputModule,
} from './modules';

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
        <SignUpNameInputModule />
        <SignUpIdInputModule />
        <SignUpPwInputModule />
        <SignUpPwCheckInputModule />
        <SignUpConfirmButtonModule />
      </BasicLayout>
    </FormProvider>
  );
};
