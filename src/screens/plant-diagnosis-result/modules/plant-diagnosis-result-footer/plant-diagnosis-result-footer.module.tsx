import { useNavigation } from '@react-navigation/native';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { launchCamera } from 'react-native-image-picker';

import { PlantDiagnosisResultScreenNavigationProps } from '../../plant-diagnosis-result.screen';

import { CTASection, SingleButtonProps } from '@/layouts';

type PlantDiagnosisResultFooterModuleProps = {};

export const PlantDiagnosisResultFooterModule =
  memo<PlantDiagnosisResultFooterModuleProps>(() => {
    const navigation =
      useNavigation<PlantDiagnosisResultScreenNavigationProps>();

    const handlePressReTake = async () => {
      const result = await launchCamera({
        mediaType: 'photo',
        saveToPhotos: true,
      });

      if (isUndefined(result.assets) || result.didCancel) {
        return;
      }

      // TODO : ADD Plant Diagnosis API
      navigation.replace('PlantDiagnosisResultScreen', {
        plant_id: 1,
        id: 1,
      });
    };

    const handlePressBackButton = () => {
      navigation.goBack();
    };

    const buttons: SingleButtonProps[] = [
      { label: '재촬영', mode: 'outlined', onPress: handlePressReTake },
      { label: '돌아가기', mode: 'contained', onPress: handlePressBackButton },
    ];

    return <CTASection buttons={buttons} direction="row" />;
  });
