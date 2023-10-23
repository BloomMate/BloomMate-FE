import { Stack } from '@mobily/stacks';
import { useFormContext, useController } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

import { SignUpForm } from '../../hooks';
import { $signUpState, ESignUpStep } from '../../signup.state';

import { SignUpContentInputComponent } from './components';

export const SignUpNameInputModule = () => {
  const { screenStep } = useRecoilValue($signUpState);

  const { control } = useFormContext<SignUpForm>();
  const { field, fieldState } = useController({
    control,
    name: ESignUpStep.NAME_INPUT,
  });

  return (
    <SignUpContentInputComponent
      screenStep={screenStep}
      field={field}
      fieldState={fieldState}
    />
  );
};

export const SignUpIdInputModule = () => {
  const { screenStep } = useRecoilValue($signUpState);

  const { control } = useFormContext<SignUpForm>();
  const { field, fieldState } = useController({
    control,
    name: ESignUpStep.ID_INPUT,
  });

  return (
    <SignUpContentInputComponent
      screenStep={screenStep}
      field={field}
      fieldState={fieldState}
    />
  );
};

export const SignUpPasswordInputModule = () => {
  const { screenStep } = useRecoilValue($signUpState);

  const { control } = useFormContext<SignUpForm>();
  const { field, fieldState } = useController({
    control,
    name: ESignUpStep.PW_INPUT,
  });
  const { field: pwCheckField, fieldState: pwCheckFieldState } = useController({
    control,
    name: ESignUpStep.PW_CHECK_INPUT,
  });

  return (
    <Stack space={24}>
      <SignUpContentInputComponent
        screenStep={screenStep}
        field={field}
        fieldState={fieldState}
      />
      <SignUpContentInputComponent
        screenStep={screenStep}
        field={pwCheckField}
        fieldState={pwCheckFieldState}
        isPasswordCheck
      />
    </Stack>
  );
};

export const SignUpTiiunInputModule = () => {
  const { screenStep } = useRecoilValue($signUpState);

  const { control } = useFormContext<SignUpForm>();
  const { field, fieldState } = useController({
    control,
    name: ESignUpStep.TIIUN_INPUT,
  });

  return (
    <SignUpContentInputComponent
      screenStep={screenStep}
      field={field}
      fieldState={fieldState}
    />
  );
};
