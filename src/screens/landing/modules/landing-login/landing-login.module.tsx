import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { LandingScreenNavigationProps } from '../../landing.screen';

import { Button } from '@/atoms';

type LandingLoginModuleProps = {};

export const LandingLoginModule = memo<LandingLoginModuleProps>(() => {
  const navigation = useNavigation<LandingScreenNavigationProps>();
  const handlePressLoginButton = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <Button mode="contained" onPress={handlePressLoginButton}>
      로그인
    </Button>
  );
});
