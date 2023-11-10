import { Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { ProgressBar } from 'react-native-paper';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { PlantAddScreenNavigationProps } from '../../plant-add.screen';
import {
  $currentScreenStepIndexSelector,
  $plantAddState,
  plantAddSteps,
} from '../../plant-add.state';

import { ModalHeader } from '@/layouts';
import { palette } from '@/utils';

type PlantAddHeaderModuleProps = {};

export const PlantAddHeaderModule = memo<PlantAddHeaderModuleProps>(() => {
  const navigation = useNavigation<PlantAddScreenNavigationProps>();
  const setPlantAddState = useSetRecoilState($plantAddState);
  const currentScreenStepIndex = useRecoilValue(
    $currentScreenStepIndexSelector,
  );

  const handlePressBack = () => {
    if (!isFirstStep) {
      setPlantAddState({
        screenStep: plantAddSteps[currentScreenStepIndex - 1],
      });
    } else {
      navigation.goBack();
    }
  };

  const isFirstStep = currentScreenStepIndex === 0;

  return (
    <Stack space={32}>
      <ModalHeader left={{ type: 'icon' }} onPressExit={handlePressBack} />
      <ProgressBar
        progress={(currentScreenStepIndex + 1) / plantAddSteps.length}
        color={palette['primary']}
        style={{ backgroundColor: palette['gray-300'], borderRadius: 4 }}
      />
    </Stack>
  );
});
