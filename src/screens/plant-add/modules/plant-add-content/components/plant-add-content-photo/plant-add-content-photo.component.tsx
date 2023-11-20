import { Box } from '@mobily/stacks';
import { memo, useState } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { PlantAddForm } from '../../../../hooks';
import {
  $currentScreenStepIndexSelector,
  EPlantAddStep,
  $plantAddState,
  plantAddSteps,
} from '../../../../plant-add.state';
import { PlantAddPictureModalComponent } from '../plant-add-content-modal';

import { Icon, PointLinearGradient } from '@/atoms';
import { useUploadPhotoMutation } from '@/hooks';
import { useMutationIndicator } from '@/providers';
import { palette } from '@/utils';

type PlantAddContentPhotoComponentProps = {};

export const PlantAddContentPhotoComponent =
  memo<PlantAddContentPhotoComponentProps>(() => {
    const [isModal, setModal] = useState(false);

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
      setModal(true);
      const jsonResponse = await mutateAsync();
      field1.value = jsonResponse.data.url as string;
      field1.onChange(jsonResponse.data.url as string);
      field2.onChange(field1.value);
      setPlantAddState({
        screenStep: plantAddSteps[currentScreenStepIndex + 1],
      });
    };

    return (
      <Box alignX="center">
        <PlantAddPictureModalComponent isModal={isModal} setModal={setModal} />
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
