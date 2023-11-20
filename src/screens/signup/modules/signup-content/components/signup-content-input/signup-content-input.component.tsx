import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';

import { SignUpForm } from '../../../../hooks';
import { ESignUpStep } from '../../../../signup.state';

import { mapLabelByScreenStep } from './signup-content-input.const';

import { TextInput } from '@/atoms';

type SignUpContentInputComponentProps = {
  screenStep: ESignUpStep;
  field:
    | ControllerRenderProps<SignUpForm, ESignUpStep>
    | ControllerRenderProps<SignUpForm, ESignUpStep.PW_CHECK_INPUT>;
  fieldState: ControllerFieldState;
  isPasswordCheck?: boolean;
};

export const SignUpContentInputComponent =
  memo<SignUpContentInputComponentProps>(
    ({ screenStep, field, fieldState, isPasswordCheck = false }) => {
      const { onChange, value } = field;

      const { placeholder, label } = isPasswordCheck
        ? { placeholder: '비밀번호를 확인해주세요', label: '비밀번호 확인' }
        : mapLabelByScreenStep[screenStep] || {};

      return (
        <TextInput
          placeholder={placeholder}
          label={label}
          value={value as string}
          onChangeText={onChange}
          error={!isUndefined(fieldState.error)}
          errorMsg={fieldState.error?.message as string}
          autoCapitalize="none"
          secureTextEntry={isPasswordCheck}
        />
      );
    },
  );
