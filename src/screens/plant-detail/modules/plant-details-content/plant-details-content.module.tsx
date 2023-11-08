import { Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { PlantDetailScreenNavigationProps } from '../../plant-detail.screen';

import { PlantDetailDetailsModule } from './plant-detail-details';
import { PlantDetailPictureModule } from './plant-detail-picture';
import { PlantDetailProgressModule } from './plant-detail-progress';
import { PlantDetailGrowthModule } from './plant-details-growth';

type PlantDetailContentModule = {};

export const PlantDetailContentModule = memo<PlantDetailContentModule>(() => {
  const navigation = useNavigation<PlantDetailScreenNavigationProps>();

  return (
    <Stack space={12} paddingTop={48}>
      <Stack space={16}>
        <PlantDetailPictureModule />
        <PlantDetailDetailsModule />
      </Stack>
      <Stack space={16}>
        <PlantDetailGrowthModule />
        <PlantDetailProgressModule />
      </Stack>
    </Stack>
  );
});
