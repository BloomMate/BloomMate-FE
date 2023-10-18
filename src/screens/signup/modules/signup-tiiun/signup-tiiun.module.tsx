import { Stack } from '@mobily/stacks';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { SignUpForm } from '../../hooks';

import { TextInput } from '@/atoms';

type SignUpTiiunModuleProps = {};

export const SignUpTiiunModule = memo<SignUpTiiunModuleProps>(() => {
  const { control } = useFormContext<SignUpForm>();
  const {
    field: { onChange, value },
    fieldState,
  } = useController({ control, name: 'TIIUN' });

  return (
    <Stack space={4}>
      <TextInput
        placeholder="제품키를 입력해주세요"
        label="제품키"
        value={value}
        onChangeText={onChange}
        error={!isUndefined(fieldState.error)}
        errorMsg={fieldState.error?.message as string}
      />
    </Stack>
  );
});
