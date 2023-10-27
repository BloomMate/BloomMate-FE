import { Stack } from '@mobily/stacks';
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
    <Stack space={4}>
      <TextInput
        value={value}
        label="id"
        placeholder="아이디를 입력해주세요"
        onChangeText={onChange}
        rightIconName="close"
        error={!isUndefined(fieldState.error)}
        errorMsg={fieldState.error?.message as string}
        autoCapitalize="none"
      />
    </Stack>
  );
});

export const WithSuspenseLoginIdInputModule = withSuspense(
  LoginIdInputModule,
  LoadingPage,
);
