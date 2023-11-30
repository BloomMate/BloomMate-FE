import { Box, Stack } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import { memo } from 'react';
import { View, TouchableOpacity } from 'react-native';

import {
  PlantDiagnosisIntroScreenNavigationProps,
  PlantDiagnosisIntroScreenNavigationRouteProps,
} from '../../../plant-diagnosis-intro.screen';
import { usePostPlantDiagnosis } from '../hooks';

import { Icon, Modal, Text } from '@/atoms';
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
      const response = await uploadPhoto();

      if (response != null) {
        const diagnosisData = await postPlantDiagnosis({
          diagnose_photo_url: response.data.url,
          plant_id: id.toString(),
        });

        navigation.navigate('PlantDiagnosisResultScreen', {
          plant_id: id,
          id: diagnosisData.id,
        });
      }
      setModal(false);
    };

    const handlePressLibraryButton = async () => {
      const response = await uploadImageLibrary();
      const diagnosisData = await postPlantDiagnosis({
        diagnose_photo_url: response?.data.url,
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
      <Modal
        isVisible={isVisible}
        isBottomSheet={true}
        onBackdropPress={handlePressBackdrop}>
        <Stack
          space={12}
          paddingX={4}
          paddingTop={12}
          paddingBottom={30}
          style={{
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            backgroundColor: palette['white'],
            justifyContent: 'center',
          }}>
          <Stack space={30}>
            <Stack
              style={{
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 50,
                  height: 3,
                  backgroundColor: palette['gray-400'],
                  borderRadius: 8,
                }}
              />
            </Stack>
            <Box direction={'row'} style={{ alignItems: 'center' }}>
              <Box
                style={{
                  paddingHorizontal: 24,
                  paddingVertical: 16,
                  borderColor: palette['primary'],
                  flex: 1,
                }}>
                <TouchableOpacity
                  onPress={handlePressLibraryButton}
                  style={{ alignItems: 'center' }}>
                  <Stack space={10} align="center">
                    <Icon
                      name={'photo-library'}
                      size={40}
                      color={palette['primary']}
                    />
                    <Text
                      variants={'bodyLarge'}
                      fontWeight={'Medium'}
                      color={'primary'}>
                      갤러리에서 선택
                    </Text>
                  </Stack>
                </TouchableOpacity>
              </Box>
              <Box>
                <View
                  style={{
                    width: 3,
                    height: 70,
                    backgroundColor: palette['primary'],
                    borderRadius: 100,
                  }}></View>
              </Box>
              <Box
                style={{
                  paddingHorizontal: 24,
                  paddingVertical: 16,
                  flex: 1,
                }}>
                <TouchableOpacity
                  onPress={handlePressPictureButton}
                  style={{ alignItems: 'center' }}>
                  <Stack space={10} align="center">
                    <Icon
                      name={'photo-camera'}
                      size={40}
                      color={palette['primary']}
                    />
                    <Text
                      variants={'bodyLarge'}
                      fontWeight={'Medium'}
                      color={'primary'}>
                      직접 촬영하기
                    </Text>
                  </Stack>
                </TouchableOpacity>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Modal>
    );
  });
