import { Stack } from '@mobily/stacks';
import { useBackHandler } from '@react-native-community/hooks';
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

  const handlePressBack = () => {
    if (!isFirstStep) {
      setSignUpState({ screenStep: signUpSteps[currentScreenStepIndex - 1] });
    } else {
      navigation.goBack();
    }

    return true;
  };

  useBackHandler(() => {
    return handlePressBack();
  });

  const isFirstStep = currentScreenStepIndex === 0;

  return (
    <Stack space={32}>
      <Icon
        name="arrow-back-ios"
        onPress={handlePressBack}
        size={24}
        color={palette['gray-900']}
      />

      <ProgressBar
        progress={(currentScreenStepIndex + 1) / signUpSteps.length}
        color={palette['primary']}
        style={{ backgroundColor: palette['gray-300'], borderRadius: 4 }}
      />
    </Stack>
  );
});
