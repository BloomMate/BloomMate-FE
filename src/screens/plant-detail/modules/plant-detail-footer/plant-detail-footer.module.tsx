import { Stack } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';

import {
  PlantDetailScreenNavigationProps,
  PlantDetailScreenNavigationRouteProps,
} from '../../plant-detail.screen';

import { Button } from '@/atoms';
import { useGetPlantDetailQuery } from '@/hooks';

type PlantDetailFooterModule = {};

export const PlantDetailFooterModule = memo<PlantDetailFooterModule>(() => {
  const navigation = useNavigation<PlantDetailScreenNavigationProps>();
  const {
    params: { id },
  } = useRoute<PlantDetailScreenNavigationRouteProps>();

  const { data } = useGetPlantDetailQuery({ plant_id: id });

  if (isUndefined(data)) {
    return;
  }
  const { growth_level } = data;

  const isGrowthLevelHarvest = growth_level === 'harvest';

  const handlePressButton = () => {
    if (isGrowthLevelHarvest) {
      // TODO : ADD Harvest API + navigate to list

      return;
    }
    navigation.navigate('PlantDiagnosisIntroScreen', { id });
  };

  return (
    <Stack space={32}>
      <Button
        mode="contained"
        icon={isGrowthLevelHarvest ? 'agriculture' : 'health-and-safety'}
        onPress={handlePressButton}>
        {isGrowthLevelHarvest ? '수확하기' : 'AI 진단하기'}
      </Button>
    </Stack>
  );
});
