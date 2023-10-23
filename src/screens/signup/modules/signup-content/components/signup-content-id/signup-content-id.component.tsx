import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { SignUpForm } from '../../../../hooks';
import { ESignUpStep } from '../../../../signup.state';

import { TextInput } from '@/atoms';

type SignUpContentIdComponentProps = { screenStep: ESignUpStep };

export const SignUpContentIdComponent = memo<SignUpContentIdComponentProps>(
  ({ screenStep }) => {
    const { control } = useFormContext<SignUpForm>();
    const {
      field: { onChange, value },
      fieldState,
    } = useController({ control, name: 'ID' });

    return (
      screenStep === 'ID_INPUT' && (
        <TextInput
          placeholder="아이디를 입력하세요."
          label="아이디"
          value={value}
          onChangeText={onChange}
          error={!isUndefined(fieldState.error)}
          errorMsg={fieldState.error?.message as string}
        />
      )
    );
  },
);
