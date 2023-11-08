import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { PlantAddScreenNavigationProps } from '../../plant-add.screen';
import {
  $currentScreenStepIndexSelector,
  $plantAddState,
  plantAddSteps,
} from '../../plant-add.state';

import { Button } from '@/atoms';
import { CTASection, SingleButtonProps } from '@/layouts';

type PlantAddFooterModuleProps = {};

export const PlantAddFooterModule = memo<PlantAddFooterModuleProps>(() => {
  const navigation = useNavigation<PlantAddScreenNavigationProps>();
  const setPlantAddState = useSetRecoilState($plantAddState);

  const currentScreenStepIndex = useRecoilValue(
    $currentScreenStepIndexSelector,
  );

  const isLastStep = currentScreenStepIndex === plantAddSteps.length - 1;
  const isPictureCompleteStep = currentScreenStepIndex === 1;
  const copy = isLastStep ? '식물 등록하기' : '계속하기';

  const handlePressButton = () => {
    if (isLastStep) {
      console.log('마지막!');
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

  return isPictureCompleteStep ? (
    <CTASection buttons={buttons} direction="row" />
  ) : (
    <Button mode="contained" onPress={handlePressButton}>
      {copy}
    </Button>
  );
});