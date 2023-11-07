import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { PlantListItemComponent } from './components';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type PrimaryPlantCurrentListExistModuleProps = {};

const DUMMY_DATA = [
  {
    imageURL: 'https://picsum.photos/100/100',
    name: '토토로',
    planted_at: '2023-10-26T23:22:02.385081+09:00',
    type: 'tomato',
    harvested: false,
  },
  {
    imageURL: 'https://picsum.photos/100/100',
    name: '멋쟁이감자',
    planted_at: '2023-10-21T23:22:02.385081+09:00',
    type: 'potato',
    harvested: false,
  },
  {
    imageURL: 'https://picsum.photos/100/100',
    name: '볼빨간딸기',
    planted_at: '2023-10-22T23:22:02.385081+09:00',
    type: 'strawberry',
    harvested: false,
  },
  {
    imageURL: 'https://picsum.photos/100/100',
    name: '왕옥수수',
    planted_at: '2023-10-28T23:22:02.385081+09:00',
    type: 'corn',
    harvested: false,
  },
];

const gradientColors = ['#D7E3FF', '#C8FFF9'];

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
        <Stack
          style={{
            position: 'absolute',
            bottom: 4,
            right: 2,
          }}
          align="center"
          horizontal
          space={8}>
          <Text variants="labelLarge" fontWeight="Medium" color="gray-700">
            식물 추가하기
          </Text>
          <Box style={{ elevation: 4, borderRadius: 50 }}>
            <TouchableOpacity>
              <LinearGradient
                colors={gradientColors}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                  borderRadius: 50,
                }}>
                <Icon name="add" size={24} color={palette['primary']} />
              </LinearGradient>
            </TouchableOpacity>
          </Box>
        </Stack>
      </>
    );
  });
