import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { LandingScreenNavigationProps } from '../../landing.screen';

import { Button } from '@/atoms';

type LandingSignUpModuleProps = {};

export const LandingSignUpModule = memo<LandingSignUpModuleProps>(() => {
  const navigation = useNavigation<LandingScreenNavigationProps>();
  const handlePressSignUpButton = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <Button mode="outlined" onPress={handlePressSignUpButton}>
      회원가입
    </Button>
  );
});
