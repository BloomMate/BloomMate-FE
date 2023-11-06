import { memo } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';

import { LoginForm } from '../../hooks';

import { usePostLoginMutation } from './hooks';

import { Button } from '@/atoms';
import { useMutationIndicator } from '@/providers';

type LoginFooterModuleProps = {};

export const LoginFooterModule = memo<LoginFooterModuleProps>(() => {
  const { formState, handleSubmit } = useFormContext<LoginForm>();
  const { isDirty, isValid } = formState;
  const { mutateAsync, isLoading } = usePostLoginMutation();

  useMutationIndicator([isLoading]);

  const isLoginPossible = isDirty && isValid;
  const userLogin: SubmitHandler<LoginForm> = async ({
    ID: id,
    PassWord: pw,
  }) => {
    await mutateAsync({ id, pw });

    console.log('성공!');
  };

  const handlePressLoginButton = () => {
    handleSubmit(userLogin)();
  };

  return (
    <Button
      onPress={handlePressLoginButton}
      disabled={!isLoginPossible}
      mode="contained">
      로그인
    </Button>
  );
});
