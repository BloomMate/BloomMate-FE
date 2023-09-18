import { Stack } from '@mobily/stacks';
import { memo, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { TextInput } from 'react-native';

import { LoginForm } from '../../hooks';

import { Text } from '@/atoms';

type LoginIdInputModuleProps = {};

export const LoginIdInputModule = memo<LoginIdInputModuleProps>(() => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const { control } = useFormContext<LoginForm>();
  const {
    field: { onChange, value },
    fieldState,
  } = useController({ control, name: 'ID' });

  return (
    <Stack space={4}>
      <TextInput
        placeholder="아이디를 입력하세요."
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={onChange}
        placeholderTextColor="#AAAAAA"
      />
      <Text fontSize="8" fontWeight="400" color="error">
        {fieldState.error?.message}
      </Text>
    </Stack>
  );
});
