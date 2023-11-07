import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { FlatList } from 'react-native';

import { PlantListItemComponent } from './components';

import { PLANT_LIST_DUMMY_DATA } from '@/dummy-data';

type PrimaryPlantCurrentListExistModuleProps = {};

export const PrimaryPlantCurrentListExistModule =
  memo<PrimaryPlantCurrentListExistModuleProps>(() => {
    const currentPlantList = PLANT_LIST_DUMMY_DATA.filter(
      v => v.harvested === false,
    );

    return (
      <FlatList
        data={currentPlantList}
        ItemSeparatorComponent={() => <Box style={{ height: 20 }} />}
        renderItem={({ item }) => <PlantListItemComponent {...item} />}
        ListFooterComponent={<Box style={{ height: 40 }} />}
      />
    );
  });
