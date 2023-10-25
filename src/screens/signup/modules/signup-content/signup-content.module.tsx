import { Stack } from '@mobily/stacks';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

import { SignUpForm } from '../../hooks';
import { $signUpState, ESignUpStep } from '../../signup.state';

import {
  SignUpContentInfoComponent,
  SignUpContentInputComponent,
  SignUpContentTogglebuttonComponent,
} from './components';
import {
  oneTextInputScreenStep,
  searchModalInputScreenStep,
  toggleButtonInputScreenStep,
  twoTextInputScreenStep,
} from './signup-content.const';
import { getInfoByScreenStep } from './signup-content.util';

type SignUpContentModuleProps = {};

export const SignUpContentModule = memo<SignUpContentModuleProps>(() => {
  const { screenStep } = useRecoilValue($signUpState);
  const info = getInfoByScreenStep(screenStep);
  const { control, watch } = useFormContext<SignUpForm>();
  const { field, fieldState } = useController({ control, name: screenStep });

  console.log(screenStep, watch());

  const { field: passwordCheckField, fieldState: passwordCheckFieldState } =
    useController({ control, name: ESignUpStep.PW_CHECK_INPUT });

  const { field: turfField, fieldState: turfFieldState } = useController({
    control,
    name: ESignUpStep.TURF_INPUT,
  });

  const renderInputs = () => {
    if (oneTextInputScreenStep.includes(screenStep)) {
      return (
        <SignUpContentInputComponent
          screenStep={screenStep}
          field={field}
          fieldState={fieldState}
        />
      );
    }
    if (twoTextInputScreenStep.includes(screenStep)) {
      return (
        <Stack space={24}>
          <SignUpContentInputComponent
            screenStep={screenStep}
            field={field}
            fieldState={fieldState}
          />
          <SignUpContentInputComponent
            screenStep={screenStep}
            field={passwordCheckField}
            fieldState={passwordCheckFieldState}
            isPasswordCheck
          />
        </Stack>
      );
    }
    if (searchModalInputScreenStep.includes(screenStep)) {
      return null;
    }
    if (toggleButtonInputScreenStep.includes(screenStep)) {
      return (
        <SignUpContentTogglebuttonComponent
          screenStep={screenStep}
          field={turfField}
          fieldState={turfFieldState}
        />
      );
    }

    return null;
  };

  return (
    <Stack space={24}>
      <SignUpContentInfoComponent info={info} />
      {renderInputs()}
    </Stack>
  );
});
