import { Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { PlantDetailScreenNavigationProps } from '../../plant-detail.screen';

import { Button } from '@/atoms';

type PlantDetailFooterModule = {};

export const PlantDetailFooterModule = memo<PlantDetailFooterModule>(() => {
  const navigation = useNavigation<PlantDetailScreenNavigationProps>();

  const handlePressDiagnosisButton = () => {
    // navigation.navigate('PlantDiagnosisIntroScreen', { id });
    console.log('button clicked');
  };

  return (
    <Stack space={32}>
      <Button
        mode="contained"
        icon="health-and-safety"
        onPress={handlePressDiagnosisButton}>
        AI 진단하기
      </Button>
    </Stack>
  );
});
