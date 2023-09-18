import { Stack } from '@mobily/stacks';
import { memo, useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { TextInput } from 'react-native';

import { SignUpForm } from '../../hooks';

import { Text } from '@/atoms';

type SignUpPwCheckInputModuleProps = {};

export const SignUpPwCheckInputModule = memo<SignUpPwCheckInputModuleProps>(
  () => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
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
        <Text fontSize="14" fontWeight="600" color="green">
          비밀번호 확인
        </Text>
        <TextInput
          placeholder="비밀번호를 한번 더 입력해주세요."
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChange}
          placeholderTextColor="#AAAAAA"
          secureTextEntry={true}
          editable={!isDisablePasswordCheckInput}
          style={{ borderColor: 'green' }}
        />
        <Text fontSize="8" fontWeight="400" color="error">
          {fieldState.error?.message}
        </Text>
      </Stack>
    );
  },
);
