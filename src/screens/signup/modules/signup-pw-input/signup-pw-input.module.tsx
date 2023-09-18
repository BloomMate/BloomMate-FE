import { Stack } from '@mobily/stacks';
import { memo, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { TextInput } from 'react-native';
import { useSetRecoilState } from 'recoil';

import { $passWordState, SignUpForm } from '../../hooks';

import { Text } from '@/atoms';

type SignUpPwInputModuleProps = {};

export const SignUpPwInputModule = memo<SignUpPwInputModuleProps>(() => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const { control } = useFormContext<SignUpForm>();
  const {
    field: { onChange, value },
    fieldState,
  } = useController({ control, name: 'PassWord' });

  const setPassWordState = useSetRecoilState($passWordState);

  const handleChangeTextInput = (newPassword: string) => {
    onChange(newPassword);
    setPassWordState({ passWord: newPassword });
  };

  return (
    <Stack space={4}>
      <Text fontSize="14" fontWeight="600" color="green">
        비밀번호
      </Text>
      <TextInput
        placeholder="비밀번호를 입력하세요. (8자 이상 20자 이하)"
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={handleChangeTextInput}
        placeholderTextColor="#AAAAAA"
        secureTextEntry={true}
      />
      <Text fontSize="8" fontWeight="400" color="error">
        {fieldState.error?.message}
      </Text>
    </Stack>
  );
});
