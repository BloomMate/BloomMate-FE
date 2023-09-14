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
      this.textInputRef.clear();
    }, [isDisablePasswordCheckInput]);
    return (
      <Stack space={4}>
        <TextInput
          placeholder="비밀번호를 한번 더 입력하세요."
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChange}
          placeholderTextColor="#AAAAAA"
          secureTextEntry={true}
          editable={!isDisablePasswordCheckInput}
          ref={ref => (this.textInputRef = ref)}
        />
        <Text fontSize="8" fontWeight="400" color="error">
          {fieldState.error?.message}
        </Text>
      </Stack>
    );
  },
);
