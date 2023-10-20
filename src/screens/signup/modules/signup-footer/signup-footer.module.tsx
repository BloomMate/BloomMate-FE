import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import {
  $currentScreenStepIndexSelector,
  $signUpState,
  signUpSteps,
} from '../../signup.state';

import { Button } from '@/atoms';

type SignUpFooterModuleProps = {};

export const SignUpFooterModule = memo<SignUpFooterModuleProps>(() => {
  const setSignUpState = useSetRecoilState($signUpState);

  const currentScreenStepIndex = useRecoilValue(
    $currentScreenStepIndexSelector,
  );

  const isLastStep = currentScreenStepIndex === signUpSteps.length - 1;

  const copy = isLastStep ? '회원가입' : '다음';

  const handlePressButton = () => {
    setSignUpState({ screenStep: signUpSteps[currentScreenStepIndex + 1] });
  };

  return (
    <Box>
      <Button mode="contained" onPress={handlePressButton}>
        {copy}
      </Button>
    </Box>
  );
});
