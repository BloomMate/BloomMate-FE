import { useNavigation, useRoute } from '@react-navigation/native';
import { memo, useState } from 'react';

import {
  PlantDiagnosisIntroScreenNavigationProps,
  PlantDiagnosisIntroScreenNavigationRouteProps,
} from '../../plant-diagnosis-intro.screen';

import { PlantDiagnosisIntroModalComponent } from './components';

import { CTASection, SingleButtonProps } from '@/layouts';

type PlantDiagnosisIntroFooterModuleProps = {};

export const PlantDiagnosisIntroFooterModule =
  memo<PlantDiagnosisIntroFooterModuleProps>(() => {
    const [isModal, setModal] = useState(false);

    const navigation =
      useNavigation<PlantDiagnosisIntroScreenNavigationProps>();
    const {
      params: { id },
    } = useRoute<PlantDiagnosisIntroScreenNavigationRouteProps>();

    const handlePressDiagnosisRecordButton = () => {
      navigation.navigate('PlantDiagnosisListScreen', { id });
    };

    const handlePressDiagnosis = async () => {
      setModal(true);
    };

    const buttons: SingleButtonProps[] = [
      {
        label: '진단 기록',
        mode: 'outlined',
        onPress: handlePressDiagnosisRecordButton,
      },
      {
        label: '진단하기',
        mode: 'contained',
        icon: 'search-off',
        onPress: handlePressDiagnosis,
      },
    ];

    return (
      <>
        <PlantDiagnosisIntroModalComponent
          isModal={isModal}
          setModal={setModal}
        />
        <CTASection buttons={buttons} direction="row" />
      </>
    );
  });
