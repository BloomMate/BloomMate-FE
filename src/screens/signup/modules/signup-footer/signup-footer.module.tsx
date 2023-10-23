import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { SignUpForm } from '../../hooks';
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

  const { formState, handleSubmit } = useFormContext<SignUpForm>();
  const { isDirty, isValid, errors, dirtyFields } = formState;
  const isSignUpPossible = isDirty && isValid;
  const isCurrentStepValid = () => {
    const fieldName = signUpSteps[currentScreenStepIndex];

    return !errors[fieldName] && dirtyFields[fieldName];
  };

  const isLastStep = currentScreenStepIndex === signUpSteps.length - 1;

  const copy = isLastStep ? '회원가입' : '다음';

  const handlePressButton = () => {
    setSignUpState({ screenStep: signUpSteps[currentScreenStepIndex + 1] });
  };

  return (
    <Box>
      <Button
        mode="contained"
        onPress={handlePressButton}
        disabled={!isCurrentStepValid()}>
        {copy}
      </Button>
    </Box>
  );
});
