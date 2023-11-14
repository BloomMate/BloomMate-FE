import { useNavigation, useRoute } from '@react-navigation/native';
import { memo } from 'react';

import {
  PlantDiagnosisIntroScreenNavigationProps,
  PlantDiagnosisIntroScreenNavigationRouteProps,
} from '../../plant-diagnosis-intro.screen';

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
      mutateAsync: postPlantDiagnosis,
      isLoading: isPostingPlantDiagnosis,
    } = usePostPlantDiagnosis();

    useMutationIndicator([isUploadingPhoto, isPostingPlantDiagnosis]);
    const navigation =
      useNavigation<PlantDiagnosisIntroScreenNavigationProps>();
    const {
      params: { id },
    } = useRoute<PlantDiagnosisIntroScreenNavigationRouteProps>();

    const handlePressDiagnosisRecordButton = () => {
      navigation.navigate('PlantDiagnosisListScreen', { id });
    };

    const handlePressDiagnosis = async () => {
      const { data: cloudinaryData } = await uploadPhoto();

      const diagnosisData = await postPlantDiagnosis({
        diagnose_photo_url: cloudinaryData.url,
        plant_id: id.toString(),
      });

      navigation.navigate('PlantDiagnosisResultScreen', {
        id: diagnosisData.id,
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
