import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { PlantAddForm } from '../../hooks';
import { PlantAddScreenNavigationProps } from '../../plant-add.screen';
import {
  $currentScreenStepIndexSelector,
  $plantAddState,
  plantAddSteps,
} from '../../plant-add.state';

import { usePostPlantAddMutation } from './hooks';

import { Button } from '@/atoms';
import { CTASection, SingleButtonProps } from '@/layouts';
import { useMutationIndicator } from '@/providers';

type PlantAddFooterModuleProps = {};

export const PlantAddFooterModule = memo<PlantAddFooterModuleProps>(() => {
  const navigation = useNavigation<PlantAddScreenNavigationProps>();
  const setPlantAddState = useSetRecoilState($plantAddState);
  const { formState, handleSubmit } = useFormContext<PlantAddForm>();
  const { mutateAsync, isLoading } = usePostPlantAddMutation();

  useMutationIndicator([isLoading]);
  const { isDirty, isValid, errors, dirtyFields } = formState;

  const currentScreenStepIndex = useRecoilValue(
    $currentScreenStepIndexSelector,
  );
  const isPlantAddPossible = isDirty && isValid;

  const isCurrentStepValid = () => {
    const currentFieldName = plantAddSteps[currentScreenStepIndex];

    return !errors[currentFieldName] && dirtyFields[currentFieldName];
  };

  const addNewPlant: SubmitHandler<PlantAddForm> = async ({
    PICTURE: plant_picture_url,
    ALIAS_INPUT: plant_nickname,
    DATE_INPUT: planted_at,
    VARIETY: plant_type_id,
  }) => {
    await mutateAsync({
      plant_picture_url,
      planted_at,
      plant_nickname,
      plant_type_id,
    });
  };

  const isLastStep = currentScreenStepIndex === plantAddSteps.length - 1;
  const isPictureCompleteStep = currentScreenStepIndex === 1;
  const isPictureStep = currentScreenStepIndex === 0;
  const copy = isLastStep ? '식물 등록하기' : '계속하기';

  const handlePressButton = () => {
    if (isLastStep) {
      handleSubmit(addNewPlant)();

      navigation.reset({
        index: 1,
        routes: [
          {
            name: 'PrimaryStack',
            params: { screen: 'PrimaryPlantListScreen' },
          },
          { name: 'PlantAnimationScreen', params: { type: 'plant-add' } },
        ],
      });
    } else {
      setPlantAddState({
        screenStep: plantAddSteps[currentScreenStepIndex + 1],
      });
    }
  };
  const buttons: SingleButtonProps[] = [
    {
      label: '재촬영',
      mode: 'outlined',
      onPress: () =>
        setPlantAddState({
          screenStep: plantAddSteps[currentScreenStepIndex - 1],
        }),
    },
    {
      label: '확인',
      mode: 'contained',
      onPress: handlePressButton,
    },
  ];

  if (isPictureStep) {
    return null;
  }

  return isPictureCompleteStep ? (
    <CTASection buttons={buttons} direction="row" />
  ) : (
    <Button
      mode="contained"
      onPress={handlePressButton}
      disabled={isLastStep ? !isPlantAddPossible : !isCurrentStepValid()}>
      {copy}
    </Button>
  );
});
