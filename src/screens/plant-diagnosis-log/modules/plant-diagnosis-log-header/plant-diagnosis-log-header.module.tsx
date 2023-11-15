import { Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { PlantDiagnosisLogScreenNavigationProps } from '../../plant-diagnosis-log.screen';

import { Text } from '@/atoms';
import { ModalHeader } from '@/layouts';

type PlantDiagnosisLogHeaderModules = {};

export const PlantDiagnosisLogHeader = memo<PlantDiagnosisLogHeaderModules>(
  () => {
    const navigation = useNavigation<PlantDiagnosisLogScreenNavigationProps>();

    const onPressExit = () => {
      navigation.goBack();
    };

    return (
      <Stack space={32}>
        <ModalHeader left={{ type: 'icon' }} onPressExit={onPressExit} />
        <Text variants="titleLarge" fontWeight="Bold" color="black">
          진단결과 - 팝콘묵자
        </Text>
      </Stack>
    );
  },
);
