import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { FlatList } from 'react-native';

import { HarvestedPlantListItem } from './components';

import { PLANT_LIST_DUMMY_DATA } from '@/dummy-data';

type PrimaryPlantHarvestedListExistModuleProps = {};

export const PrimaryPlantHarvestedListExistModule =
  memo<PrimaryPlantHarvestedListExistModuleProps>(() => {
    const harvestedPlantList = PLANT_LIST_DUMMY_DATA.filter(
      v => v.is_harvested === true,
    );

    return (
      <FlatList
        data={harvestedPlantList}
        ItemSeparatorComponent={() => <Box style={{ height: 20 }} />}
        renderItem={({ item }) => <HarvestedPlantListItem {...item} />}
        ListFooterComponent={<Box style={{ height: 40 }} />}
      />
    );
  });
