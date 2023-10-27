import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { useState } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRecoilValue } from 'recoil';

import { SignUpForm } from '../../hooks';
import { $signUpState, ESignUpStep } from '../../signup.state';

import {
  SignUpContentInputComponent,
  SignUpContentModalComponent,
} from './components';

import { Icon, Modal } from '@/atoms';
import { palette } from '@/utils';

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
        isPasswordCheck
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
      <TouchableOpacity onPress={() => setModal(true)}>
        <Box style={{ borderColor: palette['gray-900'], borderWidth: 1 }}>
          <Columns>
            <Column width={'fluid'}>
              <Box
                style={{ backgroundColor: palette['white'] }}
                flex="fluid"></Box>
            </Column>
            <Column width="content">
              <Box
                style={{
                  backgroundColor: palette['teal-800'],
                  padding: 10,
                  width: 44,
                  height: 44,
                }}
                flex="content">
                <Icon name="search" size={24} color={palette['white']} />
              </Box>
            </Column>
          </Columns>
        </Box>
      </TouchableOpacity>
    </>
  );
};
