import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Image } from 'react-native';

import { PlantAddForm } from '../../../../hooks';
import { EPlantAddStep } from '../../../../plant-add.state';

type PlantAddContentPhotoCompleteComponentProps = {};

export const PlantAddContentPhotoCompleteComponent =
  memo<PlantAddContentPhotoCompleteComponentProps>(() => {
    const { control } = useFormContext<PlantAddForm>();

    const { field: field1 } = useController({
      name: EPlantAddStep.PICTURE,
      control,
    });
    const { field: field2 } = useController({
      name: EPlantAddStep.PICTURE_COMPLETE,
      control,
    });
    console.log(field1.value);
    field2.value = field1.value;

    return (
      <Image
        source={{ uri: field1.value }}
        style={{ height: 200, borderRadius: 8 }}
      />
    );
  });
