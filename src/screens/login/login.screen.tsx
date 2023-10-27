import { Row, Rows, Stack } from '@mobily/stacks';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FormProvider } from 'react-hook-form';

import { RootStackParamList } from '../root.navigator';

import { useLoginForm } from './hooks';
import {
  LoginConfirmButtonModule,
  WithSuspenseLoginIdInputModule,
  LoginPasswordInputModule,
  LoginHeaderModule,
} from './modules';

import { BasicLayout, ScrollView } from '@/layouts';

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
  const navigation = useNavigation<LoginScreenNavigationProps>();
  const route = useRoute<LoginScreenNavigationRouteProps>();
  const methods = useLoginForm();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <FormProvider {...methods}>
        <BasicLayout>
          <Rows>
            <Row height="fluid">
              <Stack space={32}>
                <LoginHeaderModule />
                <Stack space={20}>
                  <WithSuspenseLoginIdInputModule />
                  <LoginPasswordInputModule />
                </Stack>
              </Stack>
            </Row>
            <Row height="content">
              <Stack space={8}>
                <LoginConfirmButtonModule />
              </Stack>
            </Row>
          </Rows>
        </BasicLayout>
      </FormProvider>
    </ScrollView>
  );
};
