import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { PlantDiagnosisListScreenNavigationProps } from '../../plant-diagnosis-list.screen';

import { ModalHeader } from '@/layouts';

type PlantDiagnosisListHeaderModuleProps = {};

export const PlantDiagnosisListHeaderModule =
  memo<PlantDiagnosisListHeaderModuleProps>(() => {
    const navigation = useNavigation<PlantDiagnosisListScreenNavigationProps>();

    const onPressExit = () => {
      navigation.goBack();
    };

    return <ModalHeader left={{ type: 'icon' }} onPressExit={onPressExit} />;
  });
