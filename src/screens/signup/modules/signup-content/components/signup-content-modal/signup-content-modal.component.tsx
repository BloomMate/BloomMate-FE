import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { SignUpForm } from '../../../../hooks/signup-form';
import { SignUpScreenNavigationProps } from '../../../../signup.screen';
import { ESignUpStep } from '../../../../signup.state';

type SignUpContentModalComponentProps = {};

export const SignUpContentModalComponent =
  memo<SignUpContentModalComponentProps>(() => {
    const { control } = useFormContext<SignUpForm>();
    const { field, fieldState } = useController({
      control,
      name: ESignUpStep.ADDRESS_INPUT,
    });
    const { onChange, value } = field;
    const navigation = useNavigation<SignUpScreenNavigationProps>();

    return <></>;
  });
