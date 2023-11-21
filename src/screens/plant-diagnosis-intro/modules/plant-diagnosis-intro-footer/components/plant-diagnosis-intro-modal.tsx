import { Stack } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import { memo } from 'react';

import {
  PlantDiagnosisIntroScreenNavigationProps,
  PlantDiagnosisIntroScreenNavigationRouteProps,
} from '../../../plant-diagnosis-intro.screen';
import { usePostPlantDiagnosis } from '../hooks';

import { Button, Modal } from '@/atoms';
import { useUploadImageLibraryMutation, useUploadPhotoMutation } from '@/hooks';
import { useMutationIndicator } from '@/providers';
import { palette } from '@/utils';

type PlantDiagnosisIntroModalComponentProps = {
  isModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PlantDiagnosisIntroModalComponent =
  memo<PlantDiagnosisIntroModalComponentProps>(({ isModal, setModal }) => {
    const navigation =
      useNavigation<PlantDiagnosisIntroScreenNavigationProps>();
    const {
      params: { id },
    } = useRoute<PlantDiagnosisIntroScreenNavigationRouteProps>();
    const isVisible = isModal;

    const { mutateAsync: uploadPhoto, isLoading: isUploadingPhoto } =
      useUploadPhotoMutation();

    const {
      mutateAsync: uploadImageLibrary,
      isLoading: isUploadingImageLibrary,
    } = useUploadImageLibraryMutation();

    const {
      mutateAsync: postPlantDiagnosis,
      isLoading: isPostingPlantDiagnosis,
    } = usePostPlantDiagnosis();

    useMutationIndicator([
      isUploadingPhoto,
      isUploadingImageLibrary,
      isPostingPlantDiagnosis,
    ]);

    const handlePressPictureButton = async () => {
      const { data: cloudinaryData } = await uploadPhoto();

      const diagnosisData = await postPlantDiagnosis({
        diagnose_photo_url: cloudinaryData.url,
        plant_id: id.toString(),
      });

      navigation.navigate('PlantDiagnosisResultScreen', {
        plant_id: id,
        id: diagnosisData.id,
      });
      setModal(false);
    };

    const handlePressLibraryButton = async () => {
      const { data: cloudinaryData } = await uploadImageLibrary();
      const diagnosisData = await postPlantDiagnosis({
        diagnose_photo_url: cloudinaryData.url,
        plant_id: id.toString(),
      });

      navigation.navigate('PlantDiagnosisResultScreen', {
        plant_id: id,
        id: diagnosisData.id,
      });

      setModal(false);
    };

    const handlePressBackdrop = () => {
      setModal(false);
    };

    return (
      <Modal isVisible={isVisible} onBackdropPress={handlePressBackdrop}>
        <Stack space={16}>
          <Button
            onPress={handlePressPictureButton}
            mode="outlined"
            style={{ backgroundColor: palette['white'] }}>
            직접 촬영하기
          </Button>
          <Button
            onPress={handlePressLibraryButton}
            mode="outlined"
            style={{ backgroundColor: palette['white'] }}>
            갤러리에서 선택하기
          </Button>
        </Stack>
      </Modal>
    );
  });
