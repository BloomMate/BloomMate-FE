import { CLOUDINARY_NAME } from '@env';

type UploadPhotoRequestProps = {
  file: string;
};

type UploadPhotoResponseData = {
  res: JSON;
};

//TODO: 제대로 고치기
export const useUploadPhotoMutation = async (file: string) => {
  console.log(file);
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', 'BloomMate');
  const cloudName = CLOUDINARY_NAME;
  console.log(data);
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: 'POST',
      body: data,
    },
  );
  console.log(res.json());
  return res.json();
};
