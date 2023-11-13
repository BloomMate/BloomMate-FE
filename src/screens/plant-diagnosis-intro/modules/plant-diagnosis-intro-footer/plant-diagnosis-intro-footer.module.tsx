import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { PlantDiagnosisIntroScreenNavigationProps } from '../../plant-diagnosis-intro.screen';

import { usePostPlantDiagnosis } from './hooks';

import { useUploadPhotoMutation } from '@/hooks';
import { CTASection, SingleButtonProps } from '@/layouts';
import { useMutationIndicator } from '@/providers';

type PlantDiagnosisIntroFooterModuleProps = {};

export const PlantDiagnosisIntroFooterModule =
  memo<PlantDiagnosisIntroFooterModuleProps>(() => {
    const { mutateAsync: uploadPhoto, isLoading: isUploadingPhoto } =
      useUploadPhotoMutation();

    const {
      mutateAsync: photoPlantDiagnosis,
      isLoading: isPostingPlantDiagnosis,
    } = usePostPlantDiagnosis();

    useMutationIndicator([isUploadingPhoto]);
    const navigation =
      useNavigation<PlantDiagnosisIntroScreenNavigationProps>();

    const handlePressDiagnosisRecordButton = () => {
      navigation.navigate('PlantDiagnosisListScreen', { id: 1 });
    };

    const handlePressDiagnosis = async () => {
      const response = await uploadPhoto();

      navigation.navigate('PlantDiagnosisResultScreen', {
        id: 1,
      });
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

    return <CTASection buttons={buttons} direction="row" />;
  });
