import { Stack } from '@mobily/stacks';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FormProvider } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

import { RootStackParamList } from '../root.navigator';

import { useSignUpForm } from './hooks';
import {
  SignUpAddressModule,
  SignUpBackModule,
  SignUpConfirmButtonModule,
  SignUpCopyModule,
  SignUpIdInputModule,
  SignUpNameInputModule,
  SignUpNextModule,
  SignUpProgressBarModule,
  SignUpPwCheckInputModule,
  SignUpPwInputModule,
  SignUpTiiunModule,
  SignUpTurfModule,
} from './modules';
import { $signUpState } from './signup.state';

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
  const { screenStep } = useRecoilValue($signUpState);
  const navigation = useNavigation<SignUpScreenNavigationProps>();
  const route = useRoute<SignUpScreenNavigationRouteProps>();
  const methods = useSignUpForm();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <FormProvider {...methods}>
        <BasicLayout>
          <SignUpBackModule />
          <SignUpProgressBarModule />
          <SignUpCopyModule />
          <Stack space={24}>
            {screenStep === 'NAME_INPUT' && <SignUpNameInputModule />}
            {screenStep === 'ID_INPUT' && <SignUpIdInputModule />}
            {screenStep === 'PW_INPUT' && <SignUpPwInputModule />}
            {screenStep === 'PW_INPUT' && <SignUpPwCheckInputModule />}
            {screenStep === 'TIIUN_INPUT' && <SignUpTiiunModule />}
            {screenStep === 'TURF_INPUT' && <SignUpTurfModule />}
            {screenStep === 'ADDRESS_INPUT' && <SignUpAddressModule />}
          </Stack>
          {screenStep === 'ADDRESS_INPUT' ? (
            <SignUpConfirmButtonModule />
          ) : (
            <SignUpNextModule />
          )}
        </BasicLayout>
      </FormProvider>
    </ScrollView>
  );
};
