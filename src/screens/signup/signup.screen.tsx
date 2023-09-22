import { Stack } from '@mobily/stacks';
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

import { BasicLayout, ScrollView } from '@/layouts';

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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <FormProvider {...methods}>
        <BasicLayout>
          <Stack space={24}>
            <SignUpNameInputModule />
            <SignUpIdInputModule />
            <SignUpPwInputModule />
            <SignUpPwCheckInputModule />
          </Stack>
        </BasicLayout>
        <SignUpConfirmButtonModule />
      </FormProvider>
    </ScrollView>
  );
};
