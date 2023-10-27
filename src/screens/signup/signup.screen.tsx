import { Row, Rows, Stack } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FormProvider } from 'react-hook-form';

import { RootStackParamList } from '../root.navigator';

import { useSignUpForm } from './hooks';
import {
  SignUpContentModule,
  SignUpFooterModule,
  SignUpHeaderModule,
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
  const methods = useSignUpForm();

  return (
    <FormProvider {...methods}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <BasicLayout>
          <Rows>
            <Row height="fluid">
              <Stack space={32}>
                <SignUpHeaderModule />
                <SignUpContentModule />
              </Stack>
            </Row>
            <Row height="content">
              <SignUpFooterModule />
            </Row>
          </Rows>
        </BasicLayout>
      </ScrollView>
    </FormProvider>
  );
};
