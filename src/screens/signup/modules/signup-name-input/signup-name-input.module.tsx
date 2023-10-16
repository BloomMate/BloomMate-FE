import { Stack } from '@mobily/stacks';
import { isUndefined } from 'lodash';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { SignUpForm } from '../../hooks';
import { $signUpState } from '../../signup.state';

import { TextInput } from '@/atoms';

type SignUpNameInputModuleProps = {};

export const SignUpNameInputModule = memo<SignUpNameInputModuleProps>(() => {
  const { control } = useFormContext<SignUpForm>();
  const {
    field: { onChange, value },
    fieldState,
  } = useController({ control, name: 'Name' });
  const { screenStep } = useRecoilValue($signUpState);
  const setSignUpState = useSetRecoilState($signUpState);

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
