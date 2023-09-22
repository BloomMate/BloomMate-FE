import { Box } from '@mobily/stacks';
import { useKeyboard } from '@react-native-community/hooks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Alert } from 'react-native';

import { SignUpForm } from '../../hooks';
import { SignUpScreenNavigationProps } from '../../signup.screen';

import { useSendSignupMutation } from './hooks';

import { Button } from '@/atoms';
import { useMutationIndicator } from '@/providers';

type SignUpConfirmButtonModuleProps = {};

export const SignUpConfirmButtonModule = memo<SignUpConfirmButtonModuleProps>(
  () => {
    const navigation = useNavigation<SignUpScreenNavigationProps>();

    const { keyboardShown } = useKeyboard();
    const { mutateAsync, isLoading } = useSendSignupMutation();

    useMutationIndicator([isLoading]);

    const { formState, handleSubmit } = useFormContext<SignUpForm>();
    const { isDirty, isValid, errors } = formState;
    const isSignUpPossible = isDirty && isValid;

    const addNewPerson: SubmitHandler<SignUpForm> = async ({
      ID: id,
      PassWord: pw,
      Name: name,
    }) => {
      await mutateAsync({ id, pw, name });
      Alert.alert('회원가입에 성공하였습니다.', `${name}님 환영합니다!`);
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
