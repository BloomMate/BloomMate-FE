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
} from './modules';

import { Button } from '@/atoms';
import { BasicLayout, Dialog, ScrollView, SingleButtonProps } from '@/layouts';

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
  const buttons: SingleButtonProps[] = [
    {
      label: '버튼 1',
      mode: 'contained',
      disabled: false,
    },
    {
      label: '버튼 2',
      mode: 'outlined',
      disabled: true,
    },
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <FormProvider {...methods}>
        <BasicLayout>
          {/* <CTASection direction="row" buttons={buttons} /> */}
          <Dialog
            title="title"
            content="content"
            dialogVisible={false}
            okayButton={{ label: 'ok', mode: 'contained', onPress: () => {} }}
            cancelButton={{
              label: 'cancel',
              mode: 'outlined',
              onPress: () => {},
            }}
          />
          <Rows paddingX={24} paddingY={20}>
            <Row height="fluid">
              <Stack space={24} paddingX={24} paddingY={32}>
                <WithSuspenseLoginIdInputModule />
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
