import { memo } from 'react';
import { useRecoilValue } from 'recoil';

import { $signUpState } from '../../signup.state';

import { Text } from '@/atoms';

type SignUpCopyModuleProps = {};

export const SignUpCopyModule = memo<SignUpCopyModuleProps>(() => {
  const { screenStep } = useRecoilValue($signUpState);
  const signUpCopy = [
    '이름을\n알려주세요',
    '아이디를\n설정해주세요',
    '비밀번호를\n설정해주세요',
    '틔운 제품키를\n알려주세요',
    '화단의 크기를\n알려주세요',
    '주소를\n입력하세요',
  ];

  return (
    <Text variants="titleLarge" fontWeight="Medium" color="black">
      {screenStep === 'NAME_INPUT' && signUpCopy[0]}
      {screenStep === 'ID_INPUT' && signUpCopy[1]}
      {screenStep === 'PW_INPUT' && signUpCopy[2]}
      {screenStep === 'TIIUN_INPUT' && signUpCopy[3]}
      {screenStep === 'TURF_INPUT' && signUpCopy[4]}
      {screenStep === 'ADDRESS_INPUT' && signUpCopy[5]}
    </Text>
  );
});
