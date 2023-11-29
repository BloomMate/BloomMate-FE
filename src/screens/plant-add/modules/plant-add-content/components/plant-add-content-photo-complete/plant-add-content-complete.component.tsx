import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { useWindowDimensions } from 'react-native';
import FastImage from 'react-native-fast-image';

import { PlantAddForm } from '../../../../hooks';
import { EPlantAddStep } from '../../../../plant-add.state';

import { Image } from '@/atoms';

type PlantAddContentPhotoCompleteComponentProps = {};

export const PlantAddContentPhotoCompleteComponent =
  memo<PlantAddContentPhotoCompleteComponentProps>(() => {
    const { control } = useFormContext<PlantAddForm>();
    const { width: deviceWidth } = useWindowDimensions();
    const { field } = useController({
      name: EPlantAddStep.PICTURE_COMPLETE,
      control,
    });

    return (
      <Image
        source={{ uri: field.value }}
        style={{ height: 200, borderRadius: 8 }}
        skeletonStyle={{ width: deviceWidth - 48 }}
        resizeMode={FastImage.resizeMode.cover}
      />
    );
  });
