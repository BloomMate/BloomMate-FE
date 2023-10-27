import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { LandingScreenNavigationProps } from '../../landing.screen';

import { Button } from '@/atoms';
import { palette } from '@/utils';

type LandingLoginModuleProps = {};

export const LandingLoginModule = memo<LandingLoginModuleProps>(() => {
  const navigation = useNavigation<LandingScreenNavigationProps>();
  const handlePressLoginButton = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <Button
      mode="outlined"
      onPress={handlePressLoginButton}
      style={{ backgroundColor: palette['white'] }}>
      로그인
    </Button>
  );
});
