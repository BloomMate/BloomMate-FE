import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { useRecoilState } from 'recoil';

import { $signUpState, signUpSteps } from '../../signup.state';

import { Button } from '@/atoms';

type SignUpFooterModuleProps = {};

export const SignUpFooterModule = memo<SignUpFooterModuleProps>(() => {
  const [{ screenStep }, setSignUpState] = useRecoilState($signUpState);
  const currentScreenStepIndex = signUpSteps.indexOf(screenStep);

  const isLastStep = currentScreenStepIndex === signUpSteps.length - 1;

  const copy = isLastStep ? '회원가입' : '다음';

  return (
    <Box>
      <Button mode="contained">{copy}</Button>
    </Box>
  );
});
