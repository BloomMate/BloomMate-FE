import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { FlatList } from 'react-native';

import { PlantListEmpty, PlantListItem } from './components';

import { useGetPlantListQuery } from '@/hooks';

type PrimaryPlantCurrentListContentModuleProps = {};

export const PrimaryPlantCurrentListContentModule =
  memo<PrimaryPlantCurrentListContentModuleProps>(() => {
    const { data } = useGetPlantListQuery();

    const currentPlantList = data?.DATA.filter(v => v.is_harvested === false);

    return (
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={currentPlantList}
        ListEmptyComponent={<PlantListEmpty />}
        ItemSeparatorComponent={() => <Box style={{ height: 20 }} />}
        renderItem={({ item }) => <PlantListItem {...item} />}
        ListFooterComponent={<Box style={{ height: 40 }} />}
      />
    );
  });
