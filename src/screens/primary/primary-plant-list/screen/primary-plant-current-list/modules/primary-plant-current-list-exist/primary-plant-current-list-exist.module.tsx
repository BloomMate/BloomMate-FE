import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { FlatList } from 'react-native';

import { PlantListItemComponent } from './components';

type PrimaryPlantCurrentListExistModuleProps = {};

const DUMMY_DATA: {
  id: string;
  imageURL: string;
  name: string;
  planted_at: string;
  type: string;
  harvested: boolean;
  growth_level: 'germination' | 'growth' | 'harvest';
}[] = [
  {
    id: '1',
    imageURL: 'https://picsum.photos/100/100',
    name: '토토로',
    planted_at: '2023-10-26T23:22:02.385081+09:00',
    type: 'tomato',
    harvested: false,
    growth_level: 'germination',
  },
  {
    id: '2',
    imageURL: 'https://picsum.photos/100/100',
    name: '멋쟁이감자',
    planted_at: '2023-10-21T23:22:02.385081+09:00',
    type: 'potato',
    harvested: false,
    growth_level: 'growth',
  },
  {
    id: '3',
    imageURL: 'https://picsum.photos/100/100',
    name: '볼빨간딸기',
    planted_at: '2023-10-22T23:22:02.385081+09:00',
    type: 'strawberry',
    harvested: false,
    growth_level: 'harvest',
  },
  {
    id: '4',
    imageURL: 'https://picsum.photos/100/100',
    name: '왕옥수수',
    planted_at: '2023-10-28T23:22:02.385081+09:00',
    type: 'corn',
    harvested: false,
    growth_level: 'growth',
  },
];

export const PrimaryPlantCurrentListExistModule =
  memo<PrimaryPlantCurrentListExistModuleProps>(() => {
    return (
      <>
        <FlatList
          data={DUMMY_DATA}
          ItemSeparatorComponent={() => <Box style={{ height: 20 }} />}
          renderItem={({ item }) => <PlantListItemComponent {...item} />}
          ListFooterComponent={<Box style={{ height: 40 }} />}
        />
      </>
    );
  });
