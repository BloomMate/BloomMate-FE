import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { useState } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

import { SignUpForm } from '../../hooks';
import { $signUpState, ESignUpStep } from '../../signup.state';

import {
  SignUpContentInputComponent,
  SignUpContentModalComponent,
} from './components';

import { Icon, Modal } from '@/atoms';

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

export const SignUpAddressInputModule = () => {
  const { screenStep } = useRecoilValue($signUpState);
  const [isModal, setModal] = useState(false);
  const { control } = useFormContext<SignUpForm>();
  const { field, fieldState } = useController({
    control,
    name: ESignUpStep.ADDRESS_INPUT,
  });

  return (
    <>
      <Modal isVisible={isModal}>
        <SignUpContentModalComponent setModal={setModal} />
      </Modal>
      <Columns alignY={'center'}>
        <Column width="4/5">
          <SignUpContentInputComponent
            screenStep={screenStep}
            field={field}
            fieldState={fieldState}
          />
        </Column>
        <Column width="1/5" style={{ alignItems: 'center' }}>
          <Box
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              width: 50,
            }}>
            <Icon
              name="search"
              onPress={() => setModal(true)}
              size={36}
              color={'green'}
            />
          </Box>
        </Column>
      </Columns>
    </>
  );
};
