import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Alert } from 'react-native';

import { LoginForm } from '../../hooks';
import { LoginScreenNavigationProps } from '../../login.screen';

import { Button } from '@/atoms';

type LoginConfirmButtonModuleProps = {};

export const LoginConfirmButtonModule = memo<LoginConfirmButtonModuleProps>(
  () => {
    const navigation = useNavigation<LoginScreenNavigationProps>();

    // 아래의 로직을 custom hook 으로 분리하면 더 깔끔하겠죠?
    const { formState, handleSubmit } = useFormContext<LoginForm>();
    const { isDirty, isValid, errors } = formState;

    const isLoginPossible = isDirty && isValid;

    // SubmitHandler + formType 을 넣어줬기때문에 인수의 타입이 자동으로 잡히는 모습입니다.
    const showAlert: SubmitHandler<LoginForm> = ({ ID }) => {
      Alert.alert('로그인에 성공하였습니다.', `${ID}님 환영합니다!`);
    };

    const handlePressLoginButton = () => {
      handleSubmit(showAlert)();
    };

    return (
      <Button
        onPress={handlePressLoginButton}
        disabled={!isLoginPossible}
        mode="contained">
        로그인
      </Button>
    );
  },
);
