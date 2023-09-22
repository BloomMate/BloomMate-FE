import { Stack } from '@mobily/stacks';
import isUndefined from 'lodash/isUndefined';
import { memo, useEffect } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { SignUpForm } from '../../hooks';

import { TextInput } from '@/atoms';

type SignUpPwCheckInputModuleProps = {};

export const SignUpPwCheckInputModule = memo<SignUpPwCheckInputModuleProps>(
  () => {
    const { control, watch } = useFormContext<SignUpForm>();
    const {
      field: { onChange, value },
      fieldState,
    } = useController({ control, name: 'PassWordCheck' });

    const passwordValue = watch('PassWord');
    const isDisablePasswordCheckInput = !passwordValue;

    useEffect(() => {
      if (isDisablePasswordCheckInput) {
        onChange('');
      }
    }, [isDisablePasswordCheckInput]);

    return (
      <Stack space={4}>
        <TextInput
          label="비밀번호 확인"
          placeholder="비밀번호를 한번 더 입력해주세요."
          value={value}
          onChangeText={onChange}
          secureTextEntry={true}
          editable={!isDisablePasswordCheckInput}
          error={!isUndefined(fieldState.error)}
          errorMsg={fieldState.error?.message as string}
        />
      </Stack>
    );
  },
);
