import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { PlantDiagnosisIntroScreenNavigationProps } from '../../plant-diagnosis-intro.screen';

import { ModalHeader } from '@/layouts';

type PlantDiagnosisIntroHeaderModuleProps = {};

export const PlantDiagnosisIntroHeaderModule =
  memo<PlantDiagnosisIntroHeaderModuleProps>(() => {
    const navigation =
      useNavigation<PlantDiagnosisIntroScreenNavigationProps>();

    const onPressExit = () => {
      navigation.goBack();
    };

    return <ModalHeader left={{ type: 'icon' }} onPressExit={onPressExit} />;
  });
