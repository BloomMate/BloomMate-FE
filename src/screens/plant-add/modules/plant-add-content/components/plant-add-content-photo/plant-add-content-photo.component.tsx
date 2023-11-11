import { CLOUDINARY_NAME } from '@env';
import { Box } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { PlantAddForm } from '../../../../hooks';
import { PlantAddScreenNavigationProps } from '../../../../plant-add.screen';
import {
  $currentScreenStepIndexSelector,
  $plantAddState,
  EPlantAddStep,
  plantAddSteps,
} from '../../../../plant-add.state';

import { Icon, PointLinearGradient } from '@/atoms';
import { palette } from '@/utils';

type PlantAddContentPhotoComponentProps = {};

export const PlantAddContentPhotoComponent =
  memo<PlantAddContentPhotoComponentProps>(() => {
    const navigation = useNavigation<PlantAddScreenNavigationProps>();
    const { control } = useFormContext<PlantAddForm>();
    const currentScreenStepIndex = useRecoilValue(
      $currentScreenStepIndexSelector,
    );
    const { field, fieldState } = useController({
      control,
      name: EPlantAddStep.PICTURE,
    });
    const { onChange, value } = field;
    const setPlantAddState = useSetRecoilState($plantAddState);

    const handlePressPictureButton = async () => {
      const result = await launchCamera({
        mediaType: 'photo',
        saveToPhotos: true,
      });

      if (isUndefined(result.assets) || result.didCancel) {
        return;
      }

      const { uri, fileName, type } = result.assets[0];

      const source = {
        uri,
        type,
        name: fileName,
      };
      try {
        const formData = new FormData();
        const cloudName = CLOUDINARY_NAME;

        formData.append('file', source);
        formData.append('upload_preset', 'BloomMate');
        formData.append('cloud_name', cloudName);

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: 'POST',
            body: formData,
          },
        );

        if (response.ok) {
          const jsonResponse = await response.json();
          console.log('Upload successful:', jsonResponse);
          field.value = jsonResponse.url as string;
          onChange(jsonResponse.url as string);
          setPlantAddState({
            screenStep: plantAddSteps[currentScreenStepIndex + 1],
          });
        } else {
          console.error('Upload failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error during upload:', error);
      }
    };

    return (
      <Box alignX="center">
        <TouchableOpacity onPress={handlePressPictureButton}>
          <PointLinearGradient
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              borderRadius: 160,
              height: 160,
              width: 160,
            }}>
            <Icon name="camera-alt" size={40} color={palette['gray-900']} />
          </PointLinearGradient>
        </TouchableOpacity>
      </Box>
    );
  });
