import { Stack } from '@mobily/stacks';
import { memo, useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { useRecoilValue } from 'recoil';

import { $passWordState } from '../../hooks';

import { Text } from '@/atoms';

type SignUpTestModuleProps = {};

export const SignUpTestModule = memo<SignUpTestModuleProps>(() => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [input, setInput] = useState('');

  const { passWord } = useRecoilValue($passWordState);

  const isDisablePasswordCheckInput = !passWord;
  const isPasswordSame = passWord === input;

  useEffect(() => {
    if (isDisablePasswordCheckInput) {
      setInput('');
    }
  }, [isDisablePasswordCheckInput]);

  return (
    <Stack space={4}>
      <Text fontSize="14" fontWeight="600" color="green">
        비밀번호 확인하기
      </Text>
      <TextInput
        placeholder="비밀번호를 한번 더 입력해주세요."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={text => setInput(text)}
        placeholderTextColor="#AAAAAA"
        secureTextEntry={true}
        editable={!isDisablePasswordCheckInput}
        style={{ borderColor: 'green' }}
      />
    </Stack>
  );
});
