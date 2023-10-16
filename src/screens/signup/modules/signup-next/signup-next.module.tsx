import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { SignUpScreenNavigationProps } from '../../signup.screen';
import { $signUpState } from '../../signup.state';

import { Button } from '@/atoms';

type SignUpNextModuleProps = {};

export const SignUpNextModule = memo<SignUpNextModuleProps>(() => {
  const navigation = useNavigation<SignUpScreenNavigationProps>();
  const { screenStep } = useRecoilValue($signUpState);
  const setSignUpState = useSetRecoilState($signUpState);
  const handlePressNextButton = () => {
    if (screenStep === 'ADDRESS_INPUT') {
      navigation.navigate('LoginScreen');
    }
    if (screenStep === 'NAME_INPUT') {
      setSignUpState(prev => ({
        ...prev,
        screenStep: 'ID_INPUT',
      }));
    }
    if (screenStep === 'ID_INPUT') {
      setSignUpState(prev => ({
        ...prev,
        screenStep: 'PW_INPUT',
      }));
    }
    if (screenStep === 'PW_INPUT') {
      setSignUpState(prev => ({
        ...prev,
        screenStep: 'TIIUN_INPUT',
      }));
    }
    if (screenStep === 'TIIUN_INPUT') {
      setSignUpState(prev => ({
        ...prev,
        screenStep: 'TURF_INPUT',
      }));
    }
    if (screenStep === 'TURF_INPUT') {
      setSignUpState(prev => ({
        ...prev,
        screenStep: 'ADDRESS_INPUT',
      }));
    }
  };

  return (
    <Button mode="contained" onPress={handlePressNextButton}>
      계속하기
    </Button>
  );
});
