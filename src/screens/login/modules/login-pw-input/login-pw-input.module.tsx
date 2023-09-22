import { Stack } from '@mobily/stacks';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { useFormContext, useController } from 'react-hook-form';

import { LoginForm } from '../../hooks';

import { TextInput } from '@/atoms';

export const LoginPasswordInputModule = memo(() => {
  const { control } = useFormContext<LoginForm>();
  const {
    field: { onChange, value },
    fieldState,
  } = useController({ control, name: 'PassWord' });

  return (
    <Stack space={4}>
      <TextInput
        placeholder="비밀번호를 입력하세요."
        value={value}
        secureTextEntry
        onChangeText={onChange}
        error={!isUndefined(fieldState.error?.message)}
        errorMsg={fieldState.error?.message as string}
      />
    </Stack>
  );
});
