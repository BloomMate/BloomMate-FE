import { Row, Rows, Stack } from '@mobily/stacks';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FormProvider } from 'react-hook-form';

import { RootStackParamList } from '../root.navigator';

import { useLoginForm } from './hooks';
import {
  LoginConfirmButtonModule,
  LoginIdInputModule,
  LoginPasswordInputModule,
} from './modules';

import { Button } from '@/atoms';
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

  const handlePressSignUpButton = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <FormProvider {...methods}>
        <BasicLayout>
          <Rows paddingX={24} paddingY={20}>
            <Row height="fluid">
              <Stack space={24} paddingX={24} paddingY={32}>
                <LoginIdInputModule />
                <LoginPasswordInputModule />
              </Stack>
            </Row>
            <Row height="content">
              <Stack space={8}>
                <LoginConfirmButtonModule />
                <Button mode="outlined" onPress={handlePressSignUpButton}>
                  회원가입
                </Button>
              </Stack>
            </Row>
          </Rows>
        </BasicLayout>
      </FormProvider>
    </ScrollView>
  );
};
