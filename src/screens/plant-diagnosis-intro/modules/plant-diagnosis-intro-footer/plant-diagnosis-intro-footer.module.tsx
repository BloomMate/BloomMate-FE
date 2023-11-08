import { useNavigation } from '@react-navigation/native';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { launchCamera } from 'react-native-image-picker';

import { PlantDiagnosisIntroScreenNavigationProps } from '../../plant-diagnosis-intro.screen';

import { CTASection, SingleButtonProps } from '@/layouts';

type PlantDiagnosisIntroFooterModuleProps = {};

export const PlantDiagnosisIntroFooterModule =
  memo<PlantDiagnosisIntroFooterModuleProps>(() => {
    const navigation =
      useNavigation<PlantDiagnosisIntroScreenNavigationProps>();

    const handlePressDiagnosis = async () => {
      const result = await launchCamera({
        mediaType: 'photo',
        saveToPhotos: true,
      });

      if (isUndefined(result.assets) || result.didCancel) {
        return;
      }

      navigation.navigate('PlantDiagnosisResultScreen', {
        photo_url: result.assets[0].uri as string,
        id: '1',
      });
    };

    const buttons: SingleButtonProps[] = [
      { label: '진단 기록', mode: 'outlined', onPress: () => {} },
      {
        label: '진단하기',
        mode: 'contained',
        icon: 'search-off',
        onPress: handlePressDiagnosis,
      },
    ];

    return <CTASection buttons={buttons} direction="row" />;
  });
