import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Image } from 'react-native';
import { useRecoilValue } from 'recoil';

import { PlantAddForm } from '../../../../hooks';
import { $currentScreenStepIndexSelector } from '../../../../plant-add.state';

type PlantAddContentPhotoCompleteComponentProps = {};

export const PlantAddContentPhotoCompleteComponent =
  memo<PlantAddContentPhotoCompleteComponentProps>(() => {
    const { control } = useFormContext<PlantAddForm>();
    const currentScreenStepIndex = useRecoilValue(
      $currentScreenStepIndexSelector,
    );

    const { field: field1 } = useController({ name: 'PICTURE', control });
    const { field: field2 } = useController({
      name: 'PICTURE_COMPLETE',
      control,
    });

    field2.onChange(field1.value);

    return (
      <Image
        source={{ uri: field1.value }}
        style={{ height: 200, borderRadius: 8 }}
      />
    );
  });
