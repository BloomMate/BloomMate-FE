import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { useRecoilState } from 'recoil';

import { $signUpState, signUpSteps } from '../../signup.state';

import { Button } from '@/atoms';

type SignUpFooterModuleProps = {};

export const SignUpFooterModule = memo<SignUpFooterModuleProps>(() => {
  const [{ screenStep }, setSignUpState] = useRecoilState($signUpState);
  const currentScreenStepIndex = signUpSteps.findIndex(screenStep);

  const copy =
    currentScreenStepIndex === signUpSteps.length() - 1 ? '회원가입' : '다음';

  return (
    <Box>
      <Button mode="contained">회원가입</Button>
    </Box>
  );
});
