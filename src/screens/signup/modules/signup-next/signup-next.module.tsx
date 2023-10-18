import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { SignUpForm } from '../../hooks';
import { SignUpScreenNavigationProps } from '../../signup.screen';
import { $signUpState } from '../../signup.state';

import { Button } from '@/atoms';

type SignUpNextModuleProps = {};

export const SignUpNextModule = memo<SignUpNextModuleProps>(() => {
  const navigation = useNavigation<SignUpScreenNavigationProps>();
  const { formState, control } = useFormContext<SignUpForm>();
  const { dirtyFields, errors } = formState;
  const { screenStep } = useRecoilValue($signUpState);
  const setSignUpState = useSetRecoilState($signUpState);

  const isCurrentStepValid = () => {
    const fieldName = getFieldForScreenStep(screenStep);

    return !errors[fieldName] && dirtyFields[fieldName];
  };

  const getFieldForScreenStep = (step: string) => {
    switch (step) {
      case 'ADDRESS_INPUT':
        return 'Address';

      case 'NAME_INPUT':
        return 'Name';

      case 'ID_INPUT':
        return 'ID';

      case 'PW_INPUT':
        return 'PassWordCheck';

      case 'TIIUN_INPUT':
        return 'TIIUN';

      case 'TURF_INPUT':
        return 'GardenSize';

      default:
        return 'ID';
    }
  };

  const handlePressNextButton = () => {
    if (isCurrentStepValid()) {
      if (screenStep === 'ADDRESS_INPUT') {
        navigation.navigate('LoginScreen');
      } else {
        // Move to the next step
        setSignUpState(prev => {
          const nextStep =
            screenStep === 'NAME_INPUT'
              ? 'ID_INPUT'
              : screenStep === 'ID_INPUT'
              ? 'PW_INPUT'
              : screenStep === 'PW_INPUT'
              ? 'TIIUN_INPUT'
              : screenStep === 'TIIUN_INPUT'
              ? 'TURF_INPUT'
              : screenStep === 'TURF_INPUT'
              ? 'ADDRESS_INPUT'
              : 'ADDRESS_INPUT';

          return {
            ...prev,
            screenStep: nextStep,
          };
        });
      }
    }
  };

  return (
    <Button
      mode="contained"
      onPress={handlePressNextButton}
      disabled={!isCurrentStepValid()}>
      계속하기
    </Button>
  );
});
