import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { SignUpScreenNavigationProps } from '../../signup.screen';
import { $signUpState } from '../../signup.state';

import { Icon } from '@/atoms';

type SignUpBackModuleProps = {};

export const SignUpBackModule = memo<SignUpBackModuleProps>(() => {
  const navigation = useNavigation<SignUpScreenNavigationProps>();
  const { screenStep } = useRecoilValue($signUpState);
  const setSignUpState = useSetRecoilState($signUpState);
  const handlePressBackButton = () => {
    if (screenStep === 'NAME_INPUT') {
      navigation.navigate('LoginScreen');
    }
    if (screenStep === 'ID_INPUT') {
      setSignUpState(prev => ({
        ...prev,
        screenStep: 'NAME_INPUT',
      }));
    }
    if (screenStep === 'PW_INPUT') {
      setSignUpState(prev => ({
        ...prev,
        screenStep: 'ID_INPUT',
      }));
    }
    if (screenStep === 'TIIUN_INPUT') {
      setSignUpState(prev => ({
        ...prev,
        screenStep: 'PW_INPUT',
      }));
    }
    if (screenStep === 'TURF_INPUT') {
      setSignUpState(prev => ({
        ...prev,
        screenStep: 'TIIUN_INPUT',
      }));
    }
    if (screenStep === 'ADDRESS_INPUT') {
      setSignUpState(prev => ({
        ...prev,
        screenStep: 'TURF_INPUT',
      }));
    }
  };

  return (
    <Icon name="chevron-left" onPress={handlePressBackButton} size={24}></Icon>
  );
});
