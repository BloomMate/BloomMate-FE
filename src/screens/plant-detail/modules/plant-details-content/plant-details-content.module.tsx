import { Stack } from '@mobily/stacks';
import { memo } from 'react';

import { PlantDetailDetailsModule } from './plant-detail-details';
import { PlantDetailPictureModule } from './plant-detail-picture';
import { PlantDetailProgressModule } from './plant-detail-progress';
import { PlantDetailGrowthModule } from './plant-details-growth';

type PlantDetailContentModule = {};

export const PlantDetailContentModule = memo<PlantDetailContentModule>(() => {
  return (
    <Stack space={12} paddingTop={32}>
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
