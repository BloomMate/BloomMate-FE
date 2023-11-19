import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { FlatList } from 'react-native';

import { PrimaryCommunityQnaListItem } from '../components';

import { useGetQuestionListQuery } from '@/hooks';

type PrimaryCommunityQnaListModuleProps = {};

export const PrimaryCommunityQnaListModule =
  memo<PrimaryCommunityQnaListModuleProps>(() => {
    const { data } = useGetQuestionListQuery();
    const item = data?.DATA;

    return (
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={item}
        ItemSeparatorComponent={() => <Box style={{ height: 16 }} />}
        renderItem={({ item }) => <PrimaryCommunityQnaListItem {...item} />}
        ListFooterComponent={<Box style={{ height: 40 }} />}
      />
    );
  });
