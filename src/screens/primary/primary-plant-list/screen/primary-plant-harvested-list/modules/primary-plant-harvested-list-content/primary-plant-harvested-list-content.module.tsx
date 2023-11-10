import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { FlatList } from 'react-native';

import { HarvestedPlantListEmpty, HarvestedPlantListItem } from './components';

import { useGetPlantListQuery } from '@/hooks';

type PrimaryPlantHarvestedListContentModuleProps = {};

export const PrimaryPlantHarvestedListContentModule =
  memo<PrimaryPlantHarvestedListContentModuleProps>(() => {
    const { data } = useGetPlantListQuery();

    const harvestedPlantList = data?.DATA.filter(v => v.is_harvested === true);

    return (
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={harvestedPlantList}
        ListEmptyComponent={<HarvestedPlantListEmpty />}
        ItemSeparatorComponent={() => <Box style={{ height: 20 }} />}
        renderItem={({ item }) => <HarvestedPlantListItem {...item} />}
        ListFooterComponent={<Box style={{ height: 40 }} />}
      />
    );
  });
