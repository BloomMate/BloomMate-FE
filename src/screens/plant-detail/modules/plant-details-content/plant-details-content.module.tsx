import { Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { PlantDetailScreenNavigationProps } from '../../plant-detail.screen';
import { PlantDetailHeaderModule } from '../plant-detail-header';

import { PlantDetailDetailsModule } from './plant-detail-details/plant-detail-details';
import { PlantDetailPictureModule } from './plant-detail-picture';
import { PlantDetailGrowthModule } from './plant-details-growth';

type PlantDetailContentModule = {};

export const PlantDetailContentModule = memo<PlantDetailContentModule>(() => {
  const navigation = useNavigation<PlantDetailScreenNavigationProps>();

  return (
    <Stack>
      <PlantDetailHeaderModule />
      <PlantDetailPictureModule />
      <PlantDetailDetailsModule />
      <PlantDetailGrowthModule />
    </Stack>
  );
});
