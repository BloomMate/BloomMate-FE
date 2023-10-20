import { Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { ProgressBar } from 'react-native-paper';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { SignUpScreenNavigationProps } from '../../signup.screen';
import {
  $currentScreenStepIndexSelector,
  $signUpState,
  signUpSteps,
} from '../../signup.state';

import { Icon } from '@/atoms';
import { palette } from '@/utils';

type SignUpHeaderModuleProps = {};

export const SignUpHeaderModule = memo<SignUpHeaderModuleProps>(() => {
  const navigation = useNavigation<SignUpScreenNavigationProps>();
  const setSignUpState = useSetRecoilState($signUpState);
  const currentScreenStepIndex = useRecoilValue(
    $currentScreenStepIndexSelector,
  );

  const isFirstStep = currentScreenStepIndex === 0;

  const handlePressButton = () => {
    if (isFirstStep) {
      navigation.goBack();
    } else {
      setSignUpState({ screenStep: signUpSteps[currentScreenStepIndex - 1] });
    }
  };

  return (
    <Stack space={12}>
      <Icon name="chevron-left" onPress={handlePressButton} size={24} />
      <ProgressBar
        progress={(currentScreenStepIndex + 1) / signUpSteps.length}
        color={palette['green-600']}
      />
    </Stack>
  );
});
