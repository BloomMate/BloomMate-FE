import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';

import { LoginForm } from '../../hooks';
import { LoginScreenNavigationProps } from '../../login.screen';

import { usePostLoginMutation } from './hooks';

import { Button } from '@/atoms';
import { useMutationIndicator } from '@/providers';

type LoginFooterModuleProps = {};

export const LoginFooterModule = memo<LoginFooterModuleProps>(() => {
  const navigation = useNavigation<LoginScreenNavigationProps>();

  const { formState, handleSubmit } = useFormContext<LoginForm>();
  const { isDirty, isValid } = formState;
  const { mutateAsync, isLoading } = usePostLoginMutation();

  useMutationIndicator([isLoading]);

  const loginByIdAndPassWord: SubmitHandler<LoginForm> = async ({
    ID: id,
    PassWord: pw,
  }) => {
    await mutateAsync({ id, pw });

    navigation.replace('PrimaryStack', { screen: 'PrimaryPlantListScreen' });
  };

  const handlePressLoginButton = () => {
    handleSubmit(loginByIdAndPassWord)();
  };

  const isLoginPossible = isDirty && isValid;

  return (
    <Button
      onPress={handlePressLoginButton}
      disabled={!isLoginPossible}
      mode="contained">
      로그인
    </Button>
  );
});
