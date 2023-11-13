import { CLOUDINARY_NAME } from '@env';
import { Box } from '@mobily/stacks';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

import { useUploadPhotoMutation } from './hooks';

import { Icon, PointLinearGradient } from '@/atoms';
import { useMutationIndicator } from '@/providers';
import { palette } from '@/utils';

type PlantAddContentPhotoComponentProps = {};

export const PlantAddContentPhotoComponent =
  memo<PlantAddContentPhotoComponentProps>(() => {
    const { mutateAsync, isLoading } = useUploadPhotoMutation();

    useMutationIndicator([isLoading]);

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
