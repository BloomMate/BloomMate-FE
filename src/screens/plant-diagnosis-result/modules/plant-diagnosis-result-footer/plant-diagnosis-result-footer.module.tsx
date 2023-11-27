import { useNavigation, useRoute } from '@react-navigation/native';
import { memo } from 'react';

import {
  PlantDiagnosisResultScreenNavigationProps,
  PlantDiagnosisResultScreenNavigationRouteProps,
} from '../../plant-diagnosis-result.screen';

import { CTASection, SingleButtonProps } from '@/layouts';

type PlantDiagnosisResultFooterModuleProps = {};

export const PlantDiagnosisResultFooterModule =
  memo<PlantDiagnosisResultFooterModuleProps>(() => {
    const navigation =
      useNavigation<PlantDiagnosisResultScreenNavigationProps>();
    const {
      params: { plant_id },
    } = useRoute<PlantDiagnosisResultScreenNavigationRouteProps>();

    const id = plant_id;

    const handlePressDiagnosisRecordButton = () => {
      navigation.navigate('PlantDiagnosisListScreen', { id });
    };

    const handlePressBackButton = () => {
      navigation.goBack();
    };

    const buttons: SingleButtonProps[] = [
      {
        label: '진단 기록',
        mode: 'outlined',
        onPress: handlePressDiagnosisRecordButton,
      },
      { label: '돌아가기', mode: 'contained', onPress: handlePressBackButton },
    ];

    return <CTASection buttons={buttons} direction="row" />;
  });
