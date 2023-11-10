import { CLOUDINARY_KEY, CLOUDINARY_NAME } from '@env';

type UploadPhotoRequestProps = {
  file: string;
};

type UploadPhotoResponseData = {
  res: JSON;
};

//TODO: 제대로 고치기
export const useUploadPhotoMutation = async (file: string) => {
  try {
    const formData = new FormData();
    const cloudName = CLOUDINARY_NAME;
    const apiKey = CLOUDINARY_KEY;
    formData.append('file', file);
    formData.append('upload_preset', 'BloomMate');
    formData.append('public_id', false);
    formData.append('api_key', Number(apiKey));

    console.log(formData);
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
    } else {
      console.error('Upload failed:', response.statusText);
    }
  } catch (error) {
    console.error('Error during upload:', error);
  }
};
