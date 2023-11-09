import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { FlatList } from 'react-native';

import { PlantListEmpty, PlantListItem } from './components';

import { PLANT_LIST_DUMMY_DATA } from '@/dummy-data';

type PrimaryPlantCurrentListContentModuleProps = {};

export const PrimaryPlantCurrentListContentModule =
  memo<PrimaryPlantCurrentListContentModuleProps>(() => {
    const currentPlantList = PLANT_LIST_DUMMY_DATA.filter(
      v => v.is_harvested === false,
    );

    return (
      <FlatList
        data={currentPlantList}
        ListEmptyComponent={<PlantListEmpty />}
        ItemSeparatorComponent={() => <Box style={{ height: 20 }} />}
        renderItem={({ item }) => <PlantListItem {...item} />}
        ListFooterComponent={<Box style={{ height: 40 }} />}
      />
    );
  });
