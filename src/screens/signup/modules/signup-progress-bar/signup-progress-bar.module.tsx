import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { ProgressBar } from 'react-native-paper';
import { useRecoilValue } from 'recoil';

import { SignUpScreenNavigationProps } from '../../signup.screen';
import { $signUpState } from '../../signup.state';

import { palette } from '@/utils';

type SignUpProgressBarModuleProps = {};

export const SignUpProgressBarModule = memo<SignUpProgressBarModuleProps>(
  () => {
    const { screenStep } = useRecoilValue($signUpState);
    const navigation = useNavigation<SignUpScreenNavigationProps>();
    let progress = 0;

    if (screenStep === 'NAME_INPUT') {
      progress = 0;
    }
    if (screenStep === 'ID_INPUT') {
      progress = 0.2;
    }
    if (screenStep === 'PW_INPUT') {
      progress = 0.4;
    }
    if (screenStep === 'TIIUN_INPUT') {
      progress = 0.6;
    }
    if (screenStep === 'TURF_INPUT') {
      progress = 0.8;
    }
    if (screenStep === 'ADDRESS_INPUT') {
      progress = 0.9;
    }

    return <ProgressBar progress={progress} color={palette['green-600']} />;
  },
);
