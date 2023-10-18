import { Box } from '@mobily/stacks';
import { useKeyboard } from '@react-native-community/hooks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';

import { SignUpForm } from '../../hooks';
import { SignUpScreenNavigationProps } from '../../signup.screen';

import { usePostSignupMutation } from './hooks';

import { Button } from '@/atoms';
import { useMutationIndicator } from '@/providers';

type SignUpConfirmButtonModuleProps = {};

export const SignUpConfirmButtonModule = memo<SignUpConfirmButtonModuleProps>(
  () => {
    const navigation = useNavigation<SignUpScreenNavigationProps>();

    const { keyboardShown } = useKeyboard();
    const { mutateAsync, isLoading } = usePostSignupMutation();

    useMutationIndicator([isLoading]);

    const { formState, handleSubmit } = useFormContext<SignUpForm>();
    const { isDirty, isValid, errors } = formState;
    const isSignUpPossible = isDirty && isValid;

    const addNewPerson: SubmitHandler<SignUpForm> = async ({
      ID: id,
      PassWord: pw,
      Name: name,
      TIIUN: tiiun,
      GardenSize: gardensize,
      Address: address,
    }) => {
      await mutateAsync({ id, pw, name, tiiun, gardensize, address });
      navigation.navigate('LoginScreen');
    };

    const handlePressSignUpButton = () => {
      handleSubmit(addNewPerson)();
    };

    return (
      <Box paddingBottom={keyboardShown ? 0 : 24}>
        <Button
          mode="contained"
          onPress={handlePressSignUpButton}
          disabled={!isSignUpPossible}>
          회원가입
        </Button>
      </Box>
    );
  },
);
