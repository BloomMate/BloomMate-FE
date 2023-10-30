import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { useState } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRecoilValue } from 'recoil';

import { SignUpForm } from '../../hooks';
import { $signUpState, ESignUpStep } from '../../signup.state';

import {
  SignUpContentInputComponent,
  SignUpContentModalComponent,
} from './components';

import { Icon, Text } from '@/atoms';
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
  const { value } = field;

  return (
    <Stack align="center" space={32}>
      <SignUpContentInputComponent
        screenStep={screenStep}
        field={field}
        fieldState={fieldState}
      />
      <Image
        source={require('./const/garden.png')}
        style={{ width: 250, height: 250 }}
      />
    </Stack>
  );
};

export const SignUpAddressInputModule = () => {
  const [isModal, setModal] = useState(false);
  const { control } = useFormContext<SignUpForm>();
  const { field } = useController({
    control,
    name: ESignUpStep.ADDRESS_INPUT,
  });
  const { value } = field;
  //TODO: 사진 꽉 차게(aspectRatio, resizeMode), Stack으로 바꾸기

  return (
    <>
      <SignUpContentModalComponent isModal={isModal} setModal={setModal} />
      <Stack space={32}>
        <TouchableOpacity onPress={() => setModal(!isModal)}>
          <Box
            style={{
              borderColor: palette['gray-900'],
              borderWidth: 1,
              borderRadius: 8,
            }}>
            <Columns>
              <Column width={'fluid'}>
                <Box paddingY={10} flex="fluid" alignX="center" alignY="center">
                  {value ? (
                    <Text
                      fontWeight="Medium"
                      variants="labelLarge"
                      color="gray-900">
                      {value}
                    </Text>
                  ) : (
                    <Text
                      fontWeight="Medium"
                      variants="labelLarge"
                      color="gray-400">
                      주소 검색하기
                    </Text>
                  )}
                </Box>
              </Column>
              <Column width="content">
                <Box
                  style={{
                    backgroundColor: palette['teal-800'],
                    padding: 10,
                    borderTopRightRadius: 7,
                    borderBottomRightRadius: 7,
                  }}
                  flex="content">
                  <Icon name="search" size={24} color={palette['white']} />
                </Box>
              </Column>
            </Columns>
          </Box>
        </TouchableOpacity>

        {value && (
          <Image
            source={require('./const/SmartCottage.jpg')}
            style={{ aspectRatio: '311/210' }}
            resizeMode="cover"
          />
        )}
      </Stack>
    </>
  );
};
