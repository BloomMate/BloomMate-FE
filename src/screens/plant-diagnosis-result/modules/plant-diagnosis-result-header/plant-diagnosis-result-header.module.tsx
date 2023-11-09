import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { PlantDiagnosisResultScreenNavigationProps } from '../../plant-diagnosis-result.screen';

import { ModalHeader } from '@/layouts';

type PlantDiagnosisResultHeaderModuleProps = {};

export const PlantDiagnosisResultHeaderModule =
  memo<PlantDiagnosisResultHeaderModuleProps>(() => {
    const navigation =
      useNavigation<PlantDiagnosisResultScreenNavigationProps>();

    const onPressExit = () => {
      navigation.goBack();
    };

    return (
      <ModalHeader
        left={{ type: 'string', title: '진단 결과' }}
        onPressExit={onPressExit}
      />
    );
  });
