import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { SignUpForm } from '../../hooks';
import { SignUpScreenNavigationProps } from '../../signup.screen';
import {
  $currentScreenStepIndexSelector,
  $signUpState,
  ESignUpStep,
  signUpSteps,
} from '../../signup.state';

import { usePostSignupMutation } from './hooks';

import { Button } from '@/atoms';
import { useMutationIndicator } from '@/providers';

type SignUpFooterModuleProps = {};

export const SignUpFooterModule = memo<SignUpFooterModuleProps>(() => {
  const navigation = useNavigation<SignUpScreenNavigationProps>();
  const setSignUpState = useSetRecoilState($signUpState);

  const currentScreenStepIndex = useRecoilValue(
    $currentScreenStepIndexSelector,
  );
  const { mutateAsync, isLoading } = usePostSignupMutation();

  useMutationIndicator([isLoading]);

  const { formState, handleSubmit } = useFormContext<SignUpForm>();

  const { isDirty, isValid, errors, dirtyFields } = formState;

  const addNewPerson: SubmitHandler<SignUpForm> = async ({
    ID_INPUT: id,
    PW_INPUT: pw,
    NAME_INPUT: name,
    TIIUN_INPUT: tiiun,
    TURF_INPUT: gardensize,
    ADDRESS_INPUT: address,
  }) => {
    await mutateAsync({ id, pw, name, tiiun, gardensize, address });
    navigation.replace('LoginScreen');
  };

  const isSignUpPossible = isDirty && isValid;
  const isCurrentStepValid = () => {
    const currentFieldName = signUpSteps[currentScreenStepIndex];

    if (currentScreenStepIndex === 2) {
      const passwordCheckSame = errors[ESignUpStep.PW_CHECK_INPUT];
      const passwordCheckDirty = dirtyFields[ESignUpStep.PW_CHECK_INPUT];

      return (
        !passwordCheckSame &&
        !errors[currentFieldName] &&
        dirtyFields[currentFieldName] &&
        passwordCheckDirty
      );
    }

    return !errors[currentFieldName] && dirtyFields[currentFieldName];
  };

  const isLastStep = currentScreenStepIndex === signUpSteps.length - 1;

  const copy = isLastStep ? '회원가입' : '다음';

  const handlePressButton = () => {
    if (isLastStep) {
      handleSubmit(addNewPerson)();
    } else {
      setSignUpState({ screenStep: signUpSteps[currentScreenStepIndex + 1] });
    }
  };

  return (
    <Button
      mode="contained"
      onPress={handlePressButton}
      disabled={isLastStep ? !isSignUpPossible : !isCurrentStepValid()}>
      {copy}
    </Button>
  );
});
