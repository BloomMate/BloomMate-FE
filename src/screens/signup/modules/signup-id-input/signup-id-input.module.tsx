import { Stack } from '@mobily/stacks';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { SignUpForm } from '../../hooks';

import { TextInput } from '@/atoms';

type SignUpIdInputModuleProps = {};

export const SignUpIdInputModule = memo<SignUpIdInputModuleProps>(() => {
  const { control } = useFormContext<SignUpForm>();
  const {
    field: { onChange, value },
    fieldState,
  } = useController({ control, name: 'ID' });

  return (
    <Stack space={4}>
      <TextInput
        placeholder="아이디를 입력하세요. (5자 이상 20자 이하)"
        label="아이디"
        value={value}
        onChangeText={onChange}
        error={!isUndefined(fieldState.error)}
        errorMsg={fieldState.error?.message as string}
      />
    </Stack>
  );
});
