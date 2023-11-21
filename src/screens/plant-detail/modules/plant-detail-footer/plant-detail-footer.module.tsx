import { Stack } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';

import {
  PlantDetailScreenNavigationProps,
  PlantDetailScreenNavigationRouteProps,
} from '../../plant-detail.screen';

import { usePostHarvestPlantMutation } from './hooks';

import { Button } from '@/atoms';
import { useGetPlantDetailQuery } from '@/hooks';
import { useMutationIndicator } from '@/providers';

type PlantDetailFooterModule = {};

export const PlantDetailFooterModule = memo<PlantDetailFooterModule>(() => {
  const navigation = useNavigation<PlantDetailScreenNavigationProps>();
  const {
    params: { id },
  } = useRoute<PlantDetailScreenNavigationRouteProps>();

  const { data } = useGetPlantDetailQuery({ plant_id: id });

  const { mutateAsync, isLoading } = usePostHarvestPlantMutation();
  useMutationIndicator([isLoading]);

  if (isUndefined(data)) {
    return;
  }
  const { growth_level } = data;

  const isGrowthLevelHarvest = growth_level === 'harvest';

  const handlePressButton = async () => {
    if (isGrowthLevelHarvest) {
      await mutateAsync({ plant_id: id });
      navigation.reset({
        index: 1,
        routes: [
          {
            name: 'PrimaryStack',
            params: { screen: 'PrimaryPlantListScreen' },
          },
          { name: 'PlantAnimationScreen', params: { type: 'harvest' } },
        ],
      });
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
