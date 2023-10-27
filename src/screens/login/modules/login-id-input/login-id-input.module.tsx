import { isUndefined } from 'lodash';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { LoginForm } from '../../hooks';

import { TextInput } from '@/atoms';
import { LoadingPage } from '@/layouts';
import { withSuspense } from '@/utils';

type LoginIdInputModuleProps = {};

const LoginIdInputModule = memo<LoginIdInputModuleProps>(() => {
  const { control } = useFormContext<LoginForm>();
  const {
    field: { onChange, value },
    fieldState,
  } = useController({ control, name: 'ID' });

  return (
    <TextInput
      value={value}
      label="아이디"
      placeholder="아이디를 입력해주세요"
      onChangeText={onChange}
      error={!isUndefined(fieldState.error)}
      errorMsg={fieldState.error?.message as string}
      autoCapitalize="none"
    />
  );
});

export const WithSuspenseLoginIdInputModule = withSuspense(
  LoginIdInputModule,
  LoadingPage,
);
