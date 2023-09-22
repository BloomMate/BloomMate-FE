import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Alert } from 'react-native';

import { SignUpForm } from '../../hooks';
import { SignUpScreenNavigationProps } from '../../signup.screen';

import { useSendSignupMutation } from './hooks';

import { Button } from '@/atoms';

type SignUpConfirmButtonModuleProps = {};

export const SignUpConfirmButtonModule = memo<SignUpConfirmButtonModuleProps>(
  () => {
    const navigation = useNavigation<SignUpScreenNavigationProps>();

    // 아래의 로직을 custom hook 으로 분리하면 더 깔끔하겠죠?
    const { formState, handleSubmit } = useFormContext<SignUpForm>();
    const { isDirty, isValid, errors } = formState;

    const isSignUpPossible = isDirty && isValid;
    const { mutateAsync } = useSendSignupMutation();
    // SubmitHandler + formType 을 넣어줬기때문에 인수의 타입이 자동으로 잡히는 모습입니다.
    const showAlert: SubmitHandler<SignUpForm> = ({ Name }) => {
      Alert.alert('회원가입에 성공하였습니다.', `${Name}님 환영합니다!`);
    };

    const addNewPerson: SubmitHandler<SignUpForm> = async ({
      ID: id,
      PassWord: pw,
      Name: name,
    }) => {
      await mutateAsync({ id, pw, name });
    };

    const handlePressSignUpButton = () => {
      console.log('눌림');
      handleSubmit(showAlert)();
      handleSubmit(addNewPerson)();
    };

    return (
      <Button
        mode="contained"
        onPress={handlePressSignUpButton}
        disabled={!isSignUpPossible}>
        회원가입
      </Button>
    );
  },
);
