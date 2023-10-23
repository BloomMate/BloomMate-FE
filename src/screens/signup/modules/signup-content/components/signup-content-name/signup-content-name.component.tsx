import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { SignUpForm } from '../../../../hooks';
import { ESignUpStep } from '../../../../signup.state';

import { TextInput } from '@/atoms';

type SignUpContentNameComponentProps = { screenStep: ESignUpStep };

export const SignUpContentNameComponent = memo<SignUpContentNameComponentProps>(
  ({ screenStep }) => {
    const { control } = useFormContext<SignUpForm>();
    const {
      field: { onChange, value },
      fieldState,
    } = useController({ control, name: 'Name' });

    return (
      screenStep === 'NAME_INPUT' && (
        <TextInput
          placeholder="이름을 입력하세요."
          label="이름"
          value={value}
          onChangeText={onChange}
          error={!isUndefined(fieldState.error)}
          errorMsg={fieldState.error?.message as string}
        />
      )
    );
  },
);
