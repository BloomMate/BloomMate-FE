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

  const button1: SingleButtonProps = {
    mode: 'outlined',
    label: '재촬영',
    onPress: () =>
      setPlantAddState({
        screenStep: plantAddSteps[currentScreenStepIndex - 1],
      }),
  };
  const button2: SingleButtonProps = {
    mode: 'contained',
    label: '확인',
    onPress: () => handlePressButton(),
  };

  return isPictureCompleteStep ? (
    <CTASection buttons={[button1, button2]} direction="row" />
  ) : (
    <Button mode="contained" onPress={handlePressButton}>
      {copy}
    </Button>
  );
});
