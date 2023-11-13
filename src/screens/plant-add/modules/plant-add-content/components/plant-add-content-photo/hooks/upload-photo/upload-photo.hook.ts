import { CLOUDINARY_NAME } from '@env';
import axios from 'axios';
import { useController, useFormContext } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { PlantAddForm } from '../../../../../../hooks';
import {
  $currentScreenStepIndexSelector,
  $plantAddState,
  EPlantAddStep,
  plantAddSteps,
} from '../../../../../../plant-add.state';

type UploadPhotoRequestProps = {
  file: string;
};

type UploadPhotoResponseData = {
  res: JSON;
};

export const useUploadPhotoMutation = () => {
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
  const cloudName = CLOUDINARY_NAME;

  const setPlantAddState = useSetRecoilState($plantAddState);

  return useMutation(async (formData: FormData) => {
    try {
      const response = await axios(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          data: formData,
        },
      );

      if (response.status == 200) {
        const jsonResponse = await response;
        console.log('Upload successful:', jsonResponse);
        field1.value = jsonResponse.data.url as string;
        field1.onChange(jsonResponse.data.url as string);
        field2.onChange(field1.value);
        setPlantAddState({
          screenStep: plantAddSteps[currentScreenStepIndex + 1],
        });
      } else {
        console.error('Upload failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during upload:', error);
    }
  });
};
