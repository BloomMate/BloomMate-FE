import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Image } from 'react-native';

import { PlantAddForm } from '../../../../hooks';
import { EPlantAddStep } from '../../../../plant-add.state';

type PlantAddContentPhotoCompleteComponentProps = {};

export const PlantAddContentPhotoCompleteComponent =
  memo<PlantAddContentPhotoCompleteComponentProps>(() => {
    const { control } = useFormContext<PlantAddForm>();

    const { field } = useController({
      name: EPlantAddStep.PICTURE_COMPLETE,
      control,
    });

    return (
      <Image
        source={{ uri: field.value }}
        style={{ height: 200, borderRadius: 8 }}
      />
    );
  });
