import { CLOUDINARY_NAME } from '@env';
import axios from 'axios';
import isUndefined from 'lodash/isUndefined';
import { launchImageLibrary } from 'react-native-image-picker';
import { useMutation } from 'react-query';

export const useUploadImageLibraryMutation = () => {
  const makePhotoFormData = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
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

    return formData;
  };

  return useMutation(async () => {
    const data = await makePhotoFormData();
    const cloudName = CLOUDINARY_NAME;

    const response = await axios(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data,
      },
    );

    return response;
  });
};
