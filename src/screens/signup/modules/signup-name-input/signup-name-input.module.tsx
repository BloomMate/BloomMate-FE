import { Stack } from '@mobily/stacks';
import { isUndefined } from 'lodash';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { SignUpForm } from '../../hooks';

import { TextInput } from '@/atoms';

type SignUpNameInputModuleProps = {};

export const SignUpNameInputModule = memo<SignUpNameInputModuleProps>(() => {
  const { control } = useFormContext<SignUpForm>();
  const {
    field: { onChange, value },
    fieldState,
  } = useController({ control, name: 'Name' });

  return (
    <Stack space={4}>
      <TextInput
        placeholder="이름을 입력하세요. (실명을 사용해주세요)"
        label="이름"
        value={value}
        onChangeText={onChange}
        error={!isUndefined(fieldState.error)}
        errorMsg={fieldState.error?.message as string}
      />
    </Stack>
  );
});
