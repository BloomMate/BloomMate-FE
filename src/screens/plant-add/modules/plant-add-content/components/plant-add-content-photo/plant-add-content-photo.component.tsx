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
} from '../../../../plant-add.state';

import { useUploadPhotoMutation } from './hooks';

import { Icon, PointLinearGradient } from '@/atoms';
import { useMutationIndicator } from '@/providers';
import { palette } from '@/utils';

type PlantAddContentPhotoComponentProps = {};

export const PlantAddContentPhotoComponent =
  memo<PlantAddContentPhotoComponentProps>(() => {
    const navigation = useNavigation<PlantAddScreenNavigationProps>();
    const { mutateAsync, isLoading } = useUploadPhotoMutation();

    useMutationIndicator([isLoading]);

    const { control } = useFormContext<PlantAddForm>();
    const currentScreenStepIndex = useRecoilValue(
      $currentScreenStepIndexSelector,
    );
    const { field: field1 } = useController({
      name: EPlantAddStep.PICTURE,
      control,
    });
    const { field: field2 } = useController({
      name: EPlantAddStep.PICTURE_COMPLETE,
      control,
    });

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
      const formData = new FormData();
      const cloudName = CLOUDINARY_NAME;

      formData.append('file', source);
      formData.append('upload_preset', 'BloomMate');
      formData.append('cloud_name', cloudName);
      addNewPicture(formData);
    };

    const addNewPicture = async (formData: FormData) => {
      await mutateAsync(formData);
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
