import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { FlatList } from 'react-native';

import { PrimaryCommuntiyQnaListItem } from '../components';

import { QUESTION_LIST_DUMMY_DATA } from '@/dummy-data';

type PrimaryCommunityQnaListModuleProps = {};

export const PrimaryCommunityQnaListModule =
  memo<PrimaryCommunityQnaListModuleProps>(() => {
    const data = QUESTION_LIST_DUMMY_DATA;

    return (
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={data}
        ItemSeparatorComponent={() => <Box style={{ height: 16 }} />}
        renderItem={({ item }) => <PrimaryCommuntiyQnaListItem {...item} />}
        ListFooterComponent={<Box style={{ height: 40 }} />}
      />
    );
  });
