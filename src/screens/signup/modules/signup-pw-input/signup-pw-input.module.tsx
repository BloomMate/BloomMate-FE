import { Stack } from '@mobily/stacks';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { SignUpForm } from '../../hooks';

import { TextInput } from '@/atoms';

type SignUpPwInputModuleProps = {};

export const SignUpPwInputModule = memo<SignUpPwInputModuleProps>(() => {
  const { control } = useFormContext<SignUpForm>();
  const {
    field: { onChange, value },
    fieldState,
  } = useController({ control, name: 'PassWord' });

  return (
    <Stack space={4}>
      <TextInput
        label="비밀번호"
        placeholder="비밀번호를 입력하세요. (8자 이상 20자 이하)"
        value={value}
        onChangeText={onChange}
        secureTextEntry={true}
        error={!isUndefined(fieldState.error)}
        errorMsg={fieldState.error?.message as string}
      />
    </Stack>
  );
});
